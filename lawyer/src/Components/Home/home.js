import React from "react";
import './home.css';




const Homepage=()=>
{
const User = localStorage.getItem("name");

    return (
       
            
    <div className="App">
        <h1>Welcome {User}</h1>
     
                

</div>    

     
    );
};


export default Homepage;