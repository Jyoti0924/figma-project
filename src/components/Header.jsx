import React from "react";
const Header=()=>{
   return(
    
      <header>
      <div class="container">
         <div class="top">
            <div class="top-header">
               <div class="top-left">
                  <h1>Training <span>Blog</span></h1>
               </div>
              
               <div class="top-right">
                  <img class="profile" src="image/profile.png" alt="profile_img"/>
                  <span>Jyoti Dhiman</span>
                  <img class="Arrow" src="image/Arrow.jpg" alt="Arrow_img"/><br/>
                  
               </div>
            </div>
         </div>
         <div class="bottom">

            <div class="bottom-left">
               <tittle>filters</tittle>
               <span>Created by:</span>
               <span><label>Published Date:</label></span><br/> 
              
               <select>
                  <option value="Jott">Jott</option>
                  <option value="Manu">Manu</option>
                  <option value="Mayank">Mayank</option>
                  <option value="Jyoti">Jyoti</option>
               </select>
               &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span><input type="date"/></span>
            </div>
            <div class="bottom-right">
              <label>search</label><br/>
              <input type="textbox" placeholder="  type here..."/>
              <i class="fa-solid fa-magnifying-glass search"></i>
            </div>
      
         </div>
         </div>
   </header>
 

)
}
export default Header;