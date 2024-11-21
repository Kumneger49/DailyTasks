import React, { useState } from "react";
import "./Login.css"

const Login=({handleLoginSaveButtonClick, userExist, passwordCorrect})=>{
    const [userName, setUserName]=useState("")
    const [password, setPassword]=useState("")
    
    const  handleUserNameChange=props=>{
        setUserName(props.target.value)
     }

    const  handlePasswordChange=props=>{
        setPassword(props.target.value)
     }

     const handleSubmit=(event)=>{
        event.preventDefault()
        const user={name: userName, password: password}
        handleLoginSaveButtonClick(user)
     }

    return(
        <>
            <div className="login_container">
                <form onSubmit={handleSubmit}>
                    <div className="username">
                        <span  style={{fontSize: "1.1rem", fontWeight: "600"}}>Username            </span>
                        <input required className="usernameInput" type="text" value={userName} onChange={handleUserNameChange}/>
                    </div>
                    <div className="password">
                        <span style={{fontSize: "1.1rem", fontWeight: "600"}}>Password           </span>
                        <input required className="passwordInput" type="password" value={password} onChange={handlePasswordChange}/>
                    </div>
                    <div className="login_save_button">
                        <button type="submit"  className="login">Login</button>
                    </div>
                </form>
                {userExist?<></>:<h1>User does not exist</h1>}
                {passwordCorrect?<></>:<h1>The password is not correct</h1>}
            </div>
        </>
    )
}

export default Login