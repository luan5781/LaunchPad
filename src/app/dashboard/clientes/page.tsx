export default function ClientesPage() {
  return (
    <div>
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Captador de Clientes</h1>
        <p className="text-gray-600">Ferramentas para atrair e converter leads em clientes.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="font-semibold text-gray-800 mb-4">Gerador de Lead Magnets</h3>
          <p className="text-gray-600 mb-4">Criação de materiais gratuitos para captura de leads.</p>
          
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Tipo de lead magnet
            </label>
            <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500">
              <option>E-book/Guia PDF</option>
              <option>Checklist</option>
              <option>Template/Planilha</option>
              <option>Webinar/Aula gratuita</option>
              <option>Quiz/Diagnóstico</option>
            </select>
          </div>
          
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Título do material
            </label>
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="Ex: 7 Estratégias Infalíveis para Atrair Clientes"
            />
          </div>
          
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Tópicos principais (separados por vírgula)
            </label>
            <textarea
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              rows={3}
              placeholder="Ex: Estratégias de SEO, Marketing de conteúdo, Anúncios pagos"
            ></textarea>
          </div>
          
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors">
            Gerar Lead Magnet
          </button>
          
          <div className="mt-4 p-4 bg-gray-50 rounded-md">
            <h4 className="font-medium text-gray-800 mb-3">Estrutura do E-book</h4>
            
            <div className="space-y-3">
              <div>
                <p className="font-medium text-gray-700">Capa</p>
                <p className="text-sm text-gray-600">Título: 7 Estratégias Infalíveis para Atrair Clientes</p>
                <p className="text-sm text-gray-600">Subtítulo: Um guia prático para empresários e profissionais de marketing</p>
              </div>
              
              <div>
                <p className="font-medium text-gray-700">Introdução</p>
                <p className="text-sm text-gray-600">- O desafio de atrair clientes no mercado atual</p>
                <p className="text-sm text-gray-600">- O que você vai aprender neste guia</p>
                <p className="text-sm text-gray-600">- Como aplicar as estratégias na prática</p>
              </div>
              
              <div>
                <p className="font-medium text-gray-700">Capítulo 1: Estratégias de SEO</p>
                <p className="text-sm text-gray-600">- Fundamentos de SEO para iniciantes</p>
                <p className="text-sm text-gray-600">- Pesquisa de palavras-chave</p>
                <p className="text-sm text-gray-600">- Otimização on-page e off-page</p>
                <p className="text-sm text-gray-600">- Ferramentas gratuitas de SEO</p>
              </div>
              
              <div>
                <p className="font-medium text-gray-700">Capítulo 2: Marketing de Conteúdo</p>
                <p className="text-sm text-gray-600">- Criação de conteúdo relevante</p>
                <p className="text-sm text-gray-600">- Formatos de conteúdo de alto engajamento</p>
                <p className="text-sm text-gray-600">- Calendário editorial</p>
                <p className="text-sm text-gray-600">- Distribuição de conteúdo</p>
              </div>
              
              <div>
                <p className="font-medium text-gray-700">Capítulo 3: Anúncios Pagos</p>
                <p className="text-sm text-gray-600">- Plataformas de anúncios</p>
                <p className="text-sm text-gray-600">- Segmentação de público</p>
                <p className="text-sm text-gray-600">- Criação de anúncios eficazes</p>
                <p className="text-sm text-gray-600">- Otimização de campanhas</p>
              </div>
            </div>
            
            <div className="mt-4 flex space-x-2">
              <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-1 px-3 rounded-md text-sm transition-colors">
                Baixar estrutura
              </button>
              <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-1 px-3 rounded-md text-sm transition-colors">
                Gerar conteúdo completo
              </button>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="font-semibold text-gray-800 mb-4">Construtor de Formulários</h3>
          <p className="text-gray-600 mb-4">Criação de formulários otimizados para conversão.</p>
          
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Objetivo do formulário
            </label>
            <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500">
              <option>Captura de leads</option>
              <option>Inscrição em evento</option>
              <option>Agendamento de consulta</option>
              <option>Pesquisa/Feedback</option>
              <option>Contato/Suporte</option>
            </select>
          </div>
          
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Campos do formulário
            </label>
            <div className="space-y-2">
              <div className="flex items-center">
                <input type="checkbox" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" checked disabled />
                <span className="ml-2 text-gray-700">Nome</span>
              </div>
              <div className="flex items-center">
                <input type="checkbox" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" checked disabled />
                <span className="ml-2 text-gray-700">Email</span>
              </div>
              <div className="flex items-center">
                <input type="checkbox" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" checked />
                <span className="ml-2 text-gray-700">Telefone</span>
              </div>
              <div className="flex items-center">
                <input type="checkbox" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                <span className="ml-2 text-gray-700">Empresa</span>
              </div>
              <div className="flex items-center">
                <input type="checkbox" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                <span className="ml-2 text-gray-700">Cargo</span>
              </div>
              <div className="flex items-center">
                <input type="checkbox" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                <span className="ml-2 text-gray-700">Mensagem</span>
              </div>
            </div>
          </div>
          
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Texto do botão
            </label>
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="Ex: Quero receber o material"
              value="Quero receber o material"
            />
          </div>
          
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors">
            Gerar Formulário
          </button>
          
          <div className="mt-4 p-4 bg-gray-50 rounded-md">
            <h4 className="font-medium text-gray-800 mb-3">Prévia do Formulário</h4>
            
            <div className="p-4 bg-white border border-gray-200 rounded-md">
              <div className="space-y-3">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Nome*
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    placeholder="Seu nome completo"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email*
                  </label>
                  <input
                    type="email"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    placeholder="seu@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Telefone
                  </label>
                  <input
                    type="tel"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    placeholder="(00) 00000-0000"
                  />
                </div>
                <div className="flex items-center">
                  <input type="checkbox" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                  <span className="ml-2 text-sm text-gray-600">Concordo em receber comunicações por email</span>
                </div>
                <button className="w-full bg-blue-600 text-white font-medium py-2 px-4 rounded-md">
                  Quero receber o material
                </button>
              </div>
            </div>
            
            <div className="mt-4 flex space-x-2">
              <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-1 px-3 rounded-md text-sm transition-colors">
                Copiar HTML
              </button>
              <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-1 px-3 rounded-md text-sm transition-colors">
                Baixar código
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h3 className="font-semibold text-gray-800 mb-4">Sequência de Emails</h3>
        <p className="text-gray-600 mb-4">Templates de emails para nutrição de leads.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Objetivo da sequência
            </label>
            <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500">
              <option>Nutrição de leads</option>
              <option>Venda de produto/serviço</option>
              <option>Onboarding de clientes</option>
              <option>Reengajamento</option>
              <option>Pós-venda/Fidelização</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Número de emails
            </label>
            <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500">
              <option>3 emails</option>
              <option>5 emails</option>
              <option>7 emails</option>
              <option>10 emails</option>
            </select>
          </div>
        </div>
        
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Produto/serviço
          </label>
          <input
            type="text"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            placeholder="Ex: Consultoria de marketing digital"
          />
        </div>
        
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Principais benefícios (separados por vírgula)
          </label>
          <input
            type="text"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            placeholder="Ex: Aumento de vendas, Mais visibilidade, Economia de tempo"
          />
        </div>
        
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors">
          Gerar Sequência de Emails
        </button>
        
        <div className="mt-4 p-4 bg-gray-50 rounded-md">
          <h4 className="font-medium text-gray-800 mb-3">Sequência de Nutrição de Leads (5 emails)</h4>
          
          <div className="space-y-4">
            <div className="border-l-4 border-blue-600 pl-4">
              <p className="font-medium text-gray-700">Email 1: Boas-vindas e entrega do lead magnet</p>
              <p className="text-sm text-gray-600">Assunto: Seu [Lead Magnet] está pronto! + Bônus especial</p>
              <p className="text-sm text-gray-600 mt-1">Enviado: Imediatamente após inscrição</p>
              <button className="text-blue-600 hover:text-blue-800 text-sm font-medium mt-1">
                Ver template completo
              </button>
            </div>
            
            <div className="border-l-4 border-gray-300 pl-4">
              <p className="font-medium text-gray-700">Email 2: Valor educacional e dor principal</p>
              <p className="text-sm text-gray-600">Assunto: [Nome], você está cometendo este erro em seu marketing?</p>
              <p className="text-sm text-gray-600 mt-1">Enviado: 2 dias após o Email 1</p>
              <button className="text-blue-600 hover:text-blue-800 text-sm font-medium mt-1">
                Ver template completo
              </button>
            </div>
            
            <div className="border-l-4 border-gray-300 pl-4">
              <p className="font-medium text-gray-700">Email 3: Case de sucesso e prova social</p>
              <p className="text-sm text-gray-600">Assunto: Como [Cliente] aumentou suas vendas em 237% em 90 dias</p>
              <p className="text-sm text-gray-600 mt-1">Enviado: 4 dias após o Email 1</p>
              <button className="text-blue-600 hover:text-blue-800 text-sm font-medium mt-1">
                Ver template completo
              </button>
            </div>
            
            <div className="border-l-4 border-gray-300 pl-4">
              <p className="font-medium text-gray-700">Email 4: Objeções e FAQ</p>
              <p className="text-sm text-gray-600">Assunto: Respondendo às suas dúvidas sobre [Produto/Serviço]</p>
              <p className="text-sm text-gray-600 mt-1">Enviado: 6 dias após o Email 1</p>
              <button className="text-blue-600 hover:text-blue-800 text-sm font-medium mt-1">
                Ver template completo
              </button>
            </div>
            
            <div className="border-l-4 border-gray-300 pl-4">
              <p className="font-medium text-gray-700">Email 5: Oferta e call-to-action</p>
              <p className="text-sm text-gray-600">Assunto: [Nome], esta oferta especial termina hoje</p>
              <p className="text-sm text-gray-600 mt-1">Enviado: 8 dias após o Email 1</p>
              <button className="text-blue-600 hover:text-blue-800 text-sm font-medium mt-1">
                Ver template completo
              </button>
            </div>
          </div>
          
          <button className="mt-4 bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-1 px-3 rounded-md text-sm transition-colors">
            Baixar todos os templates
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
