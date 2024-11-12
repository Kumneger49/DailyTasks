import React from "react";
import "./Body.css"


import Tasks from "./Tasks";

const Body=props=>{
   const {authenticated}=props;
   if(authenticated){
   return (
   <div className="body">
        <h1 className="header-text">Tasks are ordered by the the time you wanted them to do:</h1>
        <Tasks/>
   </div> 
   )
}
else{
   return(
      <div className="body">
      <h1>This is the main body. Create an account to get started with the app.</h1>
  </div> 
   
   )
}
}

 export default Body;