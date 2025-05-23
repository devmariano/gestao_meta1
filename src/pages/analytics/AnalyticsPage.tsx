import React, { useState } from 'react';
import { BarChart3, LineChart, PieChart, TrendingUp, Users, Brain } from 'lucide-react';
import PowerBIEmbed from './components/PowerBIEmbed';

const AnalyticsPage: React.FC = () => {
  const [activePanel, setActivePanel] = useState('profile');

  const panels = [
    { id: 'profile', name: 'Perfil de Entrada', icon: Users, color: 'text-primary-500' },
    { id: 'formative', name: 'Percurso Formativo', icon: LineChart, color: 'text-secondary-500' },
    { id: 'external', name: 'Avaliações Externas', icon: BarChart3, color: 'text-accent-500' },
    { id: 'employability', name: 'Egressos', icon: TrendingUp, color: 'text-success-500' },
    { id: 'external-factors', name: 'Fatores Externos', icon: PieChart, color: 'text-warning-500' },
    { id: 'opportunities', name: 'Oportunidades e Riscos', icon: Brain, color: 'text-primary-500' },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-neutral-900">Painéis de Indicadores</h1>
        <p className="mt-1 text-sm text-neutral-500">
          Visualização de dados para análise e tomada de decisão
        </p>
      </div>

      <div className="bg-white shadow rounded-lg overflow-hidden">
        <div className="border-b border-neutral-200">
          <nav className="flex flex-wrap">
            {panels.map((panel) => {
              const isActive = activePanel === panel.id;
              return (
                <button
                  key={panel.id}
                  onClick={() => setActivePanel(panel.id)}
                  className={`relative py-4 px-1 flex items-center text-sm font-medium mx-3 ${
                    isActive
                      ? 'text-primary-600 border-b-2 border-primary-500'
                      : 'text-neutral-500 hover:text-neutral-700 hover:border-neutral-300'
                  }`}
                >
                  <panel.icon className={`h-5 w-5 mr-2 ${panel.color}`} />
                  {panel.name}
                </button>
              );
            })}
          </nav>
        </div>

        <div className="p-6">
          <div className="h-[60vh] bg-neutral-50 rounded-lg border border-neutral-200">
            <PowerBIEmbed panelType={activePanel} />
          </div>
          
          <div className="mt-4 bg-primary-50 border border-primary-100 rounded-md p-4">
            <h3 className="text-sm font-medium text-primary-800">Sobre este painel</h3>
            <p className="mt-1 text-sm text-primary-700">
              Os dados apresentados nesta visualização são provenientes de um Data Lake 
              integrado que consolida informações de diversas fontes. Para interações mais avançadas, 
              você pode acessar diretamente no Power BI.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsPage;