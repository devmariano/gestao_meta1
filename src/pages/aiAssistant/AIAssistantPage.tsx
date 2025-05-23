import React, { useState } from 'react';
import { Send, Bot, Lightbulb, PlusCircle, Trash2 } from 'lucide-react';

interface ChatMessage {
  id: string;
  sender: 'user' | 'ai';
  content: string;
  timestamp: Date;
}

const AIAssistantPage: React.FC = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      sender: 'ai',
      content: 'Olá! Sou o Assistente Inteligente do SENAI. Como posso ajudar você hoje com a análise de resultados educacionais?',
      timestamp: new Date(),
    },
  ]);

  const [recommendations, setRecommendations] = useState([
    'Analise os resultados de evasão da unidade',
    'Como posso melhorar o desempenho em matemática?',
    'Quais fatores mais influenciam a empregabilidade?',
    'Identifique padrões de desistência nos primeiros meses',
  ]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!input.trim()) return;
    
    // Add user message
    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      sender: 'user',
      content: input,
      timestamp: new Date(),
    };
    
    setMessages([...messages, userMessage]);
    setInput('');
    
    // Simulate AI response
    setTimeout(() => {
      const aiMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        sender: 'ai',
        content: generateMockResponse(input),
        timestamp: new Date(),
      };
      
      setMessages((prevMessages) => [...prevMessages, aiMessage]);
    }, 1000);
  };

  const generateMockResponse = (query: string): string => {
    // Simple mock response based on keywords
    if (query.toLowerCase().includes('evasão')) {
      return 'Analisando os dados de evasão da sua unidade, identifiquei que os principais fatores são dificuldades financeiras (32%) e dificuldades de aprendizagem (28%). Recomendo criar um programa de monitoramento precoce focado nos alunos com mais de 3 faltas consecutivas e implementar um sistema de tutoria para os alunos com dificuldades de aprendizagem.';
    } else if (query.toLowerCase().includes('matemática')) {
      return 'Com base nos resultados das avaliações, os alunos estão tendo dificuldades principalmente com álgebra e geometria espacial. Sugiro implementar mais exercícios práticos relacionados a projetos reais da indústria e organizar grupos de estudo com monitores. Escolas que adotaram essa abordagem tiveram uma melhora média de 27% nos indicadores.';
    } else if (query.toLowerCase().includes('empregabilidade')) {
      return 'Os fatores que mais impactam a empregabilidade dos egressos são: domínio de competências técnicas específicas (37%), habilidades socioemocionais (28%) e experiência prática (25%). Recomendo fortalecer parcerias para estágio, implementar projetos práticos com empresas locais e incluir módulos específicos de desenvolvimento socioemocional no currículo.';
    } else {
      return 'Baseado nos dados disponíveis, posso sugerir algumas ações para melhorar os resultados:\n\n1. Implementar um sistema de acompanhamento individualizado para alunos em risco de evasão\n2. Desenvolver um programa de monitoria para as disciplinas com maior índice de reprovação\n3. Criar grupos de estudo com foco em projetos práticos\n4. Estabelecer parcerias com empresas locais para visitas técnicas e palestras\n\nGostaria de analisar algum desses pontos mais detalhadamente?';
    }
  };

  const handleRecommendationClick = (recommendation: string) => {
    setInput(recommendation);
  };

  const handleClearChat = () => {
    setMessages([
      {
        id: '1',
        sender: 'ai',
        content: 'Olá! Sou o Assistente Inteligente do SENAI. Como posso ajudar você hoje com a análise de resultados educacionais?',
        timestamp: new Date(),
      },
    ]);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-neutral-900">Tutor Inteligente</h1>
          <p className="mt-1 text-sm text-neutral-500">
            Assistente de IA para análise e recomendações
          </p>
        </div>
        <button
          onClick={handleClearChat}
          className="inline-flex items-center px-3 py-1.5 border border-neutral-300 shadow-sm text-sm font-medium rounded-md text-neutral-700 bg-white hover:bg-neutral-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
        >
          <Trash2 className="h-4 w-4 mr-2" />
          Limpar conversa
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Sidebar with recommendations */}
        <div className="lg:col-span-1 space-y-4">
          <div className="bg-white shadow rounded-lg overflow-hidden">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg font-medium text-neutral-900 flex items-center">
                <Lightbulb className="h-5 w-5 mr-2 text-primary-600" />
                Sugestões
              </h3>
              <div className="mt-4 space-y-3">
                {recommendations.map((rec, index) => (
                  <button
                    key={index}
                    onClick={() => handleRecommendationClick(rec)}
                    className="w-full text-left p-3 rounded-md bg-primary-50 text-sm text-primary-800 hover:bg-primary-100 transition-colors"
                  >
                    {rec}
                  </button>
                ))}
              </div>
              <div className="mt-4 flex items-center">
                <button
                  type="button"
                  className="inline-flex items-center text-sm text-primary-600 hover:text-primary-800"
                >
                  <PlusCircle className="h-4 w-4 mr-1" />
                  Mais sugestões
                </button>
              </div>
            </div>
          </div>

          <div className="bg-white shadow rounded-lg overflow-hidden">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg font-medium text-neutral-900 flex items-center">
                <Bot className="h-5 w-5 mr-2 text-primary-600" />
                Capacidades
              </h3>
              <div className="mt-4 space-y-3 text-sm text-neutral-700">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <span className="inline-flex items-center justify-center h-6 w-6 rounded-md bg-primary-100 text-primary-700">
                      1
                    </span>
                  </div>
                  <p className="ml-2">Análise de dados educacionais e comparação com ciclos anteriores</p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <span className="inline-flex items-center justify-center h-6 w-6 rounded-md bg-primary-100 text-primary-700">
                      2
                    </span>
                  </div>
                  <p className="ml-2">Identificação de padrões e fatores de risco para evasão</p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <span className="inline-flex items-center justify-center h-6 w-6 rounded-md bg-primary-100 text-primary-700">
                      3
                    </span>
                  </div>
                  <p className="ml-2">Recomendação de ações baseadas em boas práticas da rede</p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <span className="inline-flex items-center justify-center h-6 w-6 rounded-md bg-primary-100 text-primary-700">
                      4
                    </span>
                  </div>
                  <p className="ml-2">Sugestões de metas e planos de ação alinhados aos desafios</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Chat interface */}
        <div className="lg:col-span-3">
          <div className="bg-white shadow rounded-lg flex flex-col h-[70vh]">
            <div className="flex-1 p-4 overflow-y-auto">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`mb-4 flex ${
                    message.sender === 'user' ? 'justify-end' : 'justify-start'
                  }`}
                >
                  <div
                    className={`max-w-[80%] rounded-lg px-4 py-2 ${
                      message.sender === 'user'
                        ? 'bg-primary-600 text-white'
                        : 'bg-neutral-100 text-neutral-800'
                    }`}
                  >
                    {message.sender === 'ai' && (
                      <div className="flex items-center mb-1 text-xs text-neutral-500">
                        <Bot className="h-3 w-3 mr-1" />
                        Tutor IA
                      </div>
                    )}
                    <p className="whitespace-pre-line">{message.content}</p>
                    <div
                      className={`text-xs mt-1 text-right ${
                        message.sender === 'user' ? 'text-primary-100' : 'text-neutral-400'
                      }`}
                    >
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="border-t border-neutral-200 p-4">
              <form onSubmit={handleSubmit} className="flex">
                <input
                  type="text"
                  className="flex-1 block w-full rounded-md border-neutral-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
                  placeholder="Digite sua pergunta ou solicite uma análise..."
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                />
                <button
                  type="submit"
                  className="ml-3 inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                >
                  <Send className="h-4 w-4 mr-2" />
                  Enviar
                </button>
              </form>
              <p className="mt-2 text-xs text-neutral-500">
                O assistente analisa os dados da sua unidade para fornecer insights personalizados e sugestões baseadas em evidências.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIAssistantPage;