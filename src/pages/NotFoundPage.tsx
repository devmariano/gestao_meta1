import React from 'react';
import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';

const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-[60vh] flex flex-col justify-center items-center p-4">
      <div className="text-9xl font-bold text-neutral-200">404</div>
      <h1 className="mt-4 text-3xl font-bold tracking-tight text-neutral-900">Página não encontrada</h1>
      <p className="mt-2 text-base text-neutral-500">Desculpe, não conseguimos encontrar a página que você está procurando.</p>
      <Link
        to="/"
        className="mt-8 inline-flex items-center rounded-md border border-transparent bg-primary-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
      >
        <Home className="mr-2 h-4 w-4" />
        Voltar para a página inicial
      </Link>
    </div>
  );
};

export default NotFoundPage;