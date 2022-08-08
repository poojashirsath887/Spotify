import React, { useEffect } from "react";
import Login from "./Components/Login";
import "./App.css";
import { getTokenFromUrl } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./Components/Player";
import { useDataLayerValue } from "./DataLayer";

const spotify = new SpotifyWebApi();

function App() {
  const [{ token }, dispatch] = useDataLayerValue();

  useEffect(() => {
    let _token = localStorage.getItem("token") || "undefined";
    if (_token === "undefined") {
      const hash = getTokenFromUrl();
      window.location.hash = "";
      _token = hash.access_token;
      localStorage.setItem("token", _token);
    }
    if (_token) {
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });
      spotify.setAccessToken(_token);
      spotify.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user,
        });
      });
      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists,
        });
      });

      spotify.getMyRecentlyPlayedTracks({ limit: 5 }).then(({ items }) => {
        dispatch({
          type: "SET_RECENT",
          Recent: items,
        });
      });
      spotify.getNewReleases({ limit: 5 }).then(({ albums }) => {
        dispatch({
          type: "SET_AlBUMS",
          Albums: albums.items,
        });
      });
      spotify.getPlaylist("37i9dQZF1E34Ucml4HHx1w").then((playlist) => {
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly: playlist,
        });
      });
    }
  }, []);

  return (
    <div className="App">
      {token ? <Player spotify={spotify} /> : <Login />}
    </div>
  );
}

export default App;
