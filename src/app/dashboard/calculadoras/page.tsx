export default function CalculadorasPage() {
  return (
    <div>
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Calculadoras de Negócio</h1>
        <p className="text-gray-600">Ferramentas para precificação e planejamento financeiro.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="font-semibold text-gray-800 mb-4">Precificador Inteligente</h3>
          <p className="text-gray-600 mb-4">Ferramenta para definir preços competitivos e lucrativos.</p>
          
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Tipo de produto/serviço
            </label>
            <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500">
              <option>Serviço por hora</option>
              <option>Serviço por projeto</option>
              <option>Produto físico</option>
              <option>Produto digital</option>
              <option>Assinatura/Recorrência</option>
            </select>
          </div>
          
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Custo total (R$)
            </label>
            <input
              type="number"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="Ex: 100"
            />
          </div>
          
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Tempo dedicado (horas)
            </label>
            <input
              type="number"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="Ex: 5"
            />
          </div>
          
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Margem de lucro desejada (%)
            </label>
            <input
              type="number"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="Ex: 30"
              value="30"
            />
          </div>
          
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors">
            Calcular Preço
          </button>
          
          <div className="mt-4 p-4 bg-gray-50 rounded-md">
            <h4 className="font-medium text-gray-800 mb-3">Resultado da Precificação</h4>
            
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">Custo total:</span>
                <span className="font-medium">R$ 100,00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Valor da sua hora:</span>
                <span className="font-medium">R$ 50,00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Custo por hora:</span>
                <span className="font-medium">R$ 20,00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Margem de lucro:</span>
                <span className="font-medium">30%</span>
              </div>
              <div className="flex justify-between pt-3 border-t border-gray-200">
                <span className="text-gray-800 font-medium">Preço sugerido:</span>
                <span className="text-blue-600 font-bold">R$ 143,00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-800 font-medium">Lucro estimado:</span>
                <span className="text-green-600 font-bold">R$ 43,00</span>
              </div>
            </div>
            
            <div className="mt-4 p-3 bg-blue-50 border border-blue-100 rounded-md">
              <p className="text-sm text-gray-700">
                <span className="font-medium">Análise:</span> Este preço está dentro da média de mercado para serviços similares. Considere oferecer pacotes com diferentes níveis de serviço para aumentar o ticket médio.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="font-semibold text-gray-800 mb-4">Calculadora de ROI</h3>
          <p className="text-gray-600 mb-4">Projeção de retorno sobre investimento em marketing.</p>
          
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Investimento mensal (R$)
            </label>
            <input
              type="number"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="Ex: 1000"
            />
          </div>
          
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Canal principal
            </label>
            <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500">
              <option>Google Ads</option>
              <option>Facebook/Instagram Ads</option>
              <option>LinkedIn Ads</option>
              <option>Email Marketing</option>
              <option>SEO</option>
              <option>Conteúdo Orgânico</option>
            </select>
          </div>
          
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Valor médio por cliente (R$)
            </label>
            <input
              type="number"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="Ex: 300"
            />
          </div>
          
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Taxa de conversão estimada (%)
            </label>
            <input
              type="number"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="Ex: 2"
              value="2"
            />
          </div>
          
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors">
            Calcular ROI
          </button>
          
          <div className="mt-4 p-4 bg-gray-50 rounded-md">
            <h4 className="font-medium text-gray-800 mb-3">Projeção de Resultados</h4>
            
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">Investimento mensal:</span>
                <span className="font-medium">R$ 1.000,00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Cliques/Visualizações estimadas:</span>
                <span className="font-medium">5.000</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Leads estimados:</span>
                <span className="font-medium">250</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Clientes estimados:</span>
                <span className="font-medium">5</span>
              </div>
              <div className="flex justify-between pt-3 border-t border-gray-200">
                <span className="text-gray-800 font-medium">Receita estimada:</span>
                <span className="text-blue-600 font-bold">R$ 1.500,00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-800 font-medium">ROI estimado:</span>
                <span className="text-green-600 font-bold">50%</span>
              </div>
            </div>
            
            <div className="mt-4 p-3 bg-blue-50 border border-blue-100 rounded-md">
              <p className="text-sm text-gray-700">
                <span className="font-medium">Análise:</span> Com um ROI de 50%, seu investimento em marketing está gerando um bom retorno. Para melhorar ainda mais, considere otimizar sua página de conversão ou testar diferentes segmentações de público.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h3 className="font-semibold text-gray-800 mb-4">Orçamento de Marketing</h3>
        <p className="text-gray-600 mb-4">Distribuição otimizada de recursos para diferentes canais.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Orçamento total mensal (R$)
            </label>
            <input
              type="number"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="Ex: 5000"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Objetivo principal
            </label>
            <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500">
              <option>Aquisição de clientes</option>
              <option>Reconhecimento de marca</option>
              <option>Engajamento</option>
              <option>Retenção de clientes</option>
              <option>Lançamento de produto</option>
            </select>
          </div>
        </div>
        
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Estágio do negócio
          </label>
          <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500">
            <option>Iniciante (0-1 ano)</option>
            <option>Em crescimento (1-3 anos)</option>
            <option>Estabelecido (3-5 anos)</option>
            <option>Maduro (5+ anos)</option>
          </select>
        </div>
        
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Canais atuais (selecione todos que utiliza)
          </label>
          <div className="grid grid-cols-2 gap-2">
            <div className="flex items-center">
              <input type="checkbox" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
              <span className="ml-2 text-gray-700">Google Ads</span>
            </div>
            <div className="flex items-center">
              <input type="checkbox" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" checked />
              <span className="ml-2 text-gray-700">Facebook/Instagram</span>
            </div>
            <div className="flex items-center">
              <input type="checkbox" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
              <span className="ml-2 text-gray-700">LinkedIn</span>
            </div>
            <div className="flex items-center">
              <input type="checkbox" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" checked />
              <span className="ml-2 text-gray-700">Email Marketing</span>
            </div>
            <div className="flex items-center">
              <input type="checkbox" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" checked />
              <span className="ml-2 text-gray-700">SEO/Conteúdo</span>
            </div>
            <div className="flex items-center">
              <input type="checkbox" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
              <span className="ml-2 text-gray-700">YouTube</span>
            </div>
          </div>
        </div>
        
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors">
          Gerar Orçamento
        </button>
        
        <div className="mt-4 p-4 bg-gray-50 rounded-md">
          <h4 className="font-medium text-gray-800 mb-3">Distribuição Recomendada</h4>
          
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-gray-700">Facebook/Instagram Ads</span>
                <span className="text-gray-700">40% - R$ 2.000,00</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '40%' }}></div>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-gray-700">SEO/Conteúdo</span>
                <span className="text-gray-700">30% - R$ 1.500,00</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '30%' }}></div>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-gray-700">Email Marketing</span>
                <span className="text-gray-700">15% - R$ 750,00</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '15%' }}></div>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-gray-700">Google Ads</span>
                <span className="text-gray-700">10% - R$ 500,00</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '10%' }}></div>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-gray-700">Reserva/Testes</span>
                <span className="text-gray-700">5% - R$ 250,00</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '5%' }}></div>
              </div>
            </div>
          </div>
          
          <div className="mt-4 p-3 bg-blue-50 border border-blue-100 rounded-md">
            <p className="text-sm text-gray-700">
              <span className="font-medium">Justificativa:</span> Para negócios em estágio inicial com foco em aquisição de clientes, recomendamos maior investimento em canais de mídia paga para resultados rápidos, combinados com SEO/conteúdo para resultados de longo prazo. O email marketing é uma estratégia de baixo custo com alto ROI para nutrir leads.
            </p>
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
