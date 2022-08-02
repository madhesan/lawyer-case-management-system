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
    }, ) ;
  

   
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
                      <i class="material-icons">delete</i>
                  </button>
              </td>
          </tr>
          );

        })}
      
         
          
      </tbody>
      </table>
                      </div>
                      <div class="panel-footer">
                          
                      </div>
                  </div>
              </div>
          </div>
      </div>
      </div>

);
  
  
}

export default Appoin1;