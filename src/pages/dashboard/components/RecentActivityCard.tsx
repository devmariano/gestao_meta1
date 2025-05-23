import React from 'react';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { CheckCircle, Clock, AlertCircle, CheckSquare, Target, ThumbsUp } from 'lucide-react';

interface Activity {
  id: string;
  type: 'okr_approved' | 'okr_created' | 'plan_completed' | 'plan_created' | 'best_practice' | 'plan_reviewed';
  title: string;
  date: Date;
  actor: string;
}

const RecentActivityCard: React.FC = () => {
  const activities: Activity[] = [
    {
      id: '1',
      type: 'okr_approved',
      title: 'OKR "Redução da Evasão" aprovado',
      date: new Date(2023, 5, 10, 14, 30),
      actor: 'GPA',
    },
    {
      id: '2',
      type: 'plan_completed',
      title: 'Plano "Mentoria Individualizada" concluído',
      date: new Date(2023, 5, 8, 10, 15),
      actor: 'Maria Silva',
    },
    {
      id: '3',
      type: 'plan_created',
      title: 'Novo plano de ação criado',
      date: new Date(2023, 5, 6, 9, 45),
      actor: 'João Oliveira',
    },
    {
      id: '4',
      type: 'best_practice',
      title: 'Boa prática "Avaliação Diagnóstica" adicionada',
      date: new Date(2023, 5, 3, 15, 0),
      actor: 'GPA',
    },
    {
      id: '5',
      type: 'plan_reviewed',
      title: 'Plano "Capacitação Docente" precisa de revisão',
      date: new Date(2023, 5, 1, 11, 20),
      actor: 'GPA',
    },
  ];

  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'okr_approved':
        return <CheckCircle className="h-5 w-5 text-success-500" />;
      case 'okr_created':
        return <Target className="h-5 w-5 text-primary-500" />;
      case 'plan_completed':
        return <CheckSquare className="h-5 w-5 text-success-500" />;
      case 'plan_created':
        return <CheckSquare className="h-5 w-5 text-secondary-500" />;
      case 'best_practice':
        return <ThumbsUp className="h-5 w-5 text-primary-500" />;
      case 'plan_reviewed':
        return <AlertCircle className="h-5 w-5 text-error-500" />;
      default:
        return <Clock className="h-5 w-5 text-neutral-400" />;
    }
  };

  const formatDate = (date: Date) => {
    return format(date, "d 'de' MMMM 'às' HH:mm", { locale: ptBR });
  };

  return (
    <ul className="-mb-8">
      {activities.map((activity, activityIdx) => (
        <li key={activity.id}>
          <div className="relative pb-8">
            {activityIdx !== activities.length - 1 ? (
              <span
                className="absolute top-5 left-5 -ml-px h-full w-0.5 bg-neutral-200"
                aria-hidden="true"
              />
            ) : null}
            <div className="relative flex items-start space-x-3">
              <div className="relative">
                <div className="h-10 w-10 rounded-full bg-neutral-100 flex items-center justify-center ring-8 ring-white">
                  {getActivityIcon(activity.type)}
                </div>
              </div>
              <div className="min-w-0 flex-1">
                <div>
                  <div className="text-sm">
                    <span className="font-medium text-neutral-900">
                      {activity.actor}
                    </span>
                  </div>
                  <p className="mt-0.5 text-sm text-neutral-500">
                    {formatDate(activity.date)}
                  </p>
                </div>
                <div className="mt-2 text-sm text-neutral-700">
                  <p>{activity.title}</p>
                </div>
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default RecentActivityCard;