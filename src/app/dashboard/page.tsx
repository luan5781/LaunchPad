import Link from 'next/link';

export default function Dashboard() {
  return (
    <div>
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
        <p className="text-gray-600">Bem-vindo ao MarketingLaunchpad. Vamos começar!</p>
      </header>

      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-gray-800">Seu progresso</h2>
          <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">Dia 1 de 7</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
          <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '15%' }}></div>
        </div>
        <div className="flex justify-between text-sm text-gray-600">
          <span>Iniciante</span>
          <span>Primeiro Cliente</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-gray-800">Tarefas de hoje</h3>
            <span className="text-sm text-gray-500">2 de 5 concluídas</span>
          </div>
          <ul className="space-y-3">
            <li className="flex items-start">
              <div className="flex-shrink-0 h-5 w-5 rounded-full border-2 border-blue-600 flex items-center justify-center bg-blue-600 text-white">
                <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                </svg>
              </div>
              <span className="ml-2 text-gray-600 line-through">Completar diagnóstico inicial</span>
            </li>
            <li className="flex items-start">
              <div className="flex-shrink-0 h-5 w-5 rounded-full border-2 border-blue-600 flex items-center justify-center bg-blue-600 text-white">
                <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                </svg>
              </div>
              <span className="ml-2 text-gray-600 line-through">Definir sua persona ideal</span>
            </li>
            <li className="flex items-start">
              <div className="flex-shrink-0 h-5 w-5 rounded-full border-2 border-blue-600"></div>
              <span className="ml-2 text-gray-800">Criar seu primeiro conteúdo</span>
            </li>
            <li className="flex items-start">
              <div className="flex-shrink-0 h-5 w-5 rounded-full border-2 border-blue-600"></div>
              <span className="ml-2 text-gray-800">Configurar perfil profissional</span>
            </li>
            <li className="flex items-start">
              <div className="flex-shrink-0 h-5 w-5 rounded-full border-2 border-blue-600"></div>
              <span className="ml-2 text-gray-800">Definir estratégia de preços</span>
            </li>
          </ul>
          <button className="mt-4 text-blue-600 hover:text-blue-800 text-sm font-medium">
            Ver todas as tarefas
          </button>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="font-semibold text-gray-800 mb-4">Recursos populares</h3>
          <ul className="space-y-3">
            <li>
              <Link href="/dashboard/recursos/template-instagram" className="flex items-center text-gray-800 hover:text-blue-600">
                <svg className="w-5 h-5 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                </svg>
                Template para posts no Instagram
              </Link>
            </li>
            <li>
              <Link href="/dashboard/recursos/proposta-comercial" className="flex items-center text-gray-800 hover:text-blue-600">
                <svg className="w-5 h-5 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                </svg>
                Modelo de proposta comercial
              </Link>
            </li>
            <li>
              <Link href="/dashboard/recursos/email-sequencia" className="flex items-center text-gray-800 hover:text-blue-600">
                <svg className="w-5 h-5 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                </svg>
                Sequência de emails para leads
              </Link>
            </li>
            <li>
              <Link href="/dashboard/recursos/script-vendas" className="flex items-center text-gray-800 hover:text-blue-600">
                <svg className="w-5 h-5 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                </svg>
                Script de vendas para WhatsApp
              </Link>
            </li>
          </ul>
          <button className="mt-4 text-blue-600 hover:text-blue-800 text-sm font-medium">
            Ver biblioteca completa
          </button>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="font-semibold text-gray-800 mb-4">Próximos passos</h3>
          <div className="space-y-4">
            <div className="border-l-4 border-blue-600 pl-4">
              <p className="text-sm text-gray-500">Recomendado para hoje</p>
              <h4 className="font-medium text-gray-800">Criar sua primeira landing page</h4>
              <p className="text-sm text-gray-600 mt-1">Tempo estimado: 30 minutos</p>
              <Link href="/dashboard/presenca/landing-page" className="text-blue-600 hover:text-blue-800 text-sm font-medium mt-2 inline-block">
                Começar agora
              </Link>
            </div>
            <div className="border-l-4 border-gray-300 pl-4">
              <p className="text-sm text-gray-500">Próxima etapa</p>
              <h4 className="font-medium text-gray-800">Configurar seu primeiro lead magnet</h4>
              <p className="text-sm text-gray-600 mt-1">Tempo estimado: 45 minutos</p>
            </div>
          </div>
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
            <h3 className="font-semibold text-gray-800">Precisa de ajuda?</h3>
            <p className="text-gray-600 mt-1">Nosso assistente virtual está disponível 24/7 para responder suas dúvidas e ajudar com qualquer funcionalidade.</p>
            <button className="mt-3 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-2 px-4 rounded transition-colors">
              Falar com assistente
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
