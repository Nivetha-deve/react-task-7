import { Link } from "react-router-dom"

 

 const Home = () => {
    return(
        <div className="homepage">
        <h1 className="home-head">Welcome to Users Home Page</h1>
        <Link className="home-link" to="/Users">Users</Link>
        </div>
    )
 }
 export default Home;