import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle } from 'lucide-react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Error caught by ErrorBoundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-neutral-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
          <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
              <div className="flex flex-col items-center">
                <div className="h-16 w-16 rounded-full bg-error-100 flex items-center justify-center mb-6">
                  <AlertTriangle className="h-10 w-10 text-error-500" />
                </div>
                <h2 className="text-2xl font-bold text-neutral-900 mb-2">Algo deu errado</h2>
                <p className="text-neutral-600 text-center mb-6">
                  Ocorreu um erro inesperado. Por favor, tente atualizar a página ou contate o suporte se o problema persistir.
                </p>
                <div className="bg-neutral-50 p-4 rounded-md w-full overflow-auto mb-6">
                  <pre className="text-xs text-neutral-700">{this.state.error?.toString()}</pre>
                </div>
                <button
                  onClick={() => window.location.reload()}
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                >
                  Recarregar Página
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;