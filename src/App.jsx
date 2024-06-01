import './App.css'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Layout from './Component/Layout';
import Users from './Component/Users';
import UserForm from './Component/UserForm';
import User from './Component/User';
import Home from './Home.jsx';

const DefaultEle =() => {
  return(
    <>
    <h4>No page found, Click URL</h4>
    <Link to="/">Go to Home</Link>
    </>
  );
};

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
       <Route path='/' element={<Layout />}> 
      <Route index element={<Home />} />
      <Route path='Users' element={<Users/>} />
      <Route path='User/:userId' element={<h2>Users page</h2>} />
      <Route path='/add-users' element={<UserForm />} />
      <Route path='*' element={<DefaultEle />} /> 
      </Route> 
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;
