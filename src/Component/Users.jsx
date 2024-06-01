import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import User from "./User";
import { deleteUser,readAllData } from "../apis/curd-ops-axios";

const Users = () => {
    const navigate = useNavigate();
    const [user,setUser] = useState([]);
    
const loadUser = async () => {
    const data = await readAllData();
    setUser(data);
};

const reloadUsers = async () => {
    await loadUser();
  };

const removeUser = async (userId) => {
    await deleteUser(userId);
    setUser(user.filter((user) => user.id!==userId));
};

const navigateToAdd = () => {
    navigate("/add-users",{state: {reloadUsers}});
}

useEffect(() => {
loadUser();
},[]);

return(
    <>
    <h1>List of Users</h1>
    {console.log("added")}
    <button onClick={navigateToAdd}>Add Users</button>
    {user.map((user) => (
        <User {...user} key={user.id} removeUser ={removeUser} />
    ))}
    </>
)
};
export default Users;