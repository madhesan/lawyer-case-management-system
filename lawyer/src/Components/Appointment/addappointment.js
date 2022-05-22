import React from 'react';
import './add.css';
import { useState } from "react";
import axios from "axios";
import {useNavigate } from "react-router-dom";


const Add=()=>{
   
    const handleChange1 = () => {
    window.location="/appointment";
    };

    const User = localStorage.getItem("token");
    console.log(User.data);

       const [data, setData] = useState({
        clientName: "",
        mobileno:"",
        date: "",
        time:"",
        note:"",
        lawyer:User
     
    });
   
    const [error ,setError] = useState("");
    const navigate = useNavigate();
   
    const handleChange = ({ currentTarget: input }) => {
     setData({ ...data, [input.name]: input.value });
    };
   
    const handleSubmit = async (e) => {
       window.location.reload();
    //    alert(`${data.name} Registered Successfully !!!!`)
     e.preventDefault();
     try {
      const url = "http://localhost:8080/api/users/addappoint";
     const { data: res } = await axios.post(url, data);
     localStorage.setItem("appoint",res.data);
      navigate("/appointment");
      
              
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

   
    
   
 return(
     
<div className='add'>
    <form onSubmit={handleSubmit}>
        <br/>
        <h2>Add Appoinment</h2>
    <div class="card">
        <div class="add-page">
            
        <br/>
          
          
               <label for="fname">Client Name: </label><br/><br/>
           <input type="text"  name="clientName" class="text-box" onChange={handleChange} value={data.clientName} required /><br/>
           <div class="abcd">
               <div class="mobile">
          <label for="fname">Mobile No: </label><br/><br/>
           <input type="text"  name="mobileno" onChange={handleChange} value={data.mobileno} required class="text-box1"/><br/>
           </div>
           <div class="date">
               <label for="fname">Date: </label> <br/><br/>
           <input type="date"  name="date" onChange={handleChange} value={data.date} required class="text-box2"/><br/>
           </div>
           <div class="time">
              <label for="fname">Time: </label><br/><br/>
           <input type="time"  name="time" onChange={handleChange} value={data.time} required class="text-box3"/><br/>
            </div>
            </div>

              <label for="fname">Note: </label><br/><br/>
          <textarea name="note" rows="5" placeholder="Your Message" onChange={handleChange} value={data.note} required></textarea><br/><br/><br/>
          
          {error && <div>{error}</div>}
           <button type="submit" class="btn2" onClick={handleChange1}>Save</button>
           <button class="btn1">Cancel</button>
         
           <button class="btn" onClick={handleChange1} >Back</button>
          
           
           
           
        </div>
    </div>
        
    </form>
    </div>
    
);
};

export default Add;