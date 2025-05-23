import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';
import { User, UserRole } from '../types/user';

interface AuthContextType {
  user: User | null;
  loading: boolean;
  error: string | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  checkAuth: () => void;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  loading: false,
  error: null,
  login: async () => {},
  logout: () => {},
  checkAuth: () => {},
});

export const useAuth = () => useContext(AuthContext);

interface AuthProviderProps {
  children: React.ReactNode;
}

const mockUsers = [
  {
    id: '1',
    name: 'Maria Silva',
    email: 'escola@senai.edu.br',
    role: UserRole.SCHOOL,
    unitId: '101',
    unitName: 'SENAI Taguatinga',
    position: 'Coordenador Pedagógico',
  },
  {
    id: '2',
    name: 'João Oliveira',
    email: 'gpa@senai.edu.br',
    role: UserRole.GPA,
    unitId: '100',
    unitName: 'GPA Central',
    position: 'Analista GPA',
  },
];

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const login = useCallback(async (email: string, password: string) => {
    setLoading(true);
    setError(null);
    
    try {
      // Simulate API request delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const foundUser = mockUsers.find(u => u.email === email);
      
      if (foundUser && password === '123456') {
        setUser(foundUser);
        // Store in localStorage for persistence
        localStorage.setItem('authUser', JSON.stringify(foundUser));
      } else {
        throw new Error('Credenciais inválidas');
      }
    } catch (err) {
      setError((err as Error).message);
      console.error('Login error:', err);
    } finally {
      setLoading(false);
    }
  }, []);

  const logout = useCallback(() => {
    setUser(null);
    localStorage.removeItem('authUser');
  }, []);

  const checkAuth = useCallback(() => {
    setLoading(true);
    try {
      const storedUser = localStorage.getItem('authUser');
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
    } catch (err) {
      console.error('Auth check error:', err);
      localStorage.removeItem('authUser');
    } finally {
      setLoading(false);
    }
  }, []);

  // Check auth on mount
  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  return (
    <AuthContext.Provider value={{ user, loading, error, login, logout, checkAuth }}>
      {children}
    </AuthContext.Provider>
  );
};