import React from "react";
import { Search } from "@material-ui/icons";
import "../Style/Header.css";
import { Avatar } from "@material-ui/core";
import { useDataLayerValue } from "../DataLayer";

function Header() {
  const [{ user }] = useDataLayerValue();

  const toggle = () => {
    let more = document.getElementsByClassName("more_details");
    more[0].classList.toggle("toggle");
  };

  const gotoHome = () => {
    localStorage.setItem("token", "undefined");
    window.location.reload(true);
  };

  return (
    <div className="header">
      <div className="header__left">
        <Search />
        <input placeholder="Search for Artists, Songs, or Albums" type="text" />
      </div>
      <div className="header__right">
        <div className="user_details" onClick={toggle}>
          <Avatar src={user?.images[0]?.url} alt={user?.display_name} />
          <h4>{user?.display_name}</h4>
        </div>
        <div className="more_details">
          <div className="more_details_card">
            <p>Account</p>
          </div>
          <div className="more_details_card">
            <p>Profile</p>
          </div>
          <div className="more_details_card" onClick={gotoHome}>
            <p>Logout</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
