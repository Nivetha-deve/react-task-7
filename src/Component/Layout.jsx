import { Outlet,useNavigate } from "react-router-dom";
   
const Layout = () => {
    const navigate = useNavigate();
    return(
        <div className="layout">
        <header className="header">    
        <button className="btn-home" onClick={() => navigate("/")}>Home</button>
        <br/>  
        </header>
        <div className="content">
        <Outlet />
        </div>
        <footer className="footer">copyright by nivethashree@gmail.com</footer>
        </div>
    );
};

export default Layout;