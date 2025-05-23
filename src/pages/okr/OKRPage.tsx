import React, { useState } from 'react';
import { Target, Trash2, CheckCircle, XCircle, AlertCircle, Filter, Plus, Edit } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import { UserRole } from '../../types/user';

enum OKRStatus {
  DRAFT = 'draft',
  PENDING = 'pending',
  APPROVED = 'approved',
  REJECTED = 'rejected'
}

interface OKR {
  id: string;
  title: string;
  description: string;
  status: OKRStatus;
  category: string;
  responsible: string;
  targetDate: string;
  createdAt: string;
  updatedAt: string;
  unit?: string;
}

const OKRPage: React.FC = () => {
  const { user } = useAuth();
  const isGPA = user?.role === UserRole.GPA;
  const [activeTab, setActiveTab] = useState<string>(isGPA ? 'pending' : 'all');
  
  // Mock data
  const mockOKRs: OKR[] = isGPA 
    ? [
        {
          id: '1',
          title: 'Reduzir evasão escolar em 15%',
          description: 'Implementar estratégias para diminuir a evasão escolar nos cursos técnicos',
          status: OKRStatus.PENDING,
          category: 'Evasão',
          responsible: 'Maria Silva',
          targetDate: '31/12/2023',
          createdAt: '10/05/2023',
          updatedAt: '10/05/2023',
          unit: 'SENAI Taguatinga',
        },
        {
          id: '2',
          title: 'Aumentar aproveitamento em matemática em 20%',
          description: 'Implementar novas metodologias de ensino para melhorar o desempenho em matemática',
          status: OKRStatus.PENDING,
          category: 'Desempenho Acadêmico',
          responsible: 'Carlos Mendes',
          targetDate: '30/11/2023',
          createdAt: '05/05/2023',
          updatedAt: '05/05/2023',
          unit: 'SENAI Brasília',
        },
        {
          id: '3',
          title: 'Melhorar satisfação dos alunos em 25%',
          description: 'Implementar melhorias na infraestrutura e atendimento para aumentar a satisfação',
          status: OKRStatus.APPROVED,
          category: 'Satisfação',
          responsible: 'Ana Oliveira',
          targetDate: '15/12/2023',
          createdAt: '01/05/2023',
          updatedAt: '12/05/2023',
          unit: 'SENAI Gama',
        },
        {
          id: '4',
          title: 'Aumentar taxa de empregabilidade em 10%',
          description: 'Fortalecer parcerias com empresas para melhorar a empregabilidade dos egressos',
          status: OKRStatus.REJECTED,
          category: 'Empregabilidade',
          responsible: 'José Santos',
          targetDate: '31/12/2023',
          createdAt: '28/04/2023',
          updatedAt: '13/05/2023',
          unit: 'SENAI Ceilândia',
        },
      ]
    : [
        {
          id: '1',
          title: 'Reduzir evasão escolar em 15%',
          description: 'Implementar estratégias para diminuir a evasão escolar nos cursos técnicos',
          status: OKRStatus.PENDING,
          category: 'Evasão',
          responsible: 'Maria Silva',
          targetDate: '31/12/2023',
          createdAt: '10/05/2023',
          updatedAt: '10/05/2023',
        },
        {
          id: '2',
          title: 'Aumentar aproveitamento em matemática em 20%',
          description: 'Implementar novas metodologias de ensino para melhorar o desempenho em matemática',
          status: OKRStatus.DRAFT,
          category: 'Desempenho Acadêmico',
          responsible: 'Carlos Mendes',
          targetDate: '30/11/2023',
          createdAt: '05/05/2023',
          updatedAt: '05/05/2023',
        },
        {
          id: '3',
          title: 'Melhorar satisfação dos alunos em 25%',
          description: 'Implementar melhorias na infraestrutura e atendimento para aumentar a satisfação',
          status: OKRStatus.APPROVED,
          category: 'Satisfação',
          responsible: 'Ana Oliveira',
          targetDate: '15/12/2023',
          createdAt: '01/05/2023',
          updatedAt: '12/05/2023',
        },
        {
          id: '4',
          title: 'Aumentar taxa de empregabilidade em 10%',
          description: 'Fortalecer parcerias com empresas para melhorar a empregabilidade dos egressos',
          status: OKRStatus.REJECTED,
          category: 'Empregabilidade',
          responsible: 'José Santos',
          targetDate: '31/12/2023',
          createdAt: '28/04/2023',
          updatedAt: '13/05/2023',
        },
      ];

  // Filter OKRs based on active tab
  const filteredOKRs = mockOKRs.filter(okr => {
    if (activeTab === 'all') return true;
    if (activeTab === 'draft') return okr.status === OKRStatus.DRAFT;
    if (activeTab === 'pending') return okr.status === OKRStatus.PENDING;
    if (activeTab === 'approved') return okr.status === OKRStatus.APPROVED;
    if (activeTab === 'rejected') return okr.status === OKRStatus.REJECTED;
    return true;
  });

  const getStatusBadge = (status: OKRStatus) => {
    switch (status) {
      case OKRStatus.DRAFT:
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-neutral-100 text-neutral-800">
            Rascunho
          </span>
        );
      case OKRStatus.PENDING:
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-warning-100 text-warning-800">
            Pendente
          </span>
        );
      case OKRStatus.APPROVED:
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-success-100 text-success-800">
            Aprovado
          </span>
        );
      case OKRStatus.REJECTED:
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-error-100 text-error-800">
            Reprovado
          </span>
        );
      default:
        return null;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-neutral-900">
            {isGPA ? 'Validação de OKRs' : 'Objetivos e Resultados-Chave (OKRs)'}
          </h1>
          <p className="mt-1 text-sm text-neutral-500">
            {isGPA
              ? 'Validação dos objetivos cadastrados pelas unidades'
              : 'Gerenciamento dos objetivos estratégicos da unidade'}
          </p>
        </div>
        {!isGPA && (
          <div className="mt-4 sm:mt-0">
            <button
              type="button"
              className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
            >
              <Plus className="h-4 w-4 mr-2" />
              Novo Objetivo
            </button>
          </div>
        )}
      </div>

      <div className="bg-white shadow overflow-hidden sm:rounded-lg">
        <div className="border-b border-neutral-200">
          <nav className="flex space-x-8 px-6" aria-label="Tabs">
            {!isGPA && (
              <button
                onClick={() => setActiveTab('all')}
                className={`${
                  activeTab === 'all'
                    ? 'border-primary-500 text-primary-600'
                    : 'border-transparent text-neutral-500 hover:text-neutral-700 hover:border-neutral-300'
                } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
              >
                Todos
              </button>
            )}
            {!isGPA && (
              <button
                onClick={() => setActiveTab('draft')}
                className={`${
                  activeTab === 'draft'
                    ? 'border-primary-500 text-primary-600'
                    : 'border-transparent text-neutral-500 hover:text-neutral-700 hover:border-neutral-300'
                } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
              >
                Rascunhos
              </button>
            )}
            <button
              onClick={() => setActiveTab('pending')}
              className={`${
                activeTab === 'pending'
                  ? 'border-primary-500 text-primary-600'
                  : 'border-transparent text-neutral-500 hover:text-neutral-700 hover:border-neutral-300'
              } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
            >
              {isGPA ? 'Pendentes de Validação' : 'Pendentes'}
            </button>
            <button
              onClick={() => setActiveTab('approved')}
              className={`${
                activeTab === 'approved'
                  ? 'border-primary-500 text-primary-600'
                  : 'border-transparent text-neutral-500 hover:text-neutral-700 hover:border-neutral-300'
              } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
            >
              Aprovados
            </button>
            <button
              onClick={() => setActiveTab('rejected')}
              className={`${
                activeTab === 'rejected'
                  ? 'border-primary-500 text-primary-600'
                  : 'border-transparent text-neutral-500 hover:text-neutral-700 hover:border-neutral-300'
              } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
            >
              Reprovados
            </button>
          </nav>
        </div>

        <div className="px-6 py-4 flex justify-between items-center bg-neutral-50 border-b border-neutral-200">
          <div className="text-sm text-neutral-500">
            {filteredOKRs.length} objetivos encontrados
          </div>
          <button
            type="button"
            className="inline-flex items-center px-3 py-1.5 border border-neutral-300 shadow-sm text-sm font-medium rounded-md text-neutral-700 bg-white hover:bg-neutral-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
          >
            <Filter className="h-4 w-4 mr-2" />
            Filtros
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-neutral-200">
            <thead className="bg-neutral-50">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider"
                >
                  Objetivo
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider"
                >
                  Categoria
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider"
                >
                  Responsável
                </th>
                {isGPA && (
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider"
                  >
                    Unidade
                  </th>
                )}
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider"
                >
                  Prazo
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider"
                >
                  Status
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-right text-xs font-medium text-neutral-500 uppercase tracking-wider"
                >
                  Ações
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-neutral-200">
              {filteredOKRs.map((okr) => (
                <tr key={okr.id} className="hover:bg-neutral-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center rounded-md bg-primary-100 text-primary-600">
                        <Target className="h-5 w-5" />
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-neutral-900">{okr.title}</div>
                        <div className="text-sm text-neutral-500 max-w-xs truncate">
                          {okr.description}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-neutral-900">{okr.category}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-neutral-900">{okr.responsible}</div>
                  </td>
                  {isGPA && (
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-neutral-900">{okr.unit}</div>
                    </td>
                  )}
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-neutral-900">{okr.targetDate}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {getStatusBadge(okr.status)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    {isGPA && okr.status === OKRStatus.PENDING ? (
                      <div className="flex justify-end space-x-2">
                        <button
                          type="button"
                          className="inline-flex items-center p-1 border border-transparent rounded-full shadow-sm text-white bg-success-600 hover:bg-success-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-success-500"
                          title="Aprovar"
                        >
                          <CheckCircle className="h-4 w-4" />
                        </button>
                        <button
                          type="button"
                          className="inline-flex items-center p-1 border border-transparent rounded-full shadow-sm text-white bg-error-600 hover:bg-error-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-error-500"
                          title="Reprovar"
                        >
                          <XCircle className="h-4 w-4" />
                        </button>
                      </div>
                    ) : !isGPA ? (
                      <div className="flex justify-end space-x-2">
                        <button
                          type="button"
                          className="text-primary-600 hover:text-primary-900"
                          title="Editar"
                        >
                          <Edit className="h-4 w-4" />
                        </button>
                        <button
                          type="button"
                          className="text-error-600 hover:text-error-900"
                          title="Excluir"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    ) : (
                      <div className="flex justify-end">
                        <button
                          type="button"
                          className="text-primary-600 hover:text-primary-900"
                          title="Ver detalhes"
                        >
                          <AlertCircle className="h-4 w-4" />
                        </button>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default OKRPage;