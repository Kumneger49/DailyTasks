import React from "react";
import Buttons from "../Buttons/Buttons";
import "./Navigation.css"

const Navigation=props=>{
    const {authenticated, handleLogin, handleLogout}=props;
    if(authenticated===true){
        return(
            <div className="main-navigation-body">
                <div className="main-navigation">
                   <h1 className="brand">DailyTasks</h1>
                   <div className="buttons-class">
                   <button className="button" onClick={handleLogout}><Buttons type="logout"/></button>
        
                   </div>
               </div>
            </div>
        )
    }

    else{
        return(
            <div className="main-navigation-body">
                   <div className="main-navigation">
                   <h1 className="brand">DailyTasks</h1>
                   <div className="buttons-class">
                   <button className="button" onClick={handleLogin}><Buttons type="login"/></button>
                   <button className="button"><Buttons type="signup"/></button>
                   </div>
               </div>
               </div>
           
           )
    }



    
}

export default Navigation