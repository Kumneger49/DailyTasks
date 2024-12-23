import React, { useState, useEffect } from 'react'

 import Navigation from './Components/NavigationBar/Navigation' 
 import Body from './Components/MainBody/Body'

 
function App() {
  const [authenticated, setAuthenticated] = useState(false)
  const [showInput, setShowInput] = useState(false)
  const [userExist, setUserExist] = useState(true)
  const [passwordCorrect, setPasswordCorrect] = useState(true)
  const [newUser, setNewUser]= useState({})
  
  const users=[
    {
        name: "ken",
        password: 1
    },
    {
        name: "mark",
        password: 2
    }
    ]

  const handleLogin = () => {
    setAuthenticated(true)
  }

  const handleLogout = () => {
    setAuthenticated(false)
    setShowInput(false)
  }

  const handleShowInput = () => {
    console.log("Setting showInput to true"); //  for debugging
    setShowInput(true)
  }

  const handleLoginSaveButtonClick=(user)=>{
    const foundUser=users.find((u)=>u.name.toLocaleLowerCase()===user.name.toLocaleLowerCase()) 
    setNewUser(foundUser||{})
    if(foundUser){
      if(foundUser.password===user.password){
      setAuthenticated(true)
      setUserExist(true)
      setPasswordCorrect(true)
      }
      else{
        setPasswordCorrect(false)
        setUserExist(true)
      }
    }

    else{
      console.log("Error the user does not exist")
      setUserExist(false)
    }
    console.log(newUser)
  }

  return (
    <div>
      <Navigation 
        authenticated={authenticated} 
        handleLogin={handleLogin} 
        handleShowInput={handleShowInput} 
        handleLogout={handleLogout} 
        showInput={showInput}
        
      />
      <Body 
        handleLoginSaveButtonClick={handleLoginSaveButtonClick} 
        authenticated={authenticated} 
        showInput={showInput} 
        userExist={userExist}
        passwordCorrect={passwordCorrect}
        user={newUser.name}
      />

    </div>
  );
}

export default App