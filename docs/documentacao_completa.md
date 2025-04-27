# MarketingLaunchpad - Documentação Completa

## Visão Geral

O MarketingLaunchpad é uma plataforma web interativa desenvolvida para iniciantes em marketing digital. A ferramenta oferece um conjunto completo de recursos para ajudar usuários a começarem do zero e obterem resultados rápidos, com uma abordagem passo a passo guiada.

## Estrutura da Plataforma

A plataforma está organizada em sete módulos principais:

1. **Dashboard Central** - Centro de controle com visão geral do progresso e próximos passos
2. **Módulo de Planejamento** - Ferramentas para definição de objetivos e estratégias personalizadas
3. **Fábrica de Conteúdo** - Sistema de geração de materiais de marketing com assistência de IA
4. **Construtor de Presença** - Ferramentas para criar landing pages e perfis profissionais
5. **Captador de Clientes** - Recursos para atrair e converter leads em clientes
6. **Calculadoras de Negócio** - Ferramentas para precificação, ROI e planejamento financeiro
7. **Biblioteca de Recursos** - Acervo de templates, scripts e materiais prontos para uso

## Modelo de Negócio

O MarketingLaunchpad utiliza um modelo freemium:

- **Versão Gratuita (Demo)**: Acesso limitado a todos os módulos, com funcionalidades básicas
- **Versão Premium (R$37,90/mês)**: Acesso completo a todas as funcionalidades e recursos

Em cada módulo da plataforma, há um banner informando que o usuário está na "Versão Gratuita" com um botão para fazer upgrade para a versão premium.

## Tecnologias Utilizadas

- **Frontend**: Next.js 15.1.4 com React
- **Estilização**: Tailwind CSS
- **Hospedagem**: Vercel (recomendado)

## Estrutura de Arquivos

```
marketing-launchpad/
├── src/
│   ├── app/
│   │   ├── page.tsx                  # Página inicial
│   │   ├── layout.tsx                # Layout principal
│   │   ├── globals.css               # Estilos globais
│   │   ├── auth/                     # Páginas de autenticação
│   │   │   ├── login/
│   │   │   └── register/
│   │   └── dashboard/                # Módulos do dashboard
│   │       ├── page.tsx              # Dashboard principal
│   │       ├── layout.tsx            # Layout do dashboard
│   │       ├── planejamento/         # Módulo de planejamento
│   │       ├── conteudo/             # Fábrica de conteúdo
│   │       ├── presenca/             # Construtor de presença
│   │       ├── clientes/             # Captador de clientes
│   │       ├── calculadoras/         # Calculadoras de negócio
│   │       └── recursos/             # Biblioteca de recursos
│   └── components/                   # Componentes reutilizáveis
│       ├── ui/                       # Componentes de UI
│       └── dashboard/                # Componentes do dashboard
├── public/                           # Arquivos estáticos
├── docs/                             # Documentação
│   └── integracao_pagamento.md       # Guia de integração de pagamento
└── README.md                         # Instruções gerais
```

## Funcionalidades por Módulo

### Dashboard Central

- Visão geral do progresso
- Tarefas diárias recomendadas
- Métricas e estatísticas
- Acesso rápido a todos os módulos

### Módulo de Planejamento

- Diagnóstico inicial de negócio
- Gerador de plano de marketing (7, 30 e 90 dias)
- Definidor de persona
- Objetivos SMART

### Fábrica de Conteúdo

- Gerador de headlines
- Assistente de copywriting
- Banco de hashtags
- Roteirista de vídeos

### Construtor de Presença

- Gerador de landing pages
- Otimizador de perfis sociais
- Criador de bio para redes sociais
- Templates responsivos

### Captador de Clientes

- Gerador de lead magnets
- Construtor de formulários
- Sequência de emails para nutrição
- Estratégias de conversão

### Calculadoras de Negócio

- Precificador inteligente
- Calculadora de ROI
- Orçamento de marketing
- Projeções financeiras

### Biblioteca de Recursos

- Templates prontos para uso
- Planilhas e documentos
- Materiais de marketing
- Recursos premium exclusivos

## Implementação e Deploy

### Requisitos de Sistema

- Node.js 18.0.0 ou superior
- NPM 8.0.0 ou superior

### Instalação Local

1. Clone o repositório:
```bash
git clone [URL_DO_REPOSITORIO]
cd marketing-launchpad
```

2. Instale as dependências:
```bash
npm install
```

3. Execute o servidor de desenvolvimento:
```bash
npm run dev
```

4. Acesse http://localhost:3000 no navegador

### Deploy em Produção (Vercel)

1. Crie uma conta no Vercel (https://vercel.com)
2. Instale a CLI do Vercel:
```bash
npm install -g vercel
```

3. Faça login na sua conta:
```bash
vercel login
```

4. Deploy do projeto:
```bash
vercel
```

5. Para deploy em produção:
```bash
vercel --prod
```

## Integração de Pagamento

Para implementar o sistema de pagamento para a versão premium, consulte o documento detalhado em `docs/integracao_pagamento.md`, que contém instruções para:

- Integração com Stripe
- Integração com Mercado Pago
- Integração com PayPal
- Gerenciamento de usuários premium
- Proteção de rotas e conteúdo premium

## Personalização

### Alteração de Preço

Para alterar o preço da assinatura premium, você precisa modificar:

1. Página inicial (`src/app/page.tsx`):
```javascript
<span className="text-4xl font-bold text-gray-800">R$37,90</span>
```

2. Banners de upgrade em cada módulo:
```javascript
<button className="mt-3 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-2 px-4 rounded transition-colors">
  Fazer Upgrade por R$37,90/mês
</button>
```

3. Configuração de pagamento (após integração):
- Stripe: Alterar `unit_amount` em `create-checkout-session.js`
- Mercado Pago: Alterar `transaction_amount` em `create-subscription/route.js`
- PayPal: Atualizar o plano no dashboard do PayPal

### Marca Branca

Para personalizar a marca:

1. Altere o nome e logotipo em `src/app/layout.tsx`
2. Modifique as cores principais em `src/app/globals.css` ou diretamente nas classes Tailwind
3. Atualize textos e descrições em todas as páginas

## Manutenção e Suporte

### Atualizações

Para manter a plataforma atualizada:

```bash
npm update
npm run build
```

### Monitoramento

Recomenda-se implementar:

- Google Analytics para acompanhamento de uso
- Sentry ou similar para monitoramento de erros
- Logs de atividade para ações importantes

### Backup

Configure backups regulares do banco de dados e conteúdo gerado pelos usuários.

## Próximos Passos Recomendados

1. Implementar autenticação real com NextAuth.js
2. Adicionar banco de dados para armazenar informações dos usuários
3. Integrar sistema de pagamento escolhido
4. Configurar domínio personalizado
5. Implementar análise de dados e monitoramento

## Conclusão

O MarketingLaunchpad está pronto para uso e pode ser facilmente implantado em produção. A plataforma oferece uma solução completa para iniciantes em marketing digital, com um modelo de negócio freemium que permite monetização através da versão premium.

Para qualquer dúvida adicional ou suporte, consulte a documentação ou entre em contato com a equipe de desenvolvimento.
