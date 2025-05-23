import { Link, useLocation } from 'react-router-dom';
import { cn } from '../../utils/cn';
import { useAuth } from '../../contexts/AuthContext';
import { ChevronDown } from 'lucide-react';

interface SidebarProps {
  navigationItems: {
    name: string;
    href: string;
    icon: React.ElementType;
  }[];
}

export default function Sidebar({ navigationItems }: SidebarProps) {
  const location = useLocation();
  const { user } = useAuth();

  return (
    <div className="hidden md:flex md:flex-shrink-0">
      <div className="flex flex-col w-64">
        <div className="flex flex-col h-0 flex-1">
          <div className="flex items-center h-16 flex-shrink-0 px-4 bg-primary-600">
            <Link to="/" className="flex items-center space-x-2">
              <svg width="32" height="32" viewBox="0 0 32 32" className="text-white" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="32" height="32" rx="8" fill="currentColor"/>
                <path d="M8 10H24M8 16H18M8 22H14" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
                <circle cx="22" cy="22" r="4" stroke="white" strokeWidth="2"/>
                <path d="M22 20V22H24" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <div className="flex flex-col">
                <span className="text-white font-medium text-sm">SENAI</span>
                <span className="text-white text-xs opacity-80">Gestão de Resultados</span>
              </div>
            </Link>
          </div>

          <div className="flex-1 flex flex-col overflow-y-auto">
            <div className="px-3 mt-6">
              <div className="bg-white rounded-lg shadow-sm p-2">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <div className="h-8 w-8 rounded-full bg-primary-100 flex items-center justify-center">
                      <span className="text-primary-700 font-medium text-sm">
                        {user?.name?.charAt(0) || 'U'}
                      </span>
                    </div>
                  </div>
                  <div className="ml-3 overflow-hidden">
                    <p className="text-sm font-medium text-neutral-800 truncate">
                      {user?.name || 'Usuário'}
                    </p>
                    <div className="flex items-center text-xs text-neutral-500">
                      <span className="truncate">{user?.unitName || 'Unidade'}</span>
                      <ChevronDown className="ml-1 h-3 w-3" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <nav className="mt-5 flex-1 px-2 space-y-1">
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
                      'group flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors duration-150'
                    )}
                  >
                    <item.icon
                      className={cn(
                        isActive 
                          ? 'text-primary-500' 
                          : 'text-neutral-400 group-hover:text-neutral-500',
                        'mr-3 flex-shrink-0 h-5 w-5 transition-colors duration-150'
                      )}
                      aria-hidden="true"
                    />
                    {item.name}
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}