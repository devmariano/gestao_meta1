import React from 'react';
import { BarChart3, LineChart, PieChart, TrendingUp, Users, Brain } from 'lucide-react';

interface PowerBIEmbedProps {
  panelType: string;
}

const PowerBIEmbed: React.FC<PowerBIEmbedProps> = ({ panelType }) => {
  const getPanelContent = () => {
    switch (panelType) {
      case 'profile':
        return (
          <div className="flex flex-col items-center justify-center h-full text-neutral-600">
            <Users className="h-12 w-12 mb-3 text-primary-500" />
            <h3 className="text-lg font-medium mb-2">Perfil de Entrada dos Alunos</h3>
            <p className="text-sm text-center max-w-md">
              Visualização da caracterização dos alunos (dados socioeconômicos, 
              defasagem, estilo de aprendizagem e outros indicadores).
            </p>
          </div>
        );
      case 'formative':
        return (
          <div className="flex flex-col items-center justify-center h-full text-neutral-600">
            <LineChart className="h-12 w-12 mb-3 text-secondary-500" />
            <h3 className="text-lg font-medium mb-2">Acompanhamento do Percurso Formativo</h3>
            <p className="text-sm text-center max-w-md">
              Acompanhamento em tempo real dos indicadores de frequência, 
              evasão, engajamento e aproveitamento dos alunos.
            </p>
          </div>
        );
      case 'external':
        return (
          <div className="flex flex-col items-center justify-center h-full text-neutral-600">
            <BarChart3 className="h-12 w-12 mb-3 text-accent-500" />
            <h3 className="text-lg font-medium mb-2">Avaliações Externas de Resultado</h3>
            <p className="text-sm text-center max-w-md">
              Análise da proficiência, evolução por coorte, defasagens 
              e correlações com avaliações externas.
            </p>
          </div>
        );
      case 'employability':
        return (
          <div className="flex flex-col items-center justify-center h-full text-neutral-600">
            <TrendingUp className="h-12 w-12 mb-3 text-success-500" />
            <h3 className="text-lg font-medium mb-2">Egressos e Empregabilidade</h3>
            <p className="text-sm text-center max-w-md">
              Monitoramento da inserção no mercado, renda, percepção 
              de empregadores e egressos.
            </p>
          </div>
        );
      case 'external-factors':
        return (
          <div className="flex flex-col items-center justify-center h-full text-neutral-600">
            <PieChart className="h-12 w-12 mb-3 text-warning-500" />
            <h3 className="text-lg font-medium mb-2">Fatores Externos</h3>
            <p className="text-sm text-center max-w-md">
              Visualização de indicadores de contexto regional e parcerias 
              locais que influenciam nos resultados.
            </p>
          </div>
        );
      case 'opportunities':
        return (
          <div className="flex flex-col items-center justify-center h-full text-neutral-600">
            <Brain className="h-12 w-12 mb-3 text-primary-500" />
            <h3 className="text-lg font-medium mb-2">Mapa de Oportunidades e Riscos</h3>
            <p className="text-sm text-center max-w-md">
              Síntese com alertas, pontuações por dimensão e sugestões automáticas
              baseadas na análise de todos os indicadores.
            </p>
          </div>
        );
      default:
        return (
          <div className="flex flex-col items-center justify-center h-full text-neutral-600">
            <p className="text-center">Selecione um painel para visualizar os dados</p>
          </div>
        );
    }
  };

  return (
    <div className="w-full h-full flex items-center justify-center">
      {getPanelContent()}
    </div>
  );
};

export default PowerBIEmbed;