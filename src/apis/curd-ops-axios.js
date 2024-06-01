import axios from "axios";

// eslint-disable-next-line no-unused-vars
const Url ="https://jsonplaceholder.typicode.com/users";
const instance = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/users",
    timeout:10000,
    headers:{"X-Custom-Header":"foobar",
    mentor:"nivetha",
    batch:"Tamil-combined",    
    },
});

const readAllData = async() => {
    const response = await instance.get("/");
    return response.data;
};

const readSingleUser = async (userId) => {
    const response = await instance.get(`${userId}`);
    return response.data;
};

const edituser = async (id,data) => {
    const response = await instance.put(`${id}`,data);
    return response.data;
}

const createUser = async (UserData) => {
    const response = await instance.post("/",UserData);
    return response.data;
};

const deleteUser = async (UserId) => {
    const response = await instance.delete(`${UserId}`);
    return response.data;
}

export {readAllData,readSingleUser,createUser,deleteUser,edituser};