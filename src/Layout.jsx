import { Outlet } from 'react-router-dom'
import Footer from "./Footer/Footer";
import Navbar from "./Navbar/Navbar";
import './App.css'
import { Toaster } from 'react-hot-toast';

const Layout = () => {
    return (
        <div>
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

        </div>
    );
};

export default Layout;