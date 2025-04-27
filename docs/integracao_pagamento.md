# Guia de Integração de Pagamento - MarketingLaunchpad

Este documento fornece instruções detalhadas para integrar sistemas de pagamento ao MarketingLaunchpad, permitindo a monetização da versão premium por R$37,90/mês.

## Opções de Integração

### 1. Stripe (Recomendado para mercado internacional)

O Stripe oferece uma API robusta para pagamentos recorrentes e é amplamente utilizado em aplicações SaaS.

#### Pré-requisitos:
- Conta no Stripe (https://stripe.com)
- Chaves de API do Stripe (pública e secreta)

#### Implementação:

1. **Instalar dependências:**
```bash
npm install @stripe/stripe-js @stripe/react-stripe-js stripe
```

2. **Configurar cliente Stripe (frontend):**
```javascript
// Em /src/lib/stripe.js
import { loadStripe } from '@stripe/stripe-js';
export const stripePromise = loadStripe('sua_chave_publica_stripe');
```

3. **Criar API para checkout (backend):**
```javascript
// Em /src/app/api/create-checkout-session.js
import Stripe from 'stripe';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
      
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: [
          {
            price_data: {
              currency: 'brl',
              product_data: {
                name: 'MarketingLaunchpad Premium',
                description: 'Acesso completo a todas as ferramentas e recursos premium',
              },
              unit_amount: 3790, // R$37,90 em centavos
              recurring: {
                interval: 'month',
              },
            },
            quantity: 1,
          },
        ],
        mode: 'subscription',
        success_url: `${req.headers.origin}/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${req.headers.origin}/dashboard`,
      });
      
      res.status(200).json({ sessionId: session.id });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}
```

4. **Modificar botões de upgrade:**
```javascript
// Em componentes com botão de upgrade
import { useStripe } from '@stripe/react-stripe-js';

// Dentro do componente
const stripe = useStripe();

const handleUpgradeClick = async () => {
  const response = await fetch('/api/create-checkout-session', {
    method: 'POST',
  });
  
  const { sessionId } = await response.json();
  const { error } = await stripe.redirectToCheckout({ sessionId });
  
  if (error) {
    console.error('Erro ao redirecionar para o checkout:', error);
  }
};

// No JSX
<button 
  onClick={handleUpgradeClick}
  className="mt-3 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-2 px-4 rounded transition-colors"
>
  Fazer Upgrade por R$37,90/mês
</button>
```

5. **Configurar webhooks para gerenciar assinaturas:**
```javascript
// Em /src/app/api/webhook/route.js
import { NextResponse } from 'next/server';
import Stripe from 'stripe';

export async function POST(req) {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
  const body = await req.text();
  const sig = req.headers.get('stripe-signature');

  let event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET
    );
  } catch (err) {
    return NextResponse.json({ error: `Webhook Error: ${err.message}` }, { status: 400 });
  }

  // Gerenciar eventos de assinatura
  switch (event.type) {
    case 'customer.subscription.created':
      // Atualizar status do usuário para premium
      break;
    case 'customer.subscription.updated':
      // Atualizar detalhes da assinatura
      break;
    case 'customer.subscription.deleted':
      // Reverter usuário para plano gratuito
      break;
    default:
      console.log(`Evento não tratado: ${event.type}`);
  }

  return NextResponse.json({ received: true });
}
```

### 2. Mercado Pago (Recomendado para Brasil)

O Mercado Pago é uma excelente opção para o mercado brasileiro, com ampla aceitação e suporte a pagamentos recorrentes.

#### Pré-requisitos:
- Conta no Mercado Pago (https://www.mercadopago.com.br)
- Credenciais de acesso (Access Token)

#### Implementação:

1. **Instalar dependências:**
```bash
npm install mercadopago
```

2. **Configurar cliente Mercado Pago:**
```javascript
// Em /src/lib/mercadopago.js
import mercadopago from 'mercadopago';

mercadopago.configure({
  access_token: process.env.MERCADO_PAGO_ACCESS_TOKEN
});

export default mercadopago;
```

3. **Criar API para assinatura:**
```javascript
// Em /src/app/api/create-subscription/route.js
import { NextResponse } from 'next/server';
import mercadopago from '@/lib/mercadopago';

export async function POST(req) {
  try {
    const body = await req.json();
    const { email, name } = body;

    const subscription = await mercadopago.preapproval.create({
      payer_email: email,
      reason: 'MarketingLaunchpad Premium',
      external_reference: `user_${Date.now()}`,
      auto_recurring: {
        frequency: 1,
        frequency_type: 'months',
        transaction_amount: 37.90,
        currency_id: 'BRL'
      },
      back_url: 'https://seu-dominio.com/success',
      status: 'authorized'
    });

    return NextResponse.json({ 
      init_point: subscription.init_point 
    });
  } catch (error) {
    return NextResponse.json({ 
      error: error.message 
    }, { status: 500 });
  }
}
```

4. **Modificar botões de upgrade:**
```javascript
// Em componentes com botão de upgrade
const handleUpgradeClick = async () => {
  try {
    const response = await fetch('/api/create-subscription', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: 'email_do_usuario@exemplo.com',
        name: 'Nome do Usuário',
      }),
    });
    
    const data = await response.json();
    
    if (data.init_point) {
      window.location.href = data.init_point;
    }
  } catch (error) {
    console.error('Erro ao criar assinatura:', error);
  }
};

// No JSX
<button 
  onClick={handleUpgradeClick}
  className="mt-3 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-2 px-4 rounded transition-colors"
>
  Fazer Upgrade por R$37,90/mês
</button>
```

5. **Configurar webhook para notificações:**
```javascript
// Em /src/app/api/webhook-mp/route.js
import { NextResponse } from 'next/server';
import mercadopago from '@/lib/mercadopago';

export async function POST(req) {
  try {
    const body = await req.json();
    
    if (body.type === 'payment') {
      const paymentId = body.data.id;
      const payment = await mercadopago.payment.findById(paymentId);
      
      // Processar pagamento e atualizar status do usuário
      console.log('Pagamento recebido:', payment);
    }
    
    return NextResponse.json({ received: true });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
```

### 3. PayPal (Alternativa internacional)

O PayPal é amplamente reconhecido e oferece suporte a assinaturas recorrentes.

#### Pré-requisitos:
- Conta Business no PayPal (https://www.paypal.com)
- Credenciais de API (Client ID e Secret)

#### Implementação:

1. **Instalar dependências:**
```bash
npm install @paypal/react-paypal-js
```

2. **Configurar provedor PayPal:**
```javascript
// Em /src/app/layout.js
import { PayPalScriptProvider } from '@paypal/react-paypal-js';

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        <PayPalScriptProvider
          options={{
            'client-id': process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID,
            currency: 'BRL',
            intent: 'subscription',
          }}
        >
          {children}
        </PayPalScriptProvider>
      </body>
    </html>
  );
}
```

3. **Criar botão de assinatura:**
```javascript
// Em componentes com botão de upgrade
import { PayPalButtons } from '@paypal/react-paypal-js';

// No JSX
<div className="mt-3">
  <p className="mb-2 text-sm text-gray-700">Fazer Upgrade por R$37,90/mês</p>
  <PayPalButtons
    createSubscription={(data, actions) => {
      return actions.subscription.create({
        plan_id: 'SEU_PLANO_ID_PAYPAL' // Criar este plano no dashboard do PayPal
      });
    }}
    onApprove={(data, actions) => {
      // Atualizar status do usuário para premium
      console.log('Assinatura aprovada:', data.subscriptionID);
      return fetch('/api/activate-subscription', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          subscriptionId: data.subscriptionID,
          userId: 'ID_DO_USUARIO',
        }),
      });
    }}
    style={{
      layout: 'horizontal',
      color: 'blue',
      shape: 'rect',
      label: 'subscribe'
    }}
  />
</div>
```

## Gerenciamento de Usuários Premium

Para qualquer integração de pagamento, você precisará:

1. **Criar tabela de assinaturas no banco de dados:**
```sql
CREATE TABLE subscriptions (
  id SERIAL PRIMARY KEY,
  user_id VARCHAR(255) NOT NULL,
  subscription_id VARCHAR(255) NOT NULL,
  status VARCHAR(50) NOT NULL,
  plan_type VARCHAR(50) NOT NULL,
  price DECIMAL(10, 2) NOT NULL,
  start_date TIMESTAMP NOT NULL,
  end_date TIMESTAMP,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

2. **Implementar verificação de status premium:**
```javascript
// Em /src/lib/subscription.js
export async function isUserPremium(userId) {
  // Verificar no banco de dados se o usuário tem assinatura ativa
  const subscription = await db.subscription.findFirst({
    where: {
      userId,
      status: 'active',
      endDate: {
        gt: new Date()
      }
    }
  });
  
  return !!subscription;
}
```

3. **Proteger rotas premium:**
```javascript
// Em componentes premium
import { useEffect, useState } from 'react';
import { isUserPremium } from '@/lib/subscription';

export default function PremiumFeature() {
  const [isPremium, setIsPremium] = useState(false);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    async function checkStatus() {
      const premium = await isUserPremium('ID_DO_USUARIO');
      setIsPremium(premium);
      setLoading(false);
    }
    
    checkStatus();
  }, []);
  
  if (loading) return <p>Carregando...</p>;
  
  if (!isPremium) {
    return (
      <div className="p-6 bg-blue-50 rounded-lg">
        <h3 className="font-semibold">Recurso Premium</h3>
        <p className="mt-2">Este recurso está disponível apenas para assinantes premium.</p>
        <button className="mt-3 bg-blue-600 text-white px-4 py-2 rounded">
          Fazer Upgrade
        </button>
      </div>
    );
  }
  
  return (
    <div>
      {/* Conteúdo premium aqui */}
    </div>
  );
}
```

## Considerações Finais

- **Ambiente de teste**: Configure primeiro em ambiente de sandbox/teste antes de ir para produção
- **Segurança**: Nunca exponha chaves secretas no frontend
- **Conformidade**: Certifique-se de estar em conformidade com leis de proteção ao consumidor e LGPD
- **Documentação fiscal**: Implemente sistema para emissão de notas fiscais/recibos
- **Suporte**: Crie um processo para lidar com falhas de pagamento, reembolsos e cancelamentos

## Próximos Passos

1. Escolher a plataforma de pagamento preferida
2. Configurar conta e obter credenciais
3. Implementar a integração seguindo o guia acima
4. Testar exaustivamente o fluxo de pagamento
5. Monitorar e gerenciar assinaturas ativas
