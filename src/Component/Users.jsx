/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import User from "./User";
import { deleteUser } from "../apis/curd-ops-axios";

const Users = ({setUser,user}) => {
    const navigate = useNavigate();

const removeUser = async (userId) => {
    await deleteUser(userId);
    setUser(user.filter((user) => user.id!==userId));
};

 const navigateToAdd = () => {
     navigate("/add-users")
 };

return (
        
    <>
    <h1>List of Users</h1>
    <button className="add-user" onClick={navigateToAdd}>Add User</button>
    <div>
    {user.map((user) => (
      <User {...user} key={user.id} removeUser={removeUser} />
    ))}
    </div>
  </>
);
};
export default Users;



