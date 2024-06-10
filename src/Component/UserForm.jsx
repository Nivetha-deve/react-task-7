/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import PropTypes from "prop-types";
import { createUser, edituser, readSingleUser } from "../apis/curd-ops-axios";

const UserForm = ({user,setUser}) => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [phone, setPhone] = useState("");
  const [website, setWebsite] = useState("");
  const [name, setCompanyname] = useState("");
  const [catchPhrase, setCatchphase] =useState("");
  const [bs,setBs] = useState("");


  const addUser = async (data) => {
    const newUser = await createUser(data);
    setUser([...user,newUser])
   setUser([...user, newUser].sort((a,b) => a.id - b.id));
    navigate("/add-users");
  };

  const updateUser = async (id, data) => {
    console.log(id);
		const editedData = await edituser(id, data);
    console.log(editedData);
    const list = user.filter((user) => {
      console.log(user.id);
      return user.id !== Number(id)
    });
    console.log(list);
    list.push(editedData);
    setUser(list.sort((a,b) => a.id - b.id));
		navigate("..");
	};

  const loadUser = async () => {
    if (searchParams.get("userId")) {
      const data = await readSingleUser(searchParams.get("userId"));
      setUsername(data.username);
      setEmail(data.email);
      setCity(data.address.city);
      setZipcode(data.address.zipcode);
      setPhone(data.phone);
      setWebsite(data.website);
      setCompanyname(data.company.name);
      setCatchphase(data.company.catchPhrase);
      setBs(data.company.bs);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = {
      username,
      email,
      address: {
        city,
        zipcode,
      },
      phone,
      website,
      company: {
        name,
        catchPhrase,
        bs,
      }
    };


  
   if (searchParams.get("edit")) {
     await updateUser(searchParams.get("userId"), userData);
   } else {
      await addUser(userData);
     }
     navigate("/");
    }

   useEffect(() => {
     loadUser();
   // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);


  return (
    <form className="form-details"  onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div className="form-group">
        <label htmlFor="city">City:</label>
        <input type="text" id="city" value={city} onChange={(e) => setCity(e.target.value)} />
      </div>
      <div className="form-group">
        <label htmlFor="zipcode">Zipcode:</label>
        <input type="text" id="zipcode" value={zipcode} onChange={(e) => setZipcode(e.target.value)} />
      </div>
      <div className="form-group">
        <label htmlFor="phone">Phone:</label>
        <input type="text" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
      </div>
      <div className="form-group">
        <label htmlFor="website">Website:</label>
        <input type="text" id="website" value={website} onChange={(e) => setWebsite(e.target.value)} />
      </div>
      <div className="form-group">
        <label htmlFor="name">Company Name:</label>
        <input type="text" id="company" value={name} onChange={(e) => setCompanyname(e.target.value)} />
      </div>
      <div className="form-group">
        <label htmlFor="catchphrase">Catch Phrase:</label>
        <input type="text" id="Catch Phrase" value={catchPhrase} onChange={(e) => setCatchphase(e.target.value)} />
      </div>
      <div className="form-group">
        <label htmlFor="bs">Bs:</label>
        <input type="text" id="BS" value={bs} onChange={(e) => setBs(e.target.value)} />
      </div>
      <button className="submit" type="submit">Submit</button>
    </form>
  );
};

UserForm.propTypes = {
  addUser: PropTypes.func,
  reloadUsers: PropTypes.func,
};

export default UserForm;         

