import { CssBaseline, ThemeProvider } from '@mui/material'
import { Routes, Route } from 'react-router-dom'
import { useAuth } from './hooks/useAuth'
import { DashboardPage } from './pages/DashboardPage/DashboardPage'
import { AddCompanyPage } from './pages/AddCompanyPage'
import { theme } from './styles/theme'

function App() {
  // Initialize authentication
  const { loading } = useAuth()

  if (loading) {
    return null // Or a loading spinner
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/add-company" element={<AddCompanyPage />} />
      </Routes>
    </ThemeProvider>
  )
}

export default App