import React from "react";

import Login from "../Authenticate/Login";
import SignUp from "../SignUp/SignUp";
import "./Body.css"

import Tasks from "./Tasks";
import userEvent from "@testing-library/user-event";

const Body=props=>{
   const {authenticated, showLoginForm, showSignUpForm, handleLoginSaveButtonClick, handleSignUpSaveButtonClick, userExist, passwordCorrect, user}=props;
   if(authenticated){
   return (
   <div className="body">
        <h1 className="header-text"><h2>Welcome <span style={{color: "green"}}>{user.replace(/\b\w/g, char=>char.toUpperCase())}</span></h2>Tasks are ordered by the the time you wanted them to do:</h1>
        <Tasks/>
   </div> 
   )
   }
   else{
      if(showSignUpForm==false){
      return(
         <div className="body">
            {showLoginForm ? <Login handleLoginSaveButtonClick={handleLoginSaveButtonClick} userExist={userExist} passwordCorrect={passwordCorrect} /> : <h1>This is the main body. Create an account to get started with the app.</h1>}
         </div> 
      )
   }

   else{
      return(
         <div className="body">
            <SignUp handleSignUpSaveButtonClick={handleSignUpSaveButtonClick}/>
         </div> 
      )
   }
}
}

 export default Body;