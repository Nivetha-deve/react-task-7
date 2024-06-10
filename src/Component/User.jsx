import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const User= ({id,username,email,city,address,zipcode,phone,website,company,removeUser}) => {

   const navigate = useNavigate();

     return(
      <div className="product-details">
       <p className="prod-username">Username:{username}</p> 
       <p className="prod-email">Email:{email}</p>
       <p className="prod-city">City:{address.city}</p>
       <p className="prod-zipcode">Zipcode:{address.zipcode}</p>
       <p className="prod-phone">Phone:{phone}</p>
       <p className="prod-website">Website:{website}</p>
       {company && (
       <div className="prod-company">
         <p>Company Name:{company.name}</p>
         <p>Catch Phrase: {company.catchPhrase}</p>
         <p>BS: {company.bs}</p>
         </div>
       )}
       <div className="prod-btn">
       <button className="prod-delete" onClick={()=>removeUser(id)}>Delete</button>
       <button className="prod-edit" onClick={() => {
          navigate(`/add-users?edit=true&userId=${id}`,{
              state:{id,username,email,city,zipcode,phone,website,company}
            });
       }}>Edit</button>
       </div>
      </div>
     );
    };

     User.propTypes={
        username:PropTypes.string,
        email:PropTypes.string,
        city:PropTypes.string,
        zipcode:PropTypes.string,
        phone:PropTypes.string,
        website:PropTypes.string,
        id:PropTypes.number,
        address:PropTypes.object,
        company:PropTypes.object,
        catchPhrase: PropTypes.string,
        bs: PropTypes.string,
        removeUser:PropTypes.func,
     }

     export default User;