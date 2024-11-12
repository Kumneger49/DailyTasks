import React, {useState} from 'react'

import Navigation from './Components /NavigationBar/Navigation';
import Body from './Components /MainBody/Body';
function App() {
  const [authenticated, setAuthenticated]=useState(false)

  const handleLogin=()=>{
      setAuthenticated(true)
  }

  const handleLogout=()=>{
      setAuthenticated(false)
  }

  return (
     <div>
        <Navigation authenticated={authenticated} handleLogin={handleLogin} handleLogout={handleLogout}/>
        <Body authenticated={authenticated}/>
      </div>
  );
}

export default App;
