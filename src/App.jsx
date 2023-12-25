import { Outlet } from 'react-router-dom'
import Footer from "./Footer/Footer";
import Navbar from "./Navbar/Navbar";
import './App.css'
import { Toaster } from 'react-hot-toast';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

function App() {

  // ..
  AOS.init();
  return (
    <>
      <Toaster
        toastOptions={{
          // Define default options
          className: '',
          duration: 3000,
          style: {
            background: '#363636',
            color: '#fff',
          },

          // Default options for specific types
          success: {
            duration: 3000,
            theme: {
              primary: 'green',
              secondary: 'black',
            },
          },
        }}></Toaster>
      <div>
        {/* navbar section  */}
        <Navbar></Navbar>
        <Outlet></Outlet>
        {/* footer section  */}
        <Footer></Footer>
      </div>
    </>
  )
}

export default App
