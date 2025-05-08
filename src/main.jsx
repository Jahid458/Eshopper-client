import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { routes } from './Routes/routes.jsx'
import { ToastContainer } from 'react-toastify'
import AuthProviders from './providers/AuthProviders.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProviders>
     <RouterProvider router={routes} />
     <ToastContainer/>
    </AuthProviders>
  </StrictMode>,
)
 