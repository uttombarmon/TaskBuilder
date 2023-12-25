import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)
    const navigate = useNavigate()
    const nav1 = <>
        <li><Link to={''}>Home</Link></li>
        <li><Link to={''}>Pricing</Link></li>
        <li><Link to={''}>Support</Link></li>
        {
            user ?
                <>
                    <li><Link to={'/dashboard/todaytask'}>Dashboard</Link></li>
                </>
                :
                <>
                    <li><Link to={'/login'}>Login</Link></li>
                    <li><Link to={'/register'} className="">Register Now</Link></li>
                </>
        }
    </>
    const logOutUser = () => {
        logOut()
            .then(() => navigate('/'))
            .catch(e => console.log(e))
    }
    return (
        <div data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="100">
            <div className="navbar md:px-10 lg:px-20 font-semibold bg-base-200">
                <div className="navbar-start">
                    <a className="text-xl font-extrabold">Task<span className=" text-orange-500">Builder</span></a>
                </div>
                <div className="navbar-end">
                    <div className=" hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            {
                                nav1
                            }
                        </ul>
                    </div>
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 right-0 rounded-box w-52">
                            {nav1}
                        </ul>
                    </div>
                    {
                        user &&
                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                </div>
                            </div>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                <li><a>Settings</a></li>
                                <li><a onClick={logOutUser}>Logout</a></li>
                            </ul>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;