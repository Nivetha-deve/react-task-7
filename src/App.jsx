import './App.css'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Layout from './Component/Layout';
import Users from './Component/Users';
import UserForm from './Component/UserForm';
import Home from './Home.jsx';
import { useState,useEffect } from 'react';
import { readAllData } from './apis/curd-ops-axios.js';

const DefaultEle =() => {
  return(
    <>
    <h4>No page found, Click URL</h4>
    <Link to="/">Go to Home</Link>
    </>
  );
};

function App() {

  const [user,setUser] = useState([]);
  const loadUser = async () => {
		const data = await readAllData();
		setUser(data);
  };

  useEffect(() => {
		loadUser();
  }, []);
 
  return ( 
    <>
    <BrowserRouter>
    <Routes>
       <Route path='/' element={<Layout />}> 
      <Route index element={<Home />} />
      <Route path='Users' element={<Users setUser={setUser} user={user}/>} />
      <Route path='User/:userId' element={<h2>Users page</h2>} />
      <Route path='/add-users' element={<UserForm setUser={setUser} user={user} />} />
      <Route path='*' element={<DefaultEle />} /> 
      </Route> 
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;
