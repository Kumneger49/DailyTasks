import React from "react";
import Buttons from "../Buttons/Buttons";
import "./Navigation.css"

const Navigation=props=>{
    return(
    <>
        <div className="main-navigation">
            <h1 className="brand">DailyTasks</h1>
            <div className="buttons-class">
            <button className="button"><Buttons type="login"/></button>
            <button className="button"><Buttons type="signup"/></button>
            </div>
        </div>
    </>
    )
}

export default Navigation