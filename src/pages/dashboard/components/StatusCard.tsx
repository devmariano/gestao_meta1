import React from 'react';
import { Link } from 'react-router-dom';
import { TrendingUp, TrendingDown, ArrowRight } from 'lucide-react';

interface StatusCardProps {
  title: string;
  value: number;
  icon: React.ReactNode;
  change?: number;
  trend?: 'up' | 'down';
  isNegative?: boolean;
  href: string;
}

const StatusCard: React.FC<StatusCardProps> = ({
  title,
  value,
  icon,
  change,
  trend,
  isNegative = false,
  href,
}) => {
  return (
    <div className="bg-white overflow-hidden shadow rounded-lg">
      <div className="p-5">
        <div className="flex items-center">
          <div className="flex-shrink-0">{icon}</div>
          <div className="ml-5 w-0 flex-1">
            <dl>
              <dt className="text-sm font-medium text-neutral-500 truncate">{title}</dt>
              <dd>
                <div className="text-lg font-semibold text-neutral-900">{value}</div>
              </dd>
            </dl>
          </div>
        </div>
      </div>
      <div className="bg-neutral-50 px-5 py-3 flex items-center justify-between">
        {change !== undefined && trend && (
          <div className="flex items-center">
            {trend === 'up' ? (
              <TrendingUp
                className={`h-4 w-4 ${
                  isNegative ? 'text-error-500' : 'text-success-500'
                } mr-1`}
              />
            ) : (
              <TrendingDown
                className={`h-4 w-4 ${
                  isNegative ? 'text-success-500' : 'text-error-500'
                } mr-1`}
              />
            )}
            <span
              className={`text-xs font-medium ${
                (trend === 'up' && !isNegative) || (trend === 'down' && isNegative)
                  ? 'text-success-700'
                  : 'text-error-700'
              }`}
            >
              {change} {trend === 'up' ? 'a mais' : 'a menos'} que no mês anterior
            </span>
          </div>
        )}
        <Link
          to={href}
          className="ml-auto text-sm font-medium text-primary-600 hover:text-primary-800 flex items-center"
        >
          Ver detalhes
          <ArrowRight className="ml-1 h-4 w-4" />
        </Link>
      </div>
    </div>
  );
};

export default StatusCard;