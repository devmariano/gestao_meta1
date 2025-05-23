import { BellIcon, SearchIcon, Menu } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import { UserRole } from '../../types/user';

interface HeaderProps {
  openSidebar: () => void;
}

export default function Header({ openSidebar }: HeaderProps) {
  const { user, logout } = useAuth();
  
  return (
    <div className="relative z-10 flex-shrink-0 flex h-16 bg-white shadow">
      <button
        type="button"
        className="md:hidden px-4 text-neutral-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500"
        onClick={openSidebar}
      >
        <span className="sr-only">Abrir sidebar</span>
        <Menu className="h-6 w-6" aria-hidden="true" />
      </button>
      
      {/* Role indicator badge */}
      <div className="flex-1 px-4 flex justify-between">
        <div className="flex-1 flex items-center">
          <div className="hidden md:block">
            <div className="px-3 py-1 rounded-full text-xs font-medium bg-primary-50 text-primary-700">
              {user?.role === UserRole.GPA ? 'Perfil GPA' : 'Perfil Escola'}
            </div>
          </div>
          
          <div className="hidden md:ml-6 md:flex md:flex-1 md:items-center md:justify-end">
            <div className="max-w-lg w-full lg:max-w-xs">
              <label htmlFor="search" className="sr-only">
                Buscar
              </label>
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
                  <SearchIcon className="h-5 w-5 text-neutral-400" aria-hidden="true" />
                </div>
                <input
                  id="search"
                  name="search"
                  className="block w-full bg-white border border-neutral-300 rounded-md py-2 pl-10 pr-3 text-sm placeholder-neutral-500 focus:outline-none focus:text-neutral-900 focus:placeholder-neutral-400 focus:ring-1 focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                  placeholder="Buscar"
                  type="search"
                />
              </div>
            </div>
          </div>
        </div>
        
        <div className="ml-4 flex items-center md:ml-6">
          <button
            type="button"
            className="p-1 rounded-full text-neutral-400 hover:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
          >
            <span className="sr-only">Ver notificações</span>
            <div className="relative">
              <BellIcon className="h-6 w-6" aria-hidden="true" />
              <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-error-500 text-white text-xs flex items-center justify-center">
                3
              </span>
            </div>
          </button>

          {/* Profile dropdown */}
          <div className="ml-3 relative">
            <div className="flex items-center">
              <div className="hidden md:block mr-3 text-right">
                <div className="text-sm font-medium text-neutral-800">
                  {user?.name || 'Usuário'}
                </div>
                <div className="text-xs text-neutral-500">
                  {user?.unitName || 'Unidade'}
                </div>
              </div>
              <div className="flex items-center">
                <button
                  type="button"
                  className="h-8 w-8 rounded-full bg-primary-100 flex items-center justify-center text-primary-700 font-medium"
                >
                  {user?.name?.charAt(0) || 'U'}
                </button>
                <button
                  type="button"
                  onClick={logout}
                  className="ml-2 text-xs text-neutral-500 hover:text-neutral-700"
                >
                  Sair
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}