import React from "react";

import "./App.css";
import {Routes,Route,Navigate} from "react-router-dom";
import Firstpage from "./Loginpage/Firstpage";
import SignupForm from "./Loginpage/SignupForm";

import Login from "./Loginpage/Login";
import Sidebar from './Mainpage/Sidebar';
import Dashboard1 from "./Pages/Dashboard/dashboadrd";
import Homepage1 from "./Pages/Homepage/homepage";
import Addclient1 from "./Pages/Addclients/Addclients";



const App=()=>{
    const user = localStorage.getItem("token");
    return ( 
    <Routes>

{user && <Route path="/" exact element={<Firstpage />} />}
<Route path="/homepage" exact element={<Homepage1/>}/>
<Route path="/signup" exact element={<SignupForm/>}/>
<Route path="/login" exact element={<Login/>}/>
<Route path="/mainpage" exact element={<Sidebar/>}/>
<Route path="/addclient" exact element={<Addclient1/>}/>
<Route path="/dashboard" exact element={<Dashboard1/>}/>
<Route path="/" element={<Navigate replace to="/homepage" />} />


    </Routes>
    )
};

export default App;