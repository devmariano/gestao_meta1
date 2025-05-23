import React from 'react';
import { CheckCircle, Clock, AlertTriangle, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ActionPlanProgressProps {
  isGPA: boolean;
}

interface ActionPlan {
  id: string;
  title: string;
  status: 'completed' | 'in-progress' | 'delayed' | 'not-started';
  progress: number;
  dueDate: string;
  unit?: string;
}

const ActionPlanProgress: React.FC<ActionPlanProgressProps> = ({ isGPA }) => {
  const plans: ActionPlan[] = isGPA
    ? [
        {
          id: '1',
          title: 'Programa de mentoria individualizada',
          status: 'completed',
          progress: 100,
          dueDate: '10/06/2023',
          unit: 'SENAI Taguatinga',
        },
        {
          id: '2',
          title: 'Reformulação do processo avaliativo',
          status: 'in-progress',
          progress: 75,
          dueDate: '15/08/2023',
          unit: 'SENAI Brasília',
        },
        {
          id: '3',
          title: 'Implementação de avaliação diagnóstica',
          status: 'delayed',
          progress: 40,
          dueDate: '01/07/2023',
          unit: 'SENAI Gama',
        },
        {
          id: '4',
          title: 'Capacitação de docentes em metodologias ativas',
          status: 'not-started',
          progress: 0,
          dueDate: '30/09/2023',
          unit: 'SENAI Sobradinho',
        },
      ]
    : [
        {
          id: '1',
          title: 'Programa de mentoria individualizada',
          status: 'completed',
          progress: 100,
          dueDate: '10/06/2023',
        },
        {
          id: '2',
          title: 'Reformulação do processo avaliativo',
          status: 'in-progress',
          progress: 75,
          dueDate: '15/08/2023',
        },
        {
          id: '3',
          title: 'Implementação de avaliação diagnóstica',
          status: 'delayed',
          progress: 40,
          dueDate: '01/07/2023',
        },
      ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="h-5 w-5 text-success-500" />;
      case 'in-progress':
        return <Clock className="h-5 w-5 text-secondary-500" />;
      case 'delayed':
        return <AlertTriangle className="h-5 w-5 text-error-500" />;
      case 'not-started':
        return <HelpCircle className="h-5 w-5 text-neutral-400" />;
      default:
        return null;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-success-500';
      case 'in-progress':
        return 'bg-secondary-500';
      case 'delayed':
        return 'bg-error-500';
      case 'not-started':
        return 'bg-neutral-300';
      default:
        return 'bg-neutral-300';
    }
  };

  return (
    <div className="space-y-3">
      {plans.map((plan) => (
        <div key={plan.id} className="p-3 bg-neutral-50 rounded-md">
          <div className="flex items-start">
            <div className="flex-shrink-0 mt-1">{getStatusIcon(plan.status)}</div>
            <div className="ml-3 flex-1">
              <div className="text-sm font-medium text-neutral-800">{plan.title}</div>
              {isGPA && plan.unit && (
                <div className="text-xs text-neutral-500 mt-0.5">{plan.unit}</div>
              )}
              <div className="mt-2">
                <div className="flex items-center justify-between text-xs mb-1">
                  <span className="text-neutral-500">Progresso</span>
                  <span className="font-medium text-neutral-700">{plan.progress}%</span>
                </div>
                <div className="w-full bg-neutral-200 rounded-full h-2">
                  <div
                    className={`${getStatusColor(plan.status)} h-2 rounded-full`}
                    style={{ width: `${plan.progress}%` }}
                  ></div>
                </div>
              </div>
              <div className="mt-2 flex justify-between items-center text-xs">
                <span className="text-neutral-500">Prazo: {plan.dueDate}</span>
                <Link
                  to="/action-plans"
                  className="font-medium text-primary-600 hover:text-primary-800"
                >
                  Detalhes
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
      <div className="mt-2 text-center">
        <Link
          to="/action-plans"
          className="text-sm font-medium text-primary-600 hover:text-primary-800"
        >
          Ver todos os planos
        </Link>
      </div>
    </div>
  );
};

export default ActionPlanProgress;