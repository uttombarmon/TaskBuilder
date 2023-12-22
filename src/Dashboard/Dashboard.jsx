import { Link, Outlet } from "react-router-dom";
import DashNav from "./DashNavbar/DashNavbar";

const Dashboard = () => {
    return (
        <div className=" relative">
            <div className=" absolute w-full z-10">
                <DashNav></DashNav>
            </div>
            <div className=" relative">
            <ul className=" font-bold list-none pt-16 hidden md:block w-[250px] bg-slate-300 h-screen">
                <li className=" py-4 bg-slate-200 pl-4 border-b-[1px]"><Link>Add Task</Link></li>
                <li className=" py-4 bg-slate-100 pl-4 border-b-[1px]"><Link>Today Task</Link></li>
                <li className=" py-4 bg-slate-200 pl-4 border-b-[1px]"><Link>Upcoming Task</Link></li>
                <li className=" py-4 bg-slate-100 pl-4 border-b-[1px]"><Link>Completed Task</Link></li>
            </ul>
            <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;