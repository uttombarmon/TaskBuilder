import { Outlet } from 'react-router-dom'
import Footer from "./Footer/Footer";
import Navbar from "./Navbar/Navbar";
import './App.css'

function App() {


  return (
    <>
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
