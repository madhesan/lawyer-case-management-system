import React from 'react';
import ReactDom from "react-dom";
import './add.css';
const Add = (
    <form>
        <br/>
        <h2>Add Appoinment</h2>
    <div class="card">
        <div class="add-page">
            
        <br/>
          
          
               <label for="fname">Client Name: </label><br/><br/>
           <input type="text" id="fname" name="fname" class="text-box" /><br/>
           <div class="abcd">
               <div class="mobile">
          <label for="fname">Mobile No: </label><br/><br/>
           <input type="text" id="fname" name="fname" class="text-box"/><br/>
           </div>
           <div class="date">
               <label for="fname">Date: </label> <br/><br/>
           <input type="date" id="fname" name="fname" class="text-box"/><br/>
           </div>
           <div class="time">
              <label for="fname">Time: </label><br/><br/>
           <input type="time" id="fname" name="fname" class="text-box"/><br/>
            </div>
            </div>

              <label for="fname">Note: </label><br/><br/>
          <textarea name="message" rows="5" placeholder="Your Message" required></textarea><br/><br/><br/>
          
           
           <button class="btn2">Save</button>
           <button class="btn1">Cancel</button>
           <button class="btn">Back</button>
           
           
           
        </div>
    </div>
        
    </form>
    
);
ReactDom.render(Add, document.getElementById('root'));
export default Add;