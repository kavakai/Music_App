import { useState } from 'react'
import './App.css'
import Login from './Login'
import Landing from './Landing';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
    { isLoggedIn ? <Landing /> : <Login setIsLoggedIn={setIsLoggedIn}/>}
   </>
  )
}

export default App
