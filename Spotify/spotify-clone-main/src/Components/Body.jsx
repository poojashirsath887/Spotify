import React from "react";
import "../Style/Body.css";
import Header from "./Header";
import { useDataLayerValue } from "../DataLayer";
import Home from "./Home";
import PlayList from "./PlayList";

function Body({ spotify }) {
  const [{ Page }, dispatch] = useDataLayerValue();

  return (
    <div className="body">
      <Header spotify={spotify} />
      {Page === "Home" ? <Home /> : <PlayList />}
    </div>
  );
}

export default Body;
