import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Login from './Login_Register/Login.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Home/Home.jsx'
import AuthProvider from './AuthProvider/AuthProvider.jsx'
import Register from './Login_Register/Register.jsx'
import Dashboard from './Dashboard/Dashboard.jsx'
import DashCompo from './Dashboard/DashCompo/DashCompo.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    errorElement: <div>Route Not Found</div>,
    children: [
      {
        path: '',
        element: <Home></Home>
      }
    ]
  },
  {
    path: 'login',
    element: <Login></Login>
  },
  {
    path:'register',
    element: <Register></Register>
  },
  {
    path:'dashboard',
    element: <Dashboard></Dashboard>,
    children:[
      {
        path:'todaytask',
        element: <DashCompo></DashCompo>
      },
      {
        path:'addtask',
        element: <div>Add task</div>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* context api */}
    <AuthProvider>
      {/* routers  */}
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>,
)
