import { Link, Outlet } from "react-router-dom";
import DashNav from "./DashNavbar/DashNavbar";
import { IoIosToday } from "react-icons/io";
import { GrCompliance } from "react-icons/gr";
import { CiCalendarDate } from "react-icons/ci";
import { Toaster } from "react-hot-toast";

const Dashboard = () => {
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
        <div className=" relative">
            <div className=" absolute w-full z-[1]">
                <DashNav></DashNav>
            </div>
            <div className=" relative flex">
                <ul className=" fixed font-bold list-none pt-16 hidden md:block w-[250px] text-slate-500 bg-slate-200 h-screen">

                    <Link to={'todo'} className=" py-4 bg-slate-200 pl-4 border-b-[1px] border-gray-400 flex hover:link-hover hover:text-slate-600 hover:bg-slate-300"><span className=" self-center font-bold text-2xl"><IoIosToday /></span>ToDo</Link>

                    <Link to={'ongoing'} className=" py-4 bg-slate-200 pl-4 border-b-[1px] border-gray-400 flex hover:link-hover hover:text-slate-600 hover:bg-slate-300"><span className=" self-center font-bold text-2xl"><CiCalendarDate /></span>OnGoing Task</Link>

                    <Link to={'completed'} className=" py-4 bg-slate-200 pl-4 border-b-[1px] border-gray-400 flex hover:link-hover hover:text-slate-600 hover:bg-slate-300"><span className=" self-center font-bold text-2xl"><GrCompliance /></span>Completed Task</Link>
                </ul>
                <div className=" w-full md:w-[calc(100%-250px)] md:ml-[250px]  right-0 pt-24">
                <Outlet></Outlet>
                </div>
            </div>
        </div>
        </>
    );
};

export default Dashboard;