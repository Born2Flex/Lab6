import {Navigate, Outlet} from "react-router-dom";
import Cookies from 'js-cookie';

function ProtectedRoutes() {
    const isAuthenticated = !!Cookies.get("authenticated");
    return isAuthenticated ? <Outlet/> : <Navigate to={"/login"}/>
}

export default ProtectedRoutes;
