import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, CheckCircle, Clock, AlertTriangle, ArrowUpRight, ThumbsUp, BarChart3, Target, CheckSquare } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import { UserRole } from '../../types/user';
import StatusCard from './components/StatusCard';
import OKRStatusChart from './components/OKRStatusChart';
import RecentActivityCard from './components/RecentActivityCard';
import ActionPlanProgress from './components/ActionPlanProgress';
import PowerBIEmbed from '../analytics/components/PowerBIEmbed';

const Dashboard: React.FC = () => {
  const { user } = useAuth();
  const [selectedDataPanel, setSelectedDataPanel] = useState('profile');
  
  const isGPA = user?.role === UserRole.GPA;
  
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-neutral-900">
            {isGPA ? 'Dashboard da Rede' : 'Dashboard da Unidade'}
          </h1>
          <p className="mt-1 text-sm text-neutral-500">
            {isGPA 
              ? 'Visão geral dos resultados e progresso das escolas' 
              : `Visão geral dos resultados e ações da unidade ${user?.unitName}`
            }
          </p>
        </div>
        <div className="mt-4 md:mt-0 flex space-x-3">
          <Link
            to="/okrs"
            className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
          >
            <Target className="h-4 w-4 mr-2" />
            {isGPA ? 'Validar OKRs' : 'Novo Objetivo'}
          </Link>
          <Link
            to="/action-plans"
            className="inline-flex items-center px-4 py-2 border border-neutral-300 shadow-sm text-sm font-medium rounded-md text-neutral-700 bg-white hover:bg-neutral-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
          >
            <CheckSquare className="h-4 w-4 mr-2" />
            {isGPA ? 'Validar Planos' : 'Novo Plano'}
          </Link>
        </div>
      </div>

      {/* Status Summary */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        <StatusCard 
          title="OKRs Cadastrados" 
          value={isGPA ? 48 : 12} 
          icon={<Target className="h-6 w-6 text-primary-600" />}
          change={8}
          trend="up"
          href="/okrs"
        />
        <StatusCard 
          title="Planos em Andamento" 
          value={isGPA ? 36 : 8} 
          icon={<Clock className="h-6 w-6 text-secondary-600" />} 
          change={2}
          trend="up"
          href="/action-plans"
        />
        <StatusCard 
          title="Planos Concluídos" 
          value={isGPA ? 24 : 5} 
          icon={<CheckCircle className="h-6 w-6 text-success-600" />}
          change={3}
          trend="up" 
          href="/action-plans"
        />
        <StatusCard 
          title="Ações com Atraso" 
          value={isGPA ? 12 : 3} 
          icon={<AlertTriangle className="h-6 w-6 text-error-600" />}
          change={1}
          trend="down"
          isNegative
          href="/action-plans"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content - Left Column */}
        <div className="lg:col-span-2 space-y-6">
          {/* Data Panel Selector */}
          <div className="bg-white shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg font-medium leading-6 text-neutral-900 flex items-center">
                <BarChart3 className="h-5 w-5 mr-2 text-primary-600" />
                Painéis de Dados
              </h3>
              <div className="mt-4 flex space-x-1">
                <button
                  onClick={() => setSelectedDataPanel('profile')}
                  className={`px-3 py-2 text-sm font-medium rounded-md ${
                    selectedDataPanel === 'profile'
                      ? 'bg-primary-100 text-primary-700'
                      : 'text-neutral-500 hover:text-neutral-700'
                  }`}
                >
                  Perfil de Entrada
                </button>
                <button
                  onClick={() => setSelectedDataPanel('formative')}
                  className={`px-3 py-2 text-sm font-medium rounded-md ${
                    selectedDataPanel === 'formative'
                      ? 'bg-primary-100 text-primary-700'
                      : 'text-neutral-500 hover:text-neutral-700'
                  }`}
                >
                  Percurso Formativo
                </button>
                <button
                  onClick={() => setSelectedDataPanel('external')}
                  className={`px-3 py-2 text-sm font-medium rounded-md ${
                    selectedDataPanel === 'external'
                      ? 'bg-primary-100 text-primary-700'
                      : 'text-neutral-500 hover:text-neutral-700'
                  }`}
                >
                  Avaliações Externas
                </button>
              </div>
              
              <div className="mt-4 bg-neutral-50 rounded-lg h-64 flex items-center justify-center border border-neutral-200">
                <PowerBIEmbed panelType={selectedDataPanel} />
              </div>
              
              <div className="mt-4 text-right">
                <Link
                  to="/analytics"
                  className="inline-flex items-center text-sm font-medium text-primary-600 hover:text-primary-800"
                >
                  Ver todos os painéis
                  <ArrowUpRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
          
          {/* OKR Status Chart */}
          <div className="bg-white shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg font-medium leading-6 text-neutral-900 flex items-center">
                <Target className="h-5 w-5 mr-2 text-primary-600" />
                Status dos OKRs
              </h3>
              <div className="mt-4">
                <OKRStatusChart isGPA={isGPA} />
              </div>
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="space-y-6">
          {/* Action Plan Progress */}
          <div className="bg-white shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg font-medium leading-6 text-neutral-900 flex items-center">
                <CheckSquare className="h-5 w-5 mr-2 text-primary-600" />
                Progresso dos Planos
              </h3>
              <div className="mt-4">
                <ActionPlanProgress isGPA={isGPA} />
              </div>
            </div>
          </div>
          
          {/* Recent Activity */}
          <div className="bg-white shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg font-medium leading-6 text-neutral-900 flex items-center">
                <Calendar className="h-5 w-5 mr-2 text-primary-600" />
                Atividade Recente
              </h3>
              <div className="mt-6 flow-root">
                <RecentActivityCard />
              </div>
            </div>
          </div>

          {/* Recommended Practices */}
          {!isGPA && (
            <div className="bg-white shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg font-medium leading-6 text-neutral-900 flex items-center">
                  <ThumbsUp className="h-5 w-5 mr-2 text-primary-600" />
                  Boas Práticas Recomendadas
                </h3>
                <div className="mt-4 space-y-4">
                  <div className="p-3 bg-success-50 rounded-md border border-success-200">
                    <h4 className="font-medium text-success-800">Mentoria de Alunos</h4>
                    <p className="mt-1 text-sm text-success-700">Programa de acompanhamento individualizado</p>
                    <div className="mt-2 flex justify-between items-center">
                      <span className="text-xs text-success-600">SENAI Curitiba</span>
                      <Link 
                        to="/best-practices"
                        className="text-xs font-medium text-success-700 hover:text-success-800"
                      >
                        Ver detalhes
                      </Link>
                    </div>
                  </div>
                  <div className="p-3 bg-primary-50 rounded-md border border-primary-200">
                    <h4 className="font-medium text-primary-800">Análise de Evasão</h4>
                    <p className="mt-1 text-sm text-primary-700">Sistema preventivo de alerta</p>
                    <div className="mt-2 flex justify-between items-center">
                      <span className="text-xs text-primary-600">SENAI São Paulo</span>
                      <Link 
                        to="/best-practices"
                        className="text-xs font-medium text-primary-700 hover:text-primary-800"
                      >
                        Ver detalhes
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="mt-4 text-right">
                  <Link
                    to="/best-practices"
                    className="inline-flex items-center text-sm font-medium text-primary-600 hover:text-primary-800"
                  >
                    Ver todas as boas práticas
                    <ArrowUpRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;