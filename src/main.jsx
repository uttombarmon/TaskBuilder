import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Login from './Login_Register/Ligin.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Home/Home.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    errorElement: <div>Route Not Found</div>,
    children:[
      {
        path:'',
        element: <Home></Home>
      }
    ]
  },
  {
    path:'login',
    element: <Login></Login>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
    </RouterProvider>
  </React.StrictMode>,
)
