import { useState } from 'react'
import './App.css'
import Login from './Login'
import Home from './Home'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
   <>
    { isLoggedIn ? <Home /> : <Login setIsLoggedIn={setIsLoggedIn}/>}
   </>
  )
}

export default App
