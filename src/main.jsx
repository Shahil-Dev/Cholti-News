import { createRoot } from 'react-dom/client'
import './App.css'
import { RouterProvider } from 'react-router-dom'
import router from './Router/Router'
import Provider from './Provider/Provider'

createRoot(document.getElementById('root')).render(
  <>
  <Provider>
  <RouterProvider router={router}></RouterProvider>
  </Provider>
 
  </>,
)
