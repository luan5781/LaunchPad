export default function ConteudoPage() {
  return (
    <div>
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Fábrica de Conteúdo</h1>
        <p className="text-gray-600">Crie materiais de marketing profissionais em minutos.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="font-semibold text-gray-800 mb-4">Gerador de Headlines</h3>
          <p className="text-gray-600 mb-4">Crie títulos persuasivos para diferentes canais.</p>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Seu produto ou serviço
            </label>
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="Ex: Consultoria de marketing"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Benefício principal
            </label>
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="Ex: Aumentar vendas"
            />
          </div>
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors">
            Gerar Headlines
          </button>
          <div className="mt-4 p-4 bg-gray-50 rounded-md">
            <p className="text-sm text-gray-500 mb-2">Resultados aparecerão aqui</p>
            <div className="space-y-2">
              <div className="p-2 bg-white border border-gray-200 rounded">
                <p className="font-medium">Como Aumentar Vendas em 30 Dias com Nossa Consultoria de Marketing</p>
              </div>
              <div className="p-2 bg-white border border-gray-200 rounded">
                <p className="font-medium">Consultoria de Marketing que Realmente Funciona: Aumente suas Vendas Agora</p>
              </div>
              <div className="p-2 bg-white border border-gray-200 rounded">
                <p className="font-medium">Descubra o Segredo para Aumentar Vendas com Nossa Consultoria Especializada</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="font-semibold text-gray-800 mb-4">Assistente de Copywriting</h3>
          <p className="text-gray-600 mb-4">IA que ajuda a escrever textos para posts, emails e anúncios.</p>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Tipo de conteúdo
            </label>
            <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500">
              <option>Post para Instagram</option>
              <option>Email de vendas</option>
              <option>Anúncio para Facebook</option>
              <option>Descrição de produto</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Sobre o que você quer escrever?
            </label>
            <textarea
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              rows={4}
              placeholder="Ex: Lançamento de um novo curso de marketing digital para iniciantes"
            ></textarea>
          </div>
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors">
            Gerar Texto
          </button>
          <div className="mt-4 p-4 bg-gray-50 rounded-md">
            <p className="text-sm text-gray-500 mb-2">Seu texto aparecerá aqui</p>
            <p className="text-gray-700">
              🚀 NOVO LANÇAMENTO! 🚀<br/><br/>
              Cansado de tentar entender o marketing digital sozinho?<br/><br/>
              Nosso novo curso foi feito para INICIANTES como você!<br/><br/>
              ✅ Aulas práticas e direto ao ponto<br/>
              ✅ Estratégias que funcionam em 2025<br/>
              ✅ Suporte personalizado<br/><br/>
              Clique no link da bio e garanta sua vaga com desconto de lançamento! Vagas limitadas!
            </p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="font-semibold text-gray-800 mb-4">Banco de Hashtags</h3>
          <p className="text-gray-600 mb-4">Sugestões contextuais para maximizar alcance nas redes sociais.</p>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Nicho ou tema
            </label>
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="Ex: Marketing Digital"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Rede social
            </label>
            <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500">
              <option>Instagram</option>
              <option>TikTok</option>
              <option>LinkedIn</option>
              <option>Twitter</option>
            </select>
          </div>
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors">
            Gerar Hashtags
          </button>
          <div className="mt-4 p-4 bg-gray-50 rounded-md">
            <p className="text-sm text-gray-500 mb-2">Hashtags sugeridas</p>
            <p className="text-gray-700 break-words">
              #MarketingDigital #MarketingOnline #MarketingEstrategico #MarketingDeConteudo #EmpreendedorismoDigital #NegociosOnline #EstratégiaDigital #MidiaSocial #MarketingDeSucesso #CrescimentoDigital #MarketingB2B #MarketingB2C #InboundMarketing #OutboundMarketing #ConteudoDigital #MarketingTips #DicasDeMarketing
            </p>
            <button className="mt-2 text-blue-600 hover:text-blue-800 text-sm font-medium">
              Copiar todas
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h3 className="font-semibold text-gray-800 mb-4">Roteirista de Vídeos</h3>
        <p className="text-gray-600 mb-4">Estruturas prontas para gravação de conteúdo em vídeo.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Tipo de vídeo
            </label>
            <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500">
              <option>Tutorial passo a passo</option>
              <option>Vídeo explicativo</option>
              <option>Depoimento/Case</option>
              <option>Vídeo de vendas</option>
              <option>Reels/TikTok</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Duração aproximada
            </label>
            <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500">
              <option>Menos de 1 minuto</option>
              <option>1-3 minutos</option>
              <option>3-5 minutos</option>
              <option>5-10 minutos</option>
              <option>Mais de 10 minutos</option>
            </select>
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Tema do vídeo
          </label>
          <input
            type="text"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            placeholder="Ex: Como criar uma estratégia de marketing digital"
          />
        </div>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors">
          Gerar Roteiro
        </button>
        <div className="mt-4 p-4 bg-gray-50 rounded-md">
          <h4 className="font-medium text-gray-800 mb-2">Roteiro: Tutorial passo a passo</h4>
          <div className="space-y-4">
            <div>
              <p className="font-medium text-gray-700">INTRODUÇÃO (0:00-0:30)</p>
              <p className="text-gray-600">- Saudação e apresentação rápida</p>
              <p className="text-gray-600">- Mencionar o problema que a estratégia de marketing digital resolve</p>
              <p className="text-gray-600">- Teaser dos resultados que o espectador pode alcançar</p>
            </div>
            <div>
              <p className="font-medium text-gray-700">PASSO 1: DEFINIÇÃO DE OBJETIVOS (0:30-1:30)</p>
              <p className="text-gray-600">- Explicar a importância de objetivos claros</p>
              <p className="text-gray-600">- Mostrar exemplos de objetivos SMART</p>
              <p className="text-gray-600">- Dica prática para definição de objetivos</p>
            </div>
            <div>
              <p className="font-medium text-gray-700">PASSO 2: IDENTIFICAÇÃO DO PÚBLICO-ALVO (1:30-2:30)</p>
              <p className="text-gray-600">- Como criar uma persona detalhada</p>
              <p className="text-gray-600">- Ferramentas para pesquisa de público</p>
              <p className="text-gray-600">- Exemplo prático de persona</p>
            </div>
            <div>
              <p className="font-medium text-gray-700">PASSO 3: ESCOLHA DE CANAIS (2:30-3:30)</p>
              <p className="text-gray-600">- Critérios para selecionar os melhores canais</p>
              <p className="text-gray-600">- Prós e contras de cada canal principal</p>
              <p className="text-gray-600">- Como distribuir esforços entre canais</p>
            </div>
            <div>
              <p className="font-medium text-gray-700">CONCLUSÃO (3:30-4:00)</p>
              <p className="text-gray-600">- Recapitulação dos 3 passos</p>
              <p className="text-gray-600">- Call-to-action para implementação</p>
              <p className="text-gray-600">- Convite para próximos vídeos da série</p>
            </div>
          </div>
          <button className="mt-4 bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-1 px-3 rounded-md text-sm transition-colors">
            Baixar como PDF
          </button>
        </div>
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
        <div className="flex items-start">
          <div className="flex-shrink-0 bg-blue-100 rounded-full p-2">
            <svg className="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
          </div>
          <div className="ml-4">
            <h3 className="font-semibold text-gray-800">Versão Gratuita</h3>
            <p className="text-gray-600 mt-1">Você está usando a versão de demonstração com recursos limitados. Faça upgrade para acessar todas as funcionalidades e remover limites de uso.</p>
            <button className="mt-3 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-2 px-4 rounded transition-colors">
              Fazer Upgrade por R$37,90/mês
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
