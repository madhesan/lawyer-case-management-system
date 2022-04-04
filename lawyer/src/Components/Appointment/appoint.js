
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
      <div >

      <div class="container">
          <div class="row">
              <div class="col-md-offset-1 col-md-10">
                  <div class="panel">
                      <div class="panel-heading">
                          <div class="row">
                              <div class="col-sm-12 col-xs-12">
                                <Link to="/appointment2">  <button class="btn btn-sm btn-primary pull-left"  ><i class="fa fa-plus-circle"> Add New</i></button> </Link>
                                  <form class="form-horizontal pull-right">
                                      <div class="form-group">
                                          <label>Show : </label>
                                          <select class="form-control">
                                              <option>5</option>
                                              <option>10</option>
                                              <option>15</option>
                                              <option>20</option>
                                          </select>
                                      </div>
                                  </form>
                              </div>
                          </div>
                      </div>
                      <div class="panel-body table-responsive">
                      <table class="table">
      
      <thead>
          <tr>
              <th class="text-center">S No</th>
              <th class="text-center">Client Name</th>
              <th class="text-center">Mobile No</th>
              <th class="text-center">Date</th>
              <th class="text-center">Time</th>
              <th class="text-center">Actions</th>
          </tr>
      </thead>
      
      <tbody>
      {foodList.map((val,key) => {
return(
          <tr>
              <td class="text-center">1</td>
              <td class="text-center">{val.clientName}</td>
              <td class="text-center">{val.mobileno}</td>
              <td class="text-center">{val.date}</td>
              <td class="text-center">{val.time}</td>
              
              <td class="td-actions text-center">
                  
                  <button type="button" rel="tooltip" class="btn btn-success btn-just-icon btn-sm" data-original-title="" title="">
                      <i class="material-icons">edit</i>
                  </button>
                  <button type="button" rel="tooltip" class="btn btn-danger btn-just-icon btn-sm" data-original-title="" title="">
                      <i class="material-icons">close</i>
                  </button>
              </td>
          </tr>
          );

        })}
      
         
          
      </tbody>
      </table>
                      </div>
                      <div class="panel-footer">
                          <div class="row">
                              <div class="col-sm-6 col-xs-6">showing <b>5</b> out of <b>25</b> entries</div>
                              <div class="col-sm-6 col-xs-6">
                                  <ul class="pagination hidden-xs pull-right">
                                      <li><a href="#">«</a></li>
                                      <li class="active"><a href="#">1</a></li>
                                      <li><a href="#">2</a></li>
                                      <li><a href="#">3</a></li>
                                      <li><a href="#">4</a></li>
                                      <li><a href="#">5</a></li>
                                      <li><a href="#">»</a></li>
                                  </ul>
                                  <ul class="pagination visible-xs pull-right">
                                      <li><a href="#">«</a></li>
                                      <li><a href="#">»</a></li>
                                  </ul>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      </div>

);
  
  
}

export default Appoin1;

{/* <div class="table-responsive">
<table className='table'> 
    
    <h2>Appointment</h2>
    <Link to="/appointment2">
    <button>Add Appointment</button>
    </Link>
   
    
<tr class="table table-sm table-dark">

<th>Client Name</th>
<th>Mobile No</th>
<th>Date</th>
<th>Time</th>
</tr>

{foodList.map((val,key) => {
return(


//   <div key={key} > 

<tr>

<td >{val.clientName}</td>
<td>{val.mobileno}</td>
<td>{val.date}</td>
<td>{val.time}</td>
</tr>  
//   </div>
);

})}
</table>
</div> */}



























































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
