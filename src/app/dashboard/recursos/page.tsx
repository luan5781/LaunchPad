export default function RecursosPage() {
  return (
    <div>
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Biblioteca de Recursos</h1>
        <p className="text-gray-600">Templates, scripts e materiais prontos para uso imediato.</p>
      </header>

      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-gray-800">Recursos Populares</h2>
          <div className="relative">
            <input
              type="text"
              className="pl-8 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="Buscar recursos..."
            />
            <svg className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-36 bg-blue-50 flex items-center justify-center">
              <svg className="h-16 w-16 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
              </svg>
            </div>
            <div className="p-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold text-gray-800">Template de Proposta Comercial</h3>
                <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">Popular</span>
              </div>
              <p className="text-sm text-gray-600 mb-4">Modelo profissional para apresentar seus serviços e conquistar clientes.</p>
              <div className="flex justify-between items-center">
                <span className="text-xs text-gray-500">Formato: DOCX, PDF</span>
                <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                  Baixar
                </button>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-36 bg-blue-50 flex items-center justify-center">
              <svg className="h-16 w-16 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
              </svg>
            </div>
            <div className="p-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold text-gray-800">Planilha de Gestão de Leads</h3>
                <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">Novo</span>
              </div>
              <p className="text-sm text-gray-600 mb-4">Acompanhe seus leads, status de negociação e taxa de conversão.</p>
              <div className="flex justify-between items-center">
                <span className="text-xs text-gray-500">Formato: XLSX, Google Sheets</span>
                <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                  Baixar
                </button>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-36 bg-blue-50 flex items-center justify-center">
              <svg className="h-16 w-16 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
              </svg>
            </div>
            <div className="p-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold text-gray-800">Calendário Editorial</h3>
                <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">Popular</span>
              </div>
              <p className="text-sm text-gray-600 mb-4">Organize seu conteúdo com planejamento mensal e ideias de posts.</p>
              <div className="flex justify-between items-center">
                <span className="text-xs text-gray-500">Formato: XLSX, Google Sheets</span>
                <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                  Baixar
                </button>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-36 bg-blue-50 flex items-center justify-center">
              <svg className="h-16 w-16 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
            </div>
            <div className="p-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold text-gray-800">Sequência de Emails para Leads</h3>
                <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2.5 py-0.5 rounded">Premium</span>
              </div>
              <p className="text-sm text-gray-600 mb-4">7 emails prontos para nutrir leads e aumentar conversões.</p>
              <div className="flex justify-between items-center">
                <span className="text-xs text-gray-500">Formato: TXT, HTML</span>
                <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                  Visualizar
                </button>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-36 bg-blue-50 flex items-center justify-center">
              <svg className="h-16 w-16 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
              </svg>
            </div>
            <div className="p-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold text-gray-800">Kit de Ideias para Conteúdo</h3>
                <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2.5 py-0.5 rounded">Premium</span>
              </div>
              <p className="text-sm text-gray-600 mb-4">100+ ideias de conteúdo para nunca mais ficar sem inspiração.</p>
              <div className="flex justify-between items-center">
                <span className="text-xs text-gray-500">Formato: PDF</span>
                <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                  Visualizar
                </button>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-36 bg-blue-50 flex items-center justify-center">
              <svg className="h-16 w-16 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path>
              </svg>
            </div>
            <div className="p-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold text-gray-800">Checklist de Lançamento</h3>
                <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">Popular</span>
              </div>
              <p className="text-sm text-gray-600 mb-4">Passo a passo completo para lançar produtos ou serviços com sucesso.</p>
              <div className="flex justify-between items-center">
                <span className="text-xs text-gray-500">Formato: PDF, DOCX</span>
                <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                  Baixar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Categorias</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow cursor-pointer">
            <div className="flex items-center">
              <div className="bg-blue-100 rounded-full p-2 mr-3">
                <svg className="h-5 w-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                </svg>
              </div>
              <div>
                <h3 className="font-medium text-gray-800">Templates</h3>
                <p className="text-xs text-gray-500">23 recursos</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow cursor-pointer">
            <div className="flex items-center">
              <div className="bg-green-100 rounded-full p-2 mr-3">
                <svg className="h-5 w-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
                </svg>
              </div>
              <div>
                <h3 className="font-medium text-gray-800">Planilhas</h3>
                <p className="text-xs text-gray-500">15 recursos</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow cursor-pointer">
            <div className="flex items-center">
              <div className="bg-purple-100 rounded-full p-2 mr-3">
                <svg className="h-5 w-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
              </div>
              <div>
                <h3 className="font-medium text-gray-800">Email Marketing</h3>
                <p className="text-xs text-gray-500">12 recursos</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow cursor-pointer">
            <div className="flex items-center">
              <div className="bg-yellow-100 rounded-full p-2 mr-3">
                <svg className="h-5 w-5 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path>
                </svg>
              </div>
              <div>
                <h3 className="font-medium text-gray-800">Análise de Dados</h3>
                <p className="text-xs text-gray-500">8 recursos</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h3 className="font-semibold text-gray-800 mb-4">Recursos Premium</h3>
        <p className="text-gray-600 mb-4">Acesse nossa biblioteca completa com mais de 200 recursos exclusivos para impulsionar seu marketing.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <div className="border border-gray-200 rounded-md p-3">
            <div className="flex items-center">
              <svg className="h-5 w-5 text-yellow-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zm7-10a1 1 0 01.707.293l.707.707L15.414 5a1 1 0 11-1.414 1.414L13 5.414l-1.293 1.293a1 1 0 01-1.414-1.414l.707-.707L10.293 3A1 1 0 0112 2z" clipRule="evenodd"></path>
              </svg>
              <span className="font-medium text-gray-800">Scripts de Vendas</span>
            </div>
            <p className="text-xs text-gray-600 mt-1">25 scripts para diferentes situações de vendas e objeções.</p>
          </div>
          
          <div className="border border-gray-200 rounded-md p-3">
            <div className="flex items-center">
              <svg className="h-5 w-5 text-yellow-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zm7-10a1 1 0 01.707.293l.707.707L15.414 5a1 1 0 11-1.414 1.414L13 5.414l-1.293 1.293a1 1 0 01-1.414-1.414l.707-.707L10.293 3A1 1 0 0112 2z" clipRule="evenodd"></path>
              </svg>
              <span className="font-medium text-gray-800">Pacote de Landing Pages</span>
            </div>
            <p className="text-xs text-gray-600 mt-1">10 templates HTML otimizados para conversão.</p>
          </div>
          
          <div className="border border-gray-200 rounded-md p-3">
            <div className="flex items-center">
              <svg className="h-5 w-5 text-yellow-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zm7-10a1 1 0 01.707.293l.707.707L15.414 5a1 1 0 11-1.414 1.414L13 5.414l-1.293 1.293a1 1 0 01-1.414-1.414l.707-.707L10.293 3A1 1 0 0112 2z" clipRule="evenodd"></path>
              </svg>
              <span className="font-medium text-gray-800">Banco de Imagens</span>
            </div>
            <p className="text-xs text-gray-600 mt-1">500+ imagens profissionais para uso comercial.</p>
          </div>
        </div>
        
        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors">
          Fazer Upgrade por R$37,90/mês
        </button>
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
