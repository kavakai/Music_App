import React from 'react'

const Login2 = ({ setIsLoggedIn }) => {
  return (
    <div>
      <a href='http://localhost:8888' onClick={() => setIsLoggedIn(true)}>Login to Spotify</a>
    </div>
  )
}

export default Login2