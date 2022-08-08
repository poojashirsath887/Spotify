import React from "react";
import { loginUrl } from "../spotify";
import { MainFooter } from "./MainFooter";
import { MainNavbar } from "./MainNavbar";
import { MainHome } from "./MainHome";

function Login() {
  return (
    <div>
      <MainNavbar url={loginUrl} />
      <MainHome url={loginUrl} />
      <MainFooter />
      {/* <img
        src="https://music-b26f.kxcdn.com/wp-content/uploads/2017/06/635963274692858859903160895_spotify-logo-horizontal-black.jpg"
        alt="Spotify logo"
      /> */}
      {/* <a href={loginUrl}>LOGIN WITH SPOTIFY</a> */}
    </div>
  );
}

export default Login;
