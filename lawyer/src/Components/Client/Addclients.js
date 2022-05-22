
import React from 'react'
import "./Addclient.css";
import { FaUserAlt} from 'react-icons/fa';

import { useState } from "react";
import axios from "axios";
import {useNavigate } from "react-router-dom";

const Addclients = () => {
 const User = localStorage.getItem("token");
 console.log(User.data);
    const [data, setData] = useState({
  	name: "",
    mobileno:"",
  	email: "",
    gender:"",
    address:"",
    fathername:"",
  	lawyer:User
  
 });

 const [error ,setError] = useState("");
 const navigate = useNavigate();

 const handleChange = ({ currentTarget: input }) => {
  setData({ ...data, [input.name]: input.value });
 };

 const handleSubmit = async (e) => {
	window.location.reload();
    alert(`${data.name} Registered Successfully !!!!`)
  e.preventDefault();
  try {
   const url = "http://localhost:8080/api/users/add";
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
            
               <form onSubmit={handleSubmit}>
                            
                   <div class="card">
                     <div class="add-page1">
                       </div>
                       </div>

           </form>  
             )};


export default Addclients 
                       
                       
                       
                      
                        
                     
                       

                      
                       

                      
                       
                       
                       
                      
                        
                  
                          

 

  








                  
                 
                  
             
                  
                
                 

                  
  
    

    
      












// import React from 'react'
// import "./Addclient.css";
// import { useState } from "react";
// import axios from "axios";
// import {useNavigate } from "react-router-dom";

// const Addclients = () => {
// 	const User = localStorage.getItem("token");
// 	console.log(User);
//     const [data, setData] = useState({
// 		name: "",
//         mobileno:"",
// 		email: "",
//         gender:"",
//         address:"",
// 		lawyer:User
		
// 	});

// 	const [error ,setError] = useState("");
// 	const navigate = useNavigate();

// 	const handleChange = ({ currentTarget: input }) => {
// 	  //  if(data.gender==="female"){data.gender="female"}else{ data.gender="male"}
// 		setData({ ...data, [input.name]: input.value });
// 		console.log(data);
// 	};

// 	const handleSubmit = async (e) => {
// 		window.location.reload();
//         alert(`${data.name} Registered Successfully !!!!`)
// 		e.preventDefault();
// 		try {
// 			const url = "http://localhost:8080/api/users/add";
// 			const { data: res } = await axios.post(url, data);
// 			navigate("");
// 			console.log(res.data);
           
// 		} catch (error) {
// 			if (
// 				error.response &&
// 				error.response.status >= 400 &&
// 				error.response.status <= 500
// 			) {
// 				setError(error.response.data.message);
// 			}
// 		}
       
// 	};





//      return (
//             <div className='aaa' >
//                 <div className='bbb'>
           
                

//                 <form onSubmit={handleSubmit}>
//                     <h1>User Registration</h1>

//                     <label>Client Name :</label> 
//                     <input
// 							type="text"
// 							placeholder="Name"
// 							name="name"
// 							onChange={handleChange}
// 							value={data.name}
// 							required
							
// 						/><br/>

//                     <label>Mobile No :</label> 
//                     <input
// 							type="text"
// 							placeholder="Mobile No"
// 							name="mobileno"
// 							onChange={handleChange}
// 							value={data.mobileno}
// 							required
							
// 						/><br/>
                        

                   
//                     <label>Email id :</label> 
//                     <input
// 							type="email"
// 							placeholder="Email"
// 							name="email"
// 							onChange={handleChange}
// 							value={data.email}
// 							required
					
// 						/><br/>

//                     <label>Gender :</label> 
				
//                     <input
// 							type="radio"
							
// 							name="gender"
// 							 onChange={handleChange}
// 							value="male"
                          
// 							required
							
// 					  	/>Male
//                      <input
// 							type="radio"
							
// 							name="gender"
// 							 onChange={handleChange}
// 							value="female"
// 							required
							
// 						/>Female<br/>
					

//                     <label>Address :</label> 
//                     <input
// 							type="textarea"
// 							placeholder="Address"
// 							name="address"
// 							onChange={handleChange}
// 							value={data.address}
// 							required
							
// 						/><br/>
//                         <br/>
                     



//                         {error && <div>{error}</div>}
// 						<button type="submit" >
// 							Add
// 						</button>
                   

//                 </form>

//             </div>
//             </div>
            
            
        
    
//              )};


// export default Addclients


