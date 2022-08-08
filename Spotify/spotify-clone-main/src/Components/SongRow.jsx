import React from "react";
import "../Style/SongRow.css";
import { useDataLayerValue } from "../DataLayer";

function SongRow({ track }) {
  const [{}, dispatch] = useDataLayerValue();

  const geturl = (track) => {
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

  return (
    <div className="songRow" onClick={() => geturl(track)}>
      <img src={track.album.images[0].url} alt="" className="songRow__album" />
      <div className="songRow__info">
        <h1>{track.name}</h1>
        <p>
          {track.artists.map((artist) => artist.name).join(", ")} -{" "}
          {track.album.name}
        </p>
      </div>
    </div>
  );
}

export default SongRow;
