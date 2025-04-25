export default function PlanejamentoPage() {
  return (
    <div>
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Módulo de Planejamento</h1>
        <p className="text-gray-600">Defina objetivos e estratégias personalizadas para seu negócio.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="font-semibold text-gray-800 mb-4">Diagnóstico Inicial</h3>
          <p className="text-gray-600 mb-4">Questionário inteligente para identificar objetivos e recursos disponíveis.</p>
          
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Estágio do seu negócio
            </label>
            <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500">
              <option>Ideia (ainda não comecei)</option>
              <option>Iniciante (0-6 meses)</option>
              <option>Em crescimento (6-18 meses)</option>
              <option>Estabelecido (18+ meses)</option>
            </select>
          </div>
          
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Seu objetivo principal
            </label>
            <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500">
              <option>Conseguir primeiros clientes</option>
              <option>Aumentar vendas</option>
              <option>Criar presença online</option>
              <option>Lançar novo produto/serviço</option>
              <option>Melhorar posicionamento</option>
            </select>
          </div>
          
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Recursos disponíveis (selecione todos aplicáveis)
            </label>
            <div className="space-y-2">
              <div className="flex items-center">
                <input type="checkbox" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" checked />
                <span className="ml-2 text-gray-700">Tempo (5+ horas/semana)</span>
              </div>
              <div className="flex items-center">
                <input type="checkbox" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                <span className="ml-2 text-gray-700">Orçamento para marketing</span>
              </div>
              <div className="flex items-center">
                <input type="checkbox" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" checked />
                <span className="ml-2 text-gray-700">Conhecimento básico de marketing</span>
              </div>
              <div className="flex items-center">
                <input type="checkbox" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                <span className="ml-2 text-gray-700">Equipe/Assistentes</span>
              </div>
            </div>
          </div>
          
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Desafios atuais (selecione até 3)
            </label>
            <div className="space-y-2">
              <div className="flex items-center">
                <input type="checkbox" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" checked />
                <span className="ml-2 text-gray-700">Não sei por onde começar</span>
              </div>
              <div className="flex items-center">
                <input type="checkbox" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" checked />
                <span className="ml-2 text-gray-700">Dificuldade em atrair clientes</span>
              </div>
              <div className="flex items-center">
                <input type="checkbox" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" checked />
                <span className="ml-2 text-gray-700">Falta de estratégia clara</span>
              </div>
              <div className="flex items-center">
                <input type="checkbox" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                <span className="ml-2 text-gray-700">Concorrência acirrada</span>
              </div>
              <div className="flex items-center">
                <input type="checkbox" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                <span className="ml-2 text-gray-700">Orçamento limitado</span>
              </div>
            </div>
          </div>
          
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors">
            Analisar e Gerar Plano
          </button>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="font-semibold text-gray-800 mb-4">Gerador de Plano de Marketing</h3>
          <p className="text-gray-600 mb-4">Criação automática de estratégia personalizada em 7, 30 e 90 dias.</p>
          
          <div className="p-4 bg-gray-50 rounded-md mb-4">
            <h4 className="font-medium text-gray-800 mb-2">Diagnóstico</h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Estágio:</span>
                <span className="font-medium">Iniciante (0-6 meses)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Objetivo principal:</span>
                <span className="font-medium">Conseguir primeiros clientes</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Recursos:</span>
                <span className="font-medium">Tempo, Conhecimento básico</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Desafios:</span>
                <span className="font-medium">Orientação, Atração de clientes, Estratégia</span>
              </div>
            </div>
          </div>
          
          <div className="mb-4">
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-medium text-gray-800">Plano de 7 Dias</h4>
              <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">Recomendado para iniciantes</span>
            </div>
            <div className="space-y-3">
              <div className="flex items-start">
                <div className="flex-shrink-0 h-5 w-5 rounded-full border-2 border-blue-600 flex items-center justify-center bg-blue-600 text-white">
                  <span className="text-xs">1</span>
                </div>
                <div className="ml-2">
                  <p className="text-gray-800">Definir sua proposta de valor única</p>
                  <p className="text-sm text-gray-600">Tempo estimado: 1 hora</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 h-5 w-5 rounded-full border-2 border-blue-600 flex items-center justify-center bg-blue-600 text-white">
                  <span className="text-xs">2</span>
                </div>
                <div className="ml-2">
                  <p className="text-gray-800">Criar perfil profissional no Instagram</p>
                  <p className="text-sm text-gray-600">Tempo estimado: 2 horas</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 h-5 w-5 rounded-full border-2 border-blue-600 flex items-center justify-center bg-blue-600 text-white">
                  <span className="text-xs">3</span>
                </div>
                <div className="ml-2">
                  <p className="text-gray-800">Preparar 5 posts iniciais de conteúdo</p>
                  <p className="text-sm text-gray-600">Tempo estimado: 3 horas</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 h-5 w-5 rounded-full border-2 border-blue-600 flex items-center justify-center">
                  <span className="text-xs">4</span>
                </div>
                <div className="ml-2">
                  <p className="text-gray-800">Criar lead magnet simples para captura</p>
                  <p className="text-sm text-gray-600">Tempo estimado: 4 horas</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 h-5 w-5 rounded-full border-2 border-blue-600 flex items-center justify-center">
                  <span className="text-xs">5</span>
                </div>
                <div className="ml-2">
                  <p className="text-gray-800">Contatar 10 potenciais clientes</p>
                  <p className="text-sm text-gray-600">Tempo estimado: 2 horas</p>
                </div>
              </div>
            </div>
            <button className="mt-3 w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors">
              Ver Plano Detalhado
            </button>
          </div>
          
          <div className="flex space-x-2 text-sm">
            <button className="px-3 py-1 border border-gray-300 rounded-md hover:bg-gray-50">
              Plano de 30 dias
            </button>
            <button className="px-3 py-1 border border-gray-300 rounded-md hover:bg-gray-50">
              Plano de 90 dias
            </button>
            <button className="px-3 py-1 border border-gray-300 rounded-md hover:bg-gray-50">
              Exportar PDF
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h3 className="font-semibold text-gray-800 mb-4">Definidor de Persona</h3>
        <p className="text-gray-600 mb-4">Ferramenta para criar perfis detalhados do cliente ideal.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Nicho de mercado
            </label>
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="Ex: Coaching de carreira"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Produto/serviço principal
            </label>
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="Ex: Mentoria individual"
            />
          </div>
        </div>
        
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Características demográficas
          </label>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <div>
              <label className="block text-xs text-gray-500 mb-1">Faixa etária</label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm">
                <option>18-24 anos</option>
                <option>25-34 anos</option>
                <option selected>35-44 anos</option>
                <option>45-54 anos</option>
                <option>55+ anos</option>
              </select>
            </div>
            <div>
              <label className="block text-xs text-gray-500 mb-1">Gênero predominante</label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm">
                <option>Feminino</option>
                <option>Masculino</option>
                <option selected>Ambos igualmente</option>
              </select>
            </div>
            <div>
              <label className="block text-xs text-gray-500 mb-1">Localização</label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm">
                <option>Capitais</option>
                <option selected>Todo Brasil</option>
                <option>Região específica</option>
                <option>Internacional</option>
              </select>
            </div>
          </div>
        </div>
        
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Dores e problemas (separados por vírgula)
          </label>
          <textarea
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            rows={2}
            placeholder="Ex: Insatisfação profissional, falta de direcionamento, estagnação na carreira"
          >Insatisfação profissional, falta de direcionamento, estagnação na carreira</textarea>
        </div>
        
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Objetivos e aspirações (separados por vírgula)
          </label>
          <textarea
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            rows={2}
            placeholder="Ex: Mudança de carreira, aumento de salário, mais satisfação no trabalho"
          >Mudança de carreira, aumento de salário, mais satisfação no trabalho</textarea>
        </div>
        
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors">
          Gerar Persona
        </button>
        
        <div className="mt-4 p-4 bg-gray-50 rounded-md">
          <div className="flex items-start">
            <div className="flex-shrink-0 h-16 w-16 bg-gray-300 rounded-full flex items-center justify-center text-gray-600">
              <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
              </svg>
            </div>
            <div className="ml-4">
              <h4 className="font-medium text-gray-800">Carla Silva, 38 anos</h4>
              <p className="text-sm text-gray-600">Gerente de nível médio em empresa tradicional</p>
              <p className="text-sm text-gray-600">São Paulo, SP</p>
            </div>
          </div>
          
          <div className="mt-4 space-y-3">
            <div>
              <h5 className="text-sm font-medium text-gray-700">Sobre</h5>
              <p className="text-sm text-gray-600">Carla trabalha há 10 anos na mesma empresa e sente que sua carreira estagnou. Formada em Administração, tem experiência sólida mas sente que não está realizando seu potencial. É casada, tem um filho e valoriza equilíbrio entre vida pessoal e profissional.</p>
            </div>
            
            <div>
              <h5 className="text-sm font-medium text-gray-700">Dores e Desafios</h5>
              <ul className="list-disc list-inside text-sm text-gray-600">
                <li>Sente-se insatisfeita com o rumo de sua carreira atual</li>
                <li>Não sabe exatamente qual direção seguir profissionalmente</li>
                <li>Teme estar ficando desatualizada no mercado</li>
                <li>Preocupa-se com a estabilidade financeira ao considerar mudanças</li>
              </ul>
            </div>
            
            <div>
              <h5 className="text-sm font-medium text-gray-700">Objetivos</h5>
              <ul className="list-disc list-inside text-sm text-gray-600">
                <li>Encontrar um caminho profissional mais satisfatório</li>
                <li>Aumentar sua renda em pelo menos 30%</li>
                <li>Desenvolver novas habilidades relevantes para o mercado</li>
                <li>Manter equilíbrio entre vida pessoal e profissional</li>
              </ul>
            </div>
            
            <div>
              <h5 className="text-sm font-medium text-gray-700">Onde encontrá-la</h5>
              <ul className="list-disc list-inside text-sm text-gray-600">
                <li>LinkedIn (uso profissional diário)</li>
                <li>Instagram (uso pessoal frequente)</li>
                <li>Podcasts sobre carreira e desenvolvimento pessoal</li>
                <li>Grupos do Facebook sobre vida profissional</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-4 flex space-x-2">
            <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-1 px-3 rounded-md text-sm transition-colors">
              Editar
            </button>
            <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-1 px-3 rounded-md text-sm transition-colors">
              Baixar PDF
            </button>
            <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-1 px-3 rounded-md text-sm transition-colors">
              Criar nova persona
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
