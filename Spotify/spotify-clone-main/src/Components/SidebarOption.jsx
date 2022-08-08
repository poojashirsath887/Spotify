import React from "react";
import "../Style/SidebarOption.css";
import SpotifyWebApi from "spotify-web-api-js";
import { useDataLayerValue } from "../DataLayer";

const spotify = new SpotifyWebApi();

function SidebarOption({ title, Icon, getP, setpage }) {
  const [{ user }, dispatch] = useDataLayerValue();
  const getplaylist = (id, Playlistname) => {
    dispatch({
      type: "SET_PAGE",
      Page: "MyPlaylist",
    });
    dispatch({
      type: "SET_NAME",
      Playlistname: Playlistname,
    });

    spotify.getPlaylist(id).then((playlist) => {
      dispatch({
        type: "SET_DISCOVER_WEEKLY",
        discover_weekly: playlist,
      });
    });
  };

  return (
    <div
      className="sidebarOption"
      onClick={() => {
        getplaylist(getP.id, getP.name);
      }}
    >
      {Icon ? <h4>{title}</h4> : <p>{title}</p>}
    </div>
  );
}

export default SidebarOption;
