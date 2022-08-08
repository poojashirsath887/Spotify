import React, { useState } from "react";
import "../Style/Sidebar.css";
import SidebarOption from "./SidebarOption";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import { LibraryMusic } from "@material-ui/icons";
import { useDataLayerValue } from "../DataLayer";

function Sidebar() {
  const [cla, setCla] = useState("Home");

  const [{ playlists }, dispatch] = useDataLayerValue();

  const SetHomepage = (c) => {
    setCla(c);
    let current = document.getElementsByClassName("option");
    current[0].className = current[0].className.replace("active", "");
    dispatch({
      type: "SET_PAGE",
      Page: "Home",
    });
  };
  console.log(cla);
  return (
    <div className="sidebar">
      <img
        className="sidebar__logo"
        src="https://s22.q4cdn.com/540910603/files/design/Spotify_Logo_White.png"
        alt="Spotify logo"
        width="131px"
        height="39px"
      />
      <div>
        <div
          className={cla === "Home" ? "ative" : "sidebarOption"}
          onClick={() => SetHomepage("Home")}
        >
          <HomeIcon className="sidebarOption__icon" />
          <span>Home</span>
        </div>
        <div
          className={cla === "Search" ? "ative" : "sidebarOption"}
          onClick={() => SetHomepage("Search")}
        >
          <SearchIcon className="sidebarOption__icon" /> <span>Search</span>
        </div>
        <div
          className={cla === "Library" ? "ative" : "sidebarOption"}
          onClick={() => SetHomepage("Library")}
        >
          <LibraryMusic className="sidebarOption__icon" />
          <span>Your Library</span>
        </div>
      </div>
      <br />
      <strong className="sidebar__title">PLAYLISTS</strong>
      <hr />
      <div className="playlist_side option" id="playlist_side">
        {playlists?.items?.map((playlist) => (
          <SidebarOption
            title={playlist.name}
            key={playlist.id}
            getP={playlist}
          />
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
