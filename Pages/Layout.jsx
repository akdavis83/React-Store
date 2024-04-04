import { Outlet, Link } from "react-router-dom";
import { logout } from "../Firebase";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Context/Auth";


   

  

const Layout = () => {
  const { currentUser } = useAuth();
  const navigate = useNavigate();
const logoutHandler = () => {
  logout();
  navigate("/");
};

  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/"></Link>
          </li>
          <li>
            <Link to="/register"></Link>
          </li>
          <li>
            <Link to="/home"></Link>
          </li>
          <li>
            <Link className="btn btn-outline-light ms-2" to="/profile"> Profile</Link>
          </li>
          <li>
          <button className="btn btn-outline-dark" onClick={logoutHandler}> Logout</button>
          </li>
        </ul>
         {!currentUser && (
              <>
                <Link className="btn btn-outline-light ms-2" to="/">
                  Login
                </Link>
                <Link className="btn btn-outline-light ms-2" to="/register">
                  Register
                </Link>
              </>
            )}
           
      </nav>

     
      <Outlet />
    </>
  )
};

export default Layout;
