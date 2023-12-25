import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const DashNav = () => {
    const { user, logOut } = useContext(AuthContext)
    const navigate = useNavigate()
    const nav1 = <>
        <li><Link to={''}>Support</Link></li>
    </>
    const logOutUser = () => {
        logOut()
        .then(() => navigate('/'))
        .catch(e => console.log(e))
    }
    return (
        <div>
            <div className="navbar md:px-10 font-semibold bg-base-200">
                <div className="navbar-start">
                    <Link className="text-xl font-extrabold link link-hover">Task<span className=" text-orange-500">Builder</span></Link>
                </div>
                {/* <div className=" navbar-center">
                    <div className="form-control flex">
                        <input type="text" placeholder="Search" className="input input-bordered rounded-r-none w-24 md:w-auto" />
                    </div>
                    <span className="btn btn-primary rounded-l-none">Search</span>
                </div> */}
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
                                    <img alt="Tailwind CSS Navbar component" src={user?.photoURL} />
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

export default DashNav;