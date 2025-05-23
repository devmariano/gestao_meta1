import React from 'react';
import { Settings, Bell, Lock, User, Globe, Database, HelpCircle } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import { UserRole } from '../../types/user';

const SettingsPage: React.FC = () => {
  const { user } = useAuth();
  const isGPA = user?.role === UserRole.GPA;

  const settings = [
    {
      id: 'profile',
      name: 'Perfil',
      description: 'Gerencie suas informações pessoais e preferências',
      icon: User,
    },
    {
      id: 'notifications',
      name: 'Notificações',
      description: 'Configure suas preferências de notificação',
      icon: Bell,
    },
    {
      id: 'security',
      name: 'Segurança',
      description: 'Gerencie suas configurações de segurança',
      icon: Lock,
    },
    {
      id: 'language',
      name: 'Idioma e Região',
      description: 'Configure idioma e preferências regionais',
      icon: Globe,
    },
    ...(isGPA ? [
      {
        id: 'data',
        name: 'Configurações de Dados',
        description: 'Gerencie integrações e fontes de dados',
        icon: Database,
      }
    ] : []),
    {
      id: 'help',
      name: 'Ajuda e Suporte',
      description: 'Acesse documentação e suporte',
      icon: HelpCircle,
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-neutral-900">Configurações</h1>
        <p className="mt-1 text-sm text-neutral-500">
          Gerencie suas preferências e configurações do sistema
        </p>
      </div>

      <div className="bg-white shadow rounded-lg">
        <div className="p-6">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {settings.map((setting) => (
              <div
                key={setting.id}
                className="relative group rounded-lg p-6 hover:bg-neutral-50 transition-colors duration-200 cursor-pointer"
              >
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary-100 text-primary-600">
                      <setting.icon className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-neutral-900">
                      {setting.name}
                    </h3>
                    <p className="mt-1 text-sm text-neutral-500">
                      {setting.description}
                    </p>
                  </div>
                </div>
                <div className="mt-4">
                  <button
                    type="button"
                    className="text-sm font-medium text-primary-600 hover:text-primary-800"
                  >
                    Configurar
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white shadow rounded-lg">
        <div className="px-6 py-4">
          <h3 className="text-lg font-medium text-neutral-900">
            Informações do Sistema
          </h3>
          <div className="mt-4 border-t border-neutral-200 pt-4">
            <dl className="grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-2">
              <div>
                <dt className="text-sm font-medium text-neutral-500">Versão</dt>
                <dd className="mt-1 text-sm text-neutral-900">1.0.0</dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-neutral-500">
                  Última Atualização
                </dt>
                <dd className="mt-1 text-sm text-neutral-900">
                  {new Date().toLocaleDateString('pt-BR')}
                </dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-neutral-500">
                  Ambiente
                </dt>
                <dd className="mt-1 text-sm text-neutral-900">Produção</dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-neutral-500">
                  Status do Sistema
                </dt>
                <dd className="mt-1 text-sm text-success-600 flex items-center">
                  <span className="h-2 w-2 rounded-full bg-success-500 mr-2"></span>
                  Operacional
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;