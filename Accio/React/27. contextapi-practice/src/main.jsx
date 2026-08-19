import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import ThemeContextProvider from './contexts/ThemeContextProvider.jsx'

createRoot(document.getElementById('root')).render(
  <ThemeContextProvider>
    {/* <CartProvider> */}

  <StrictMode>
    <App />
  </StrictMode>,
    {/* </CartProvider> */}
  </ThemeContextProvider>
)
