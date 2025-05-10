import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Router } from './Router/Router.jsx'
import { RouterProvider } from 'react-router'
import { Home } from './Pages/Home/Home.jsx'
import { AuthProvider } from './provider/AuthProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <AuthProvider>
      <RouterProvider router={Router}/>
    </AuthProvider>
  </StrictMode>,
)
