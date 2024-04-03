import { toast } from "react-toastify";
import { useAuth } from "../Context/Auth";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {

  const {currentUser} = useAuth() 

  if(!currentUser) toast.error('Please Login First')

  return currentUser? <Outlet/>: <Navigate to="/"/>
}

export default PrivateRoute;