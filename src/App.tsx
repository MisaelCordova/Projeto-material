import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { AppRoutes } from './pages'
import { ThemeProvider } from '@mui/material'
import { LithtTheme } from './shared/themes'
function App() {
  const [count, setCount] = useState(0)

  return (
    <ThemeProvider theme={LithtTheme}>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
