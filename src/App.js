import ReactDOM from "react-dom/client";
import { Routes, Route } from "react-router-dom";
import Layout from "./Pages/Layout";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import NoPage from "./Pages/NoPage";
import './App.css';
import PrivateRoute from "./Components/PrivateRoute";
import Profile from "./Pages/Profile";


export default function App() {
  return (
   
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<PrivateRoute />} />
          <Route path="/home" element={<Home />} /> 
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    
  
     
   
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
