import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import AppLayout from './layouts/AppLayout';
import LoadingScreen from './components/common/LoadingScreen';
import LoginPage from './pages/auth/LoginPage';
import ProtectedRoute from './components/auth/ProtectedRoute';
import ErrorBoundary from './components/common/ErrorBoundary';

// Lazy loaded pages
const Dashboard = lazy(() => import('./pages/dashboard/Dashboard'));
const OKRPage = lazy(() => import('./pages/okr/OKRPage'));
const ActionPlansPage = lazy(() => import('./pages/actionPlans/ActionPlansPage'));
const BestPracticesPage = lazy(() => import('./pages/bestPractices/BestPracticesPage'));
const AnalyticsPage = lazy(() => import('./pages/analytics/AnalyticsPage'));
const AIAssistantPage = lazy(() => import('./pages/aiAssistant/AIAssistantPage'));
const UserManagementPage = lazy(() => import('./pages/admin/UserManagementPage'));
const SettingsPage = lazy(() => import('./pages/settings/SettingsPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

function App() {
  return (
    <ErrorBoundary>
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          
          <Route 
            path="/" 
            element={
              <ProtectedRoute>
                <AppLayout />
              </ProtectedRoute>
            }
          >
            <Route 
              index 
              element={
                <Suspense fallback={<LoadingScreen />}>
                  <Dashboard />
                </Suspense>
              } 
            />
            
            <Route 
              path="okrs" 
              element={
                <Suspense fallback={<LoadingScreen />}>
                  <OKRPage />
                </Suspense>
              } 
            />
            
            <Route 
              path="action-plans" 
              element={
                <Suspense fallback={<LoadingScreen />}>
                  <ActionPlansPage />
                </Suspense>
              } 
            />
            
            <Route 
              path="best-practices" 
              element={
                <Suspense fallback={<LoadingScreen />}>
                  <BestPracticesPage />
                </Suspense>
              } 
            />
            
            <Route 
              path="analytics" 
              element={
                <Suspense fallback={<LoadingScreen />}>
                  <AnalyticsPage />
                </Suspense>
              } 
            />
            
            <Route 
              path="ai-assistant" 
              element={
                <Suspense fallback={<LoadingScreen />}>
                  <AIAssistantPage />
                </Suspense>
              } 
            />
            
            <Route 
              path="admin/users" 
              element={
                <Suspense fallback={<LoadingScreen />}>
                  <UserManagementPage />
                </Suspense>
              } 
            />
            
            <Route 
              path="settings" 
              element={
                <Suspense fallback={<LoadingScreen />}>
                  <SettingsPage />
                </Suspense>
              } 
            />
            
            <Route 
              path="*" 
              element={
                <Suspense fallback={<LoadingScreen />}>
                  <NotFoundPage />
                </Suspense>
              } 
            />
          </Route>
        </Routes>
      </AuthProvider>
    </ErrorBoundary>
  );
}

export default App;