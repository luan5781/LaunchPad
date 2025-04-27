import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 py-16">
        <header className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="bg-blue-600 text-white p-4 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 8.5c0 1.5-.5 2.5-2 3.5v7.5a1.5 1.5 0 0 1-3 0v-7l-7 3-7-3v7.5a1.5 1.5 0 0 1-3 0V12c-1.5-1-2-2-3.5C-2 5 12 -2 22 8.5z"></path>
              </svg>
            </div>
          </div>
          <h1 className="text-5xl font-bold text-blue-800 mb-4">MarketingLaunchpad</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Decole no Marketing Digital. Resultados desde o Dia 1.
          </p>
        </header>

        <main>
          <section className="bg-white rounded-xl shadow-xl p-8 mb-16">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
              Do Zero ao Primeiro Cliente em 7 Dias
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-blue-50 p-6 rounded-lg">
                <div className="text-blue-600 text-4xl font-bold mb-2">1</div>
                <h3 className="text-xl font-semibold mb-2">Planejamento Simplificado</h3>
                <p className="text-gray-600">
                  Defina seus objetivos e receba um plano personalizado em minutos, sem conhecimento técnico.
                </p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg">
                <div className="text-blue-600 text-4xl font-bold mb-2">2</div>
                <h3 className="text-xl font-semibold mb-2">Ferramentas Prontas</h3>
                <p className="text-gray-600">
                  Acesse templates, geradores de conteúdo e calculadoras para implementação imediata.
                </p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg">
                <div className="text-blue-600 text-4xl font-bold mb-2">3</div>
                <h3 className="text-xl font-semibold mb-2">Resultados Visíveis</h3>
                <p className="text-gray-600">
                  Acompanhe seu progresso e conquiste seus primeiros clientes em tempo recorde.
                </p>
              </div>
            </div>
          </section>

          <section className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Tudo o que você precisa para começar
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-blue-700 mb-2">Dashboard Central</h3>
                <p className="text-gray-600">Visão geral do seu progresso e próximos passos</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-blue-700 mb-2">Fábrica de Conteúdo</h3>
                <p className="text-gray-600">Crie materiais de marketing com assistência de IA</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-blue-700 mb-2">Captador de Clientes</h3>
                <p className="text-gray-600">Ferramentas para atrair e converter leads</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-blue-700 mb-2">Biblioteca de Recursos</h3>
                <p className="text-gray-600">Templates e materiais prontos para uso</p>
              </div>
            </div>
            <Link href="/auth/login" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors">
              Acessar Plataforma
            </Link>
          </section>

          <section className="bg-gray-50 rounded-xl p-8 mb-16">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-6 md:mb-0 md:pr-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                  Feito para iniciantes, projetado para resultados
                </h2>
                <p className="text-gray-600 mb-4">
                  O MarketingLaunchpad elimina a confusão e a paralisia da análise que afeta iniciantes em marketing digital.
                </p>
                <p className="text-gray-600 mb-4">
                  Nossa abordagem passo a passo guiada coloca você em ação imediatamente, gerando resultados visíveis desde o primeiro dia.
                </p>
                <div className="flex items-center">
                  <div className="bg-green-100 text-green-800 font-semibold px-3 py-1 rounded-full text-sm mr-3">
                    Garantia de 30 dias
                  </div>
                  <div className="bg-blue-100 text-blue-800 font-semibold px-3 py-1 rounded-full text-sm">
                    Suporte dedicado
                  </div>
                </div>
              </div>
              <div className="md:w-1/2 bg-white p-6 rounded-lg shadow-lg">
                <div className="text-center mb-4">
                  <div className="inline-block bg-blue-100 text-blue-800 font-bold px-4 py-2 rounded-full mb-2">
                    Planos Flexíveis
                  </div>
                  <h3 className="text-2xl font-bold">Comece Grátis</h3>
                </div>
                <div className="flex justify-center items-baseline mb-4">
                  <span className="text-4xl font-bold text-gray-800">R$0</span>
                  <span className="text-gray-500 ml-2">Versão Demo</span>
                </div>
                <ul className="mb-6">
                  <li className="flex items-center mb-2">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Acesso limitado aos módulos
                  </li>
                  <li className="flex items-center mb-2">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Templates básicos
                  </li>
                  <li className="flex items-center mb-2">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Recursos de demonstração
                  </li>
                </ul>
                <Link href="/auth/register" className="block w-full bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-3 px-4 rounded-lg text-center transition-colors mb-4">
                  Começar Grátis
                </Link>
                
                <div className="text-center mt-6 pt-6 border-t border-gray-200">
                  <h4 className="font-bold text-lg mb-2">Versão Premium</h4>
                  <div className="flex justify-center items-baseline mb-4">
                    <span className="text-4xl font-bold text-gray-800">R$37,90</span>
                    <span className="text-gray-500 ml-2">/mês</span>
                  </div>
                  <ul className="mb-6 text-left">
                    <li className="flex items-center mb-2">
                      <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      Acesso a todos os 7 módulos
                    </li>
                    <li className="flex items-center mb-2">
                      <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      Biblioteca completa de templates
                    </li>
                    <li className="flex items-center mb-2">
                      <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      Atualizações gratuitas
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      Bônus exclusivos
                    </li>
                  </ul>
                  <Link href="/auth/register?plan=premium" className="block w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg text-center transition-colors">
                    Obter Versão Premium
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </main>

        <footer className="text-center text-gray-600 pt-8 border-t border-gray-200">
          <p>© 2025 MarketingLaunchpad. Todos os direitos reservados.</p>
        </footer>
      </div>
    </div>
  );
}
