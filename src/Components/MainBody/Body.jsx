import React from "react";

import Login from "../Authenticate/Login";
import "./Body.css"

import Tasks from "./Tasks";
import userEvent from "@testing-library/user-event";

const Body=props=>{
   const {authenticated, showInput, handleLoginSaveButtonClick, userExist, passwordCorrect, user}=props;
   console.log("Body rendering, showInput:", showInput); //  for debugging

   if(authenticated){
   return (
   <div className="body">
        <h1 className="header-text"><h2>Welcome <span style={{color: "green"}}>{user.replace(/\b\w/g, char=>char.toUpperCase())}</span></h2>Tasks are ordered by the the time you wanted them to do:</h1>
        <Tasks/>
   </div> 
   )
}
else{
   return(
      <div className="body">
      
      {showInput ? <Login handleLoginSaveButtonClick={handleLoginSaveButtonClick} userExist={userExist} passwordCorrect={passwordCorrect} /> : <h1>This is the main body. Create an account to get started with the app.</h1>}
       
  </div> 
   
   )
}
}

 export default Body;