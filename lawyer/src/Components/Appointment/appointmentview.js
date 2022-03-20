import React from 'react';
import './add.css';
import {Link} from "react-router-dom";

const Appoin=()=>

{  return(

        <table>
           
            <div class="table">
            <h2>Appointment</h2>
            <Link to="/addappointment">
            <button>Add Appointment</button>
            </Link>
    </div>
    <div class="content-table">
       
        <thead>
            <tr>
                <th>No</th>
                <th>Client Name</th>
                <th>Mobile No</th>
                <th>Date</th>
                <th>Time</th>
            </tr>
        </thead>
        <tbody>
            <tr>
            <td>1</td>
            <td>Madhu</td>
            <th>964067040</th>
            <td>20/3/2022</td>
            <td>10:00AM</td>
            </tr>

            <tr>
            <td>2</td>
            <td>Madhu</td>
            <th>964067040</th>
            <td>20/3/2022</td>
            <td>10:00AM</td>
            </tr>

            <tr>
            <td>3</td>
            <td>Madhu</td>
            <th>964067040</th>
            <td>20/3/2022</td>
            <td>10:00AM</td>
            </tr>
            
            </tbody>
            </div>
    </table>
    );
};

export default Appoin;