import { Fragment } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '../../utils/cn';
import { useAuth } from '../../contexts/AuthContext';

interface MobileNavigationProps {
  navigationItems: {
    name: string;
    href: string;
    icon: React.ElementType;
  }[];
  onNavigate: () => void;
}

export default function MobileNavigation({ navigationItems, onNavigate }: MobileNavigationProps) {
  const location = useLocation();
  const { user } = useAuth();

  return (
    <Fragment>
      <div className="flex-shrink-0 flex items-center px-4">
        <Link to="/" className="flex items-center space-x-2" onClick={onNavigate}>
          <svg width="32" height="32" viewBox="0 0 32 32" className="text-primary-600" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="32" height="32" rx="8" fill="currentColor"/>
            <path d="M8 10H24M8 16H18M8 22H14" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
            <circle cx="22" cy="22" r="4" stroke="white" strokeWidth="2"/>
            <path d="M22 20V22H24" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <div className="flex flex-col">
            <span className="text-primary-600 font-medium text-sm">SENAI</span>
            <span className="text-primary-500 text-xs opacity-80">Gestão de Resultados</span>
          </div>
        </Link>
      </div>
      <div className="mt-5 flex-1 h-0 overflow-y-auto">
        <div className="px-2 space-y-1">
          {navigationItems.map((item) => {
            const isActive = location.pathname === item.href;
            return (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  isActive
                    ? 'bg-primary-50 text-primary-600'
                    : 'text-neutral-600 hover:bg-neutral-100',
                  'group flex items-center px-2 py-2 text-base font-medium rounded-md'
                )}
                onClick={onNavigate}
              >
                <item.icon
                  className={cn(
                    isActive 
                      ? 'text-primary-500' 
                      : 'text-neutral-400 group-hover:text-neutral-500',
                    'mr-4 flex-shrink-0 h-5 w-5'
                  )}
                  aria-hidden="true"
                />
                {item.name}
              </Link>
            );
          })}
        </div>
        <div className="pt-4 pb-3 border-t border-neutral-200">
          <div className="flex items-center px-5">
            <div className="flex-shrink-0">
              <div className="h-10 w-10 rounded-full bg-primary-100 flex items-center justify-center text-primary-700 font-medium">
                {user?.name?.charAt(0) || 'U'}
              </div>
            </div>
            <div className="ml-3">
              <div className="text-base font-medium text-neutral-800">{user?.name || 'Usuário'}</div>
              <div className="text-sm font-medium text-neutral-500">{user?.unitName || 'Unidade'}</div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}