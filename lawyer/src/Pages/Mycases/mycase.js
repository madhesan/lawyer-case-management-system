import React from "react";
import "./mycase.css";
import Sidebar from '../../Mainpage/Sidebar';


import Addcases from "../../Components/Cases/addcase";

const Mycase=()=>

{  
    return (
          
    <div className="content">
        <div className="side">    < Sidebar/></div>
        <div className="dash"> <Addcases/></div>

</div>    

     
    );
};


export default Mycase;