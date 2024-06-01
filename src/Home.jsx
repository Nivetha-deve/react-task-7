import { Link } from "react-router-dom"

 

 const Home = () => {
    return(
        <>
        <h1>Home page</h1>
        <Link to="/Users">users</Link>
        </>
    )
 }
 export default Home;