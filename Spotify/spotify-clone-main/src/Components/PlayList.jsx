import React from "react";
import { useDataLayerValue } from "../DataLayer";
import SongRow from "./SongRow";
import { PlayCircleFilled, Favorite, MoreHoriz } from "@material-ui/icons";

export default function PlayList() {
  const [{ discover_weekly, Playlistname }, dispatch] = useDataLayerValue();
  return (
    <>
      <div className="body__info">
        <img src={discover_weekly?.images[0]?.url} alt=""/>
        <div className="body__infoText">
          <strong>PLAYLIST</strong>
          <h2>{Playlistname}</h2>
          <p>{discover_weekly?.description}</p>
        </div>
      </div>
      <div className="body__icons">
        <PlayCircleFilled className="body__shuffle" />
        <Favorite fontSize="large" />
        <MoreHoriz />
      </div>
      <div className="body__songs">
        {discover_weekly?.tracks.items.map((item) => (
          <SongRow track={item.track} key={item.url} />
        ))}
      </div>
    </>
  );
}
