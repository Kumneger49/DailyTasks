import React, { useState } from "react";
import "./SignUp.css";

const SignUp=({handleSignUpSaveButtonClick})=>{

    const [userName, setUserName]=useState("");
    const [password, setPassword]=useState("");

    const handleSubmit=(event)=>{
        event.preventDefault();
        const user={name: userName, password: password};
        handleSignUpSaveButtonClick(user);
    }

    const handleUserNameChange=(props)=>{
        setUserName(props.target.value);
    }

    const handlePasswordChange=(props)=>{
        setPassword(props.target.value);
    }

    return(
        <>

             <div className="signup_container">
                <form onSubmit={handleSubmit}>
                    <div className="username">
                        <span  style={{fontSize: "1.1rem", fontWeight: "600"}}>Username            </span>
                        <input required className="usernameInput" type="text" value={userName} onChange={handleUserNameChange}/>
                    </div>
                    <div className="password">
                        <span style={{fontSize: "1.1rem", fontWeight: "600"}}>Password           </span>
                        <input required className="passwordInput" type="password" value={password} onChange={handlePasswordChange}/>
                    </div>
                    <div className="signup_save_button">
                        <button type="submit"  className="signup">Sign up</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default SignUp;