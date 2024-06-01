import { Outlet,useNavigate } from "react-router-dom";
   
const Layout = () => {
    const navigate = useNavigate();
    return(
        <>
        <header className="header">    
        <aside className="aside">
        <button onClick={() => navigate("/")}>Home</button>
        <br/> 
        </aside>  
        </header>
        <div className="content">
        <Outlet />
        </div>
        <footer className="footer">copyright by nivethashree@gmail.com</footer>
        </>
    );
};

export default Layout;