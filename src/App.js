import React, { useState, useEffect } from 'react'

 import Navigation from './Components/NavigationBar/Navigation' 
 import Body from './Components/MainBody/Body'

 
function App() {
  const [authenticated, setAuthenticated] = useState(false)
  const [showSignUpForm, setShowSignUpForm] = useState(false); 
  const [showLoginForm, setShowLoginForm] = useState(false)
  const [userExist, setUserExist] = useState(true)
  const [passwordCorrect, setPasswordCorrect] = useState(true)
  const [newUser, setNewUser]= useState({})

  const [userss, setUserss] = useState([
    {
      name: "ken",
      password: 1,
      tasks: [
        {text: "doing home work", id: 1},
        {text: "doing laundry", id: 2},
        {text: "sleep", id: 3},
      ]
  },
  {
      name: "mark",
      password: 2,
      tasks:[
        {text: "eat breakfast", id: 1}, 
        {text: "eact lunch", id: 2},
        {text: "go to work", id: 3}
      ]
  } 
  ])

  const [currentTasks, setCurrentTasks]=useState([]);
  const [id, setId]=useState(4)
  const handleDeleteTask=(id)=>{
    setCurrentTasks(currentTasks.filter(
        (task)=>{
            return (task.id!==id)
        }
    ))
}

   const handleAddTask=(newText)=>{
      const obj={
          text: newText,
          id: id
      }
      setCurrentTasks( 
          [...currentTasks, obj]
      )
      setId(id+1)
  }
  

  const handleLogout = () => {
    setAuthenticated(false);
    setShowLoginForm(false);
  }

  const handleShowLoginForm = () => {
    setShowLoginForm(true);
    setShowSignUpForm(false);
  }

  const handleShowSignUpForm=()=>{
    setShowSignUpForm(true);
    setShowLoginForm(false);
    setUserExist(true);
  }

 useEffect(()=>{
  if(newUser&&newUser.tasks){
  setCurrentTasks(newUser.tasks);
  }
 }, [newUser])
  

  const handleLoginSaveButtonClick=(user)=>{
    const foundUser=userss.find((u)=>u.name.toLocaleLowerCase()===user.name.toLocaleLowerCase()) 
    setNewUser(foundUser||{})
    if(foundUser){
      if(foundUser.password==user.password){
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
      setUserExist(false)
    }
   }

  const handleSignUpSaveButtonClick=(user)=>{
    let u=userss;
    u=u.concat(user);
    setUserss(u);
    setNewUser(user);
    setAuthenticated(true);
  }

  return (
    <div>
      <Navigation 
        authenticated={authenticated} 
        // handleLogin={handleLogin} 
        handleShowLoginForm={handleShowLoginForm} 
        handleLogout={handleLogout} 
        handleShowSignUpForm={handleShowSignUpForm}
      />
      <Body 
        handleLoginSaveButtonClick={handleLoginSaveButtonClick} 
        handleSignUpSaveButtonClick={handleSignUpSaveButtonClick}
        authenticated={authenticated} 
        showLoginForm={showLoginForm} 
        showSignUpForm={showSignUpForm}
        userExist={userExist}
        passwordCorrect={passwordCorrect}
        user={newUser.name}
        currentTasks={currentTasks}
        handleDeleteTask={handleDeleteTask}
        handleAddTask={handleAddTask}
      />

    </div>
  );
}

export default App