// import image from "./spotify.png";
// import insta from "./instagram.png";
// import fb from "./facebook.png";
// import twitter from "./twitte.png";
import React from "react";
import "../Style/MainFooter.css";

export const MainFooter = () => {
  return (
    <div className="mainfooter">
      <div className="flexbox">
        <div id="spotify">
          <img
            src="https://s22.q4cdn.com/540910603/files/design/Spotify_Logo_White.png"
            alt=""
          />
        </div>
        <div>
          <li className="head">COMPANY</li>
          <li>About</li>
          <li>Jobs</li>
          <li>For the Record</li>
        </div>

        <div>
          <li className="head">COMMUNITIES</li>
          <li>For Artists </li>
          <li>Developers</li>
          <li>Advertising</li>
          <li>Investors</li>
          <li>Vendors</li>
        </div>

        <div>
          <li className="head">USEFUL LINKS</li>
          <li>Support</li>
          <li>Web Player</li>
          <li>Free Mobile App</li>
        </div>
        <div id="links">
          <div><i className='bx bxl-instagram'></i></div>
          <div><i className='bx bxl-twitter' ></i></div>
          <div><i className='bx bxl-facebook'></i></div>
        </div>
      </div>

      <p>
        <i>e</i>
        India (English)
      </p>

      <div id="last">
        <div>
          <li>Legal</li>
          <li>Privacy Center</li>
          <li>Privacy Policy</li>
          <li>Cookies</li>
          <li>About Ads</li>
        </div>
        <div>© 2022 Spotify AB</div>
      </div>
    </div>
  );
};
