import React, { useEffect, useState } from 'react';
import SpotifyWebApi from 'spotify-web-api-js';
import Landing from './Landing'

const spotifyApi = new SpotifyWebApi();

const getTokenFromUrl = () => {
  const token = window.location.hash
    .substring(1)
    .split('&')
    .reduce((initial, item) => {
      let parts = item.split('=');
      initial[parts[0]] = decodeURIComponent(parts[1]);
      return initial;
  }, {});
  return token;
};            

const App = () => {
  const [spotifyToken, setSpotifyToken] = useState('');
  const [clicked, setClicked] = useState(false);
  const [nowPLaying, setNowPlaying] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const token = getTokenFromUrl()?.access_token;
    setSpotifyToken(token)
    // window.location.hash = '';

    if(token) {
      // setSpotifyToken(spotifyToken);
      spotifyApi.setAccessToken(token);
      spotifyApi.getMe().then((res) => {
        console.log(res, 'this is me')
      });
      setLoggedIn(true);
    }
  });

  const getNowPlaying = (e) => {
    e.preventDefault();
    spotifyApi.getMyCurrentPlaybackState().then((res) => {
      setNowPlaying({
        device: res.device.id,
        name: res.item.artists[0].name,
        track: res.item.name,
        albumArt: res.item.album.images[0].url,
        uri: res.item.uri
      })
    });
  };
  console.log(loggedIn, 'logged in')
  return (
    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
      {!loggedIn && <a style={{textDecoration: 'none', margin: '100px'}} href='http://localhost:8888/'>Login to Spotify</a>}
      {loggedIn && <Landing getCurrent={getNowPlaying} current={nowPLaying} spotifyApi={spotifyApi} />}
    </div>
  )
}

export default App;
