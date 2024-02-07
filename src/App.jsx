import { useState } from 'react'
import './App.css'
import Login from './Login'
import Landing from './Landing';
import { redirectToAuthCodeFlow, getAccessToken } from "./fetch_api/Fetch";


function App() {

const clientId = import.meta.env.VITE.CLIENT.ID;
const params = new URLSearchParams(window.location.search);
const code = params.get("code");

if (!code) {
    redirectToAuthCodeFlow(clientId);
} else {
    const accessToken = await getAccessToken(clientId, code);
    const profile = await fetchProfile(accessToken);
    populateUI(profile);
}

async function fetchProfile(code){
    const result = await fetch("https://api.spotify.com/v1/me", {
        method: "GET", headers: { Authorization: `Bearer ${code}` }
    });

    return await result.json();
}
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
    { isLoggedIn ? <Landing /> : <Login setIsLoggedIn={setIsLoggedIn}/>}
   </>
  )
}

export default App
