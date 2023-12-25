import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext)
    const location = useLocation()
    if (loading) {
        return <div className=" w-full h-screen flex bg-black justify-center"><span className="loading loading-ring loading-lg self-center"></span></div>;
    }
    if (user) {
        return children;
    }
    return <Navigate to={'/login'} state={{from:location}}></Navigate>;
};

export default PrivateRoute;