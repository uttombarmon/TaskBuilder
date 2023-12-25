import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import AuthProvider from './AuthProvider/AuthProvider';
import Login from './Login_Register/Login.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Home/Home.jsx'
import Register from './Login_Register/Register.jsx'
import Dashboard from './Dashboard/Dashboard.jsx'
import DashCompo from './Dashboard/DashCompo/DashCompo.jsx'
import PrivateRoute from './PrivateRoute/PrivateRoute.jsx'
import Edit from './Dashboard/DashCompo/Edit/Edit.jsx';
import Completed from './Dashboard/Completed/Completed.jsx';
import OnGoing from './Dashboard/OnGoing/OnGoing.jsx';
import Layout from './Layout.jsx';

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout></Layout>,
      errorElement: <div>Route Not Found</div>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: 'login',
          element: <Login></Login>
        },
        {
          path: 'register',
          element: <Register></Register>
        },
      ]
    },
    {
      path: 'dashboard',
      element: <PrivateRoute> <Dashboard></Dashboard></PrivateRoute>,
      children: [
        {
          path: 'todo',
          element: <DashCompo></DashCompo>
        },
        {
          path: 'ongoing',
          element: <OnGoing></OnGoing>
        },
        {
          path:'todaytask/edit/:id',
          element: <Edit></Edit>
        },
        {
          path:'completed',
          element: <Completed></Completed>
        }
      ]
    }
  ])
  // ..
  AOS.init();
  return (
    <>

      {/* context api */}
      <AuthProvider>
        {/* routers  */}
        <RouterProvider router={router}></RouterProvider>
      </AuthProvider>
    </>
  )
}

export default App
