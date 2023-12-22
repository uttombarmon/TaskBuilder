import { Link } from "react-router-dom";

const Navbar = () => {
    const nav1 = <>
        <li><Link to={''}>Home</Link></li>
        <li><Link to={''}>Pricing</Link></li>
        <li><Link to={''}>Support</Link></li>
        <li><Link to={'login'}>Login</Link></li>
    </>
    return (
        <div>
            <div className="navbar md:px-10 lg:px-20 bg-base-200">
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
                </div>
            </div>
        </div>
    );
};

export default Navbar;