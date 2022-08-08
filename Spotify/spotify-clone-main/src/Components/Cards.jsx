import React from "react";
import { useDataLayerValue } from "../DataLayer";
import SpotifyWebApi from "spotify-web-api-js";
import "../Style/Cards.css";

const spotify = new SpotifyWebApi();
export default function Cards() {
  const [{ Recent, Albums }, dispatch] = useDataLayerValue();

  const playSong = ({ track }) => {
    let song = {
      preview_url: track.preview_url,
      img: track.album.images[0].url,
      name: track.name,
      artists: track.artists[0].name,
    };

    dispatch({
      type: "SET_SONG",
      song,
    });
  };

  const AlbumsSong = (data) => {};
  return (
    <div className="CardMain">
      <p className="recent_head">Recently played</p>
      <div className="cards">
        {Recent.map((item) => {
          return (
            <div className="card" onClick={() => playSong(item)}>
              <div className="card_data">
                <div className="display_card">
                  <img src={item.track.album.images[0].url} alt="" />
                  <h5>{item.track.album.name}</h5>
                  <p>{item.track.album.artists[0].name}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="topalbums">
        <p className="recent_head">Top Albums</p>
        <div className="cards">
          {Albums.map((item) => {
            return (
              <div className="card" onClick={() => AlbumsSong(item)}>
                <div className="card_data">
                  <div className="display_card">
                    <img src={item.images[0].url} alt="" />
                    <h5>{item.name}</h5>
                    <p>{item.artists[0].name}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <br />
      <br />
    </div>
  );
}
