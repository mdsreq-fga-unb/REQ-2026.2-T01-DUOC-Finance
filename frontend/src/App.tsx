import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './routes'
import { ToastProvider } from './components/ui/Toast'
import { AuthProvider } from './auth/AuthContext'

export default function App() {
  return (
    <ToastProvider>
      <AuthProvider>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </AuthProvider>
    </ToastProvider>
  )
}
