
import './add.css';
import {Link} from "react-router-dom";
import React, {useState,useEffect} from "react";
import Axios from 'axios';
const Appoin1=()=>
{
    const User = localStorage.getItem("token");
    const [foodList,setFoodList] = useState([])

    useEffect(() => {
      Axios.get(`http://localhost:8080/api/users/readappoint/${User}`).then((response) => {
        setFoodList(response.data);
        console.log(response.data);
      });
    }, []) ;
  

   
    return (

        <table> 
            
            <h2>Appointment</h2>
            <Link to="/appointment2">
            <button>Add Appointment</button>
            </Link>
           
            
    <tr>

        <th>Client Name</th>
        <th>Mobile No</th>
        <th>Date</th>
        <th>Time</th>
    </tr>
 
{foodList.map((val,key) => {
   return(
     
   
    //   <div key={key} > 
     
        <tr>
        
        <td>{val.clientName}</td>
        <td>{val.mobileno}</td>
        <td>{val.date}</td>
        <td>{val.time}</td>
        </tr>  
    //   </div>
      );
      
 })}
</table>

);
  
  
}

export default Appoin1;





























































// import * as React from 'react';
// import { styled } from '@mui/material/styles';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell, { tableCellClasses } from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';
// import {Link} from "react-router-dom";
// import {useState,useEffect} from "react";
// import Axios from 'axios';
// import MaUTable from '@material-ui/core/Table'





// export default function CustomizedTables() {
//     const User = localStorage.getItem("token");
//     const [foodList,setFoodList] = useState([])

//     useEffect(() => {
//       Axios.get(`http://localhost:8080/api/users/readappoint/${User}`).then((response) => {
//         setFoodList(response.data);
//         console.log(response.data);
//       });
//     }, []) ;
  
   
    
//   return (
//     <MaUTable >
//     <TableHead>
//       <TableRow>
//           <TableCell>No</TableCell>
//           <TableCell>Client Name</TableCell>
//           <TableCell>Mobile No</TableCell>
//           <TableCell>Date</TableCell>
//           <TableCell>Time</TableCell>
//       </TableRow>
//     </TableHead>
//     <TableBody>
//     {foodList.map((row) => (
//             <TableRow>
//                 <TableCell>{1}</TableCell>
//                 <TableCell>{row.clientName}</TableCell>
//                 <TableCell>{row.mobileno}</TableCell>
//                 <TableCell>{row.date}</TableCell>
//                 <TableCell>{row.time}</TableCell>
//             </TableRow>
//           ))}
//       </TableBody>
//     </MaUTable>
//   );
// }
