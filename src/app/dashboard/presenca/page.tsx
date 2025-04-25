export default function PresencaPage() {
  return (
    <div>
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Construtor de Presença</h1>
        <p className="text-gray-600">Crie sua presença online profissional em minutos.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="font-semibold text-gray-800 mb-4">Gerador de Landing Pages</h3>
          <p className="text-gray-600 mb-4">Templates otimizados para conversão com personalização simples.</p>
          
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Tipo de página
            </label>
            <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500">
              <option>Captura de leads</option>
              <option>Venda de produto</option>
              <option>Evento/Webinar</option>
              <option>Portfólio profissional</option>
            </select>
          </div>
          
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Título principal
            </label>
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="Ex: Transforme seu Marketing Digital em 30 Dias"
            />
          </div>
          
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Descrição curta
            </label>
            <textarea
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              rows={3}
              placeholder="Ex: Aprenda estratégias comprovadas para atrair mais clientes e aumentar suas vendas com nosso método exclusivo."
            ></textarea>
          </div>
          
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Cor principal
            </label>
            <div className="flex space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded-full cursor-pointer border-2 border-gray-300"></div>
              <div className="w-8 h-8 bg-green-600 rounded-full cursor-pointer"></div>
              <div className="w-8 h-8 bg-purple-600 rounded-full cursor-pointer"></div>
              <div className="w-8 h-8 bg-red-600 rounded-full cursor-pointer"></div>
              <div className="w-8 h-8 bg-yellow-500 rounded-full cursor-pointer"></div>
              <div className="w-8 h-8 bg-gray-800 rounded-full cursor-pointer"></div>
            </div>
          </div>
          
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors">
            Gerar Landing Page
          </button>
          
          <div className="mt-4 p-4 bg-gray-50 rounded-md">
            <p className="text-sm text-gray-500 mb-2">Prévia da página</p>
            <div className="border border-gray-300 rounded-md overflow-hidden">
              <div className="bg-blue-600 text-white p-4 text-center">
                <h4 className="font-bold text-xl">Transforme seu Marketing Digital em 30 Dias</h4>
                <p className="text-sm mt-1">Aprenda estratégias comprovadas para atrair mais clientes</p>
              </div>
              <div className="p-4 bg-white">
                <div className="w-full h-32 bg-gray-200 flex items-center justify-center mb-4">
                  <span className="text-gray-500 text-sm">Imagem principal</span>
                </div>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-700">Estratégias passo a passo</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-700">Templates prontos para usar</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-700">Suporte especializado</span>
                  </div>
                </div>
                <div className="bg-gray-100 p-3 rounded-md">
                  <p className="text-center text-sm text-gray-600">[Formulário de captura]</p>
                </div>
              </div>
            </div>
            <div className="mt-4 flex justify-between">
              <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                Editar template
              </button>
              <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                Baixar HTML
              </button>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="font-semibold text-gray-800 mb-4">Otimizador de Perfis</h3>
          <p className="text-gray-600 mb-4">Checklist e sugestões para perfis profissionais em redes sociais.</p>
          
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Rede social
            </label>
            <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500">
              <option>Instagram</option>
              <option>LinkedIn</option>
              <option>Facebook</option>
              <option>TikTok</option>
              <option>Twitter</option>
            </select>
          </div>
          
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Nicho ou indústria
            </label>
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="Ex: Marketing Digital, Coaching, E-commerce"
            />
          </div>
          
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors">
            Analisar Perfil
          </button>
          
          <div className="mt-4 p-4 bg-gray-50 rounded-md">
            <h4 className="font-medium text-gray-800 mb-3">Checklist para Instagram Profissional</h4>
            
            <div className="space-y-3">
              <div className="flex items-start">
                <div className="flex-shrink-0 h-5 w-5 rounded-full border-2 border-blue-600 flex items-center justify-center bg-blue-600 text-white">
                  <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                </div>
                <div className="ml-2">
                  <p className="text-gray-800">Foto de perfil profissional</p>
                  <p className="text-sm text-gray-600">Use uma foto de rosto clara e profissional ou logo da marca.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 h-5 w-5 rounded-full border-2 border-blue-600"></div>
                <div className="ml-2">
                  <p className="text-gray-800">Nome otimizado com palavra-chave</p>
                  <p className="text-sm text-gray-600">Inclua seu nome + especialidade (Ex: João Silva | Marketing Digital).</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 h-5 w-5 rounded-full border-2 border-blue-600"></div>
                <div className="ml-2">
                  <p className="text-gray-800">Bio com proposta de valor clara</p>
                  <p className="text-sm text-gray-600">Explique quem você ajuda e como, inclua call-to-action.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 h-5 w-5 rounded-full border-2 border-blue-600"></div>
                <div className="ml-2">
                  <p className="text-gray-800">Link estratégico na bio</p>
                  <p className="text-sm text-gray-600">Use ferramenta de múltiplos links ou landing page específica.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 h-5 w-5 rounded-full border-2 border-blue-600"></div>
                <div className="ml-2">
                  <p className="text-gray-800">Destaques organizados por categoria</p>
                  <p className="text-sm text-gray-600">Crie 4-5 destaques com capas padronizadas e conteúdo relevante.</p>
                </div>
              </div>
            </div>
            
            <button className="mt-4 bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-1 px-3 rounded-md text-sm transition-colors">
              Baixar checklist completo
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h3 className="font-semibold text-gray-800 mb-4">Criador de Bio</h3>
        <p className="text-gray-600 mb-4">Ferramenta para criar descrições atraentes para perfis.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Seu nome/marca
            </label>
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="Ex: João Silva ou Empresa XYZ"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Sua especialidade
            </label>
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="Ex: Marketing Digital para E-commerce"
            />
          </div>
        </div>
        
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Quem você ajuda
          </label>
          <input
            type="text"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            placeholder="Ex: Empreendedores que querem aumentar vendas online"
          />
        </div>
        
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Diferenciais (separados por vírgula)
          </label>
          <input
            type="text"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            placeholder="Ex: 5 anos de experiência, +100 clientes atendidos, especialista certificado"
          />
        </div>
        
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Call-to-action
          </label>
          <input
            type="text"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            placeholder="Ex: Clique no link abaixo para agendar uma consultoria gratuita"
          />
        </div>
        
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors">
          Gerar Bio
        </button>
        
        <div className="mt-4 p-4 bg-gray-50 rounded-md">
          <h4 className="font-medium text-gray-800 mb-2">Sua Bio Otimizada</h4>
          <div className="p-4 bg-white border border-gray-200 rounded-md">
            <p className="text-gray-800">
              📊 João Silva | Especialista em Marketing Digital para E-commerce<br/><br/>
              Ajudo empreendedores a aumentarem suas vendas online com estratégias comprovadas<br/><br/>
              ✅ 5 anos de experiência<br/>
              ✅ +100 clientes atendidos<br/>
              ✅ Especialista certificado<br/><br/>
              👇 Clique no link abaixo para agendar uma consultoria gratuita
            </p>
          </div>
          <div className="mt-3 flex space-x-2">
            <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-1 px-3 rounded-md text-sm transition-colors">
              Copiar
            </button>
            <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-1 px-3 rounded-md text-sm transition-colors">
              Editar
            </button>
            <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-1 px-3 rounded-md text-sm transition-colors">
              Gerar variações
            </button>
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
