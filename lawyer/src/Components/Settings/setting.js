import React, {useState} from "react";
import axios from "axios";
import {useNavigate } from "react-router-dom";

const Setting=()=>
{
const User = localStorage.getItem("token");
 console.log(User.data);
    const [data, setData] = useState({
  	casetype: "",
  	lawyer:User
  
 });

 const [error ,setError] = useState("");
 const navigate = useNavigate();

 const handleChange = ({ currentTarget: input }) => {
  setData({ ...data, [input.name]: input.value });
 };

 const handleSubmit = async (e) => {
	window.location.reload();
  e.preventDefault();
  try {
   const url = "http://localhost:8080/api/users/setting";
  const { data: res } = await axios.post(url, data);
   navigate("");
   console.log(res.data);
           
  } catch (error) {
   if (
    error.response &&
    error.response.status >= 400 &&
    error.response.status <= 500
   ) {
    setError(error.response.data.message);
   }
  }
       
 };

    return (
       
         <div>
             <form onSubmit={handleSubmit}>
  <label >Case Type:</label>
  <input
                        type="text"
                        placeholder="Case type"
                        name="casetype"
                        onChange={handleChange}
                        value={data.casetype}
                        required  /><br/>
                        {error && <div>{error}</div>}
                        <button type="submit" >Add Cases</button>
                    
</form>

</div>

     
    );
};


export default Setting;