import React from "react";
import "../Style/MainHome.css";

export const MainHome = ({ url }) => {
  return (
    <div className="home">
      <div id="listen">
        <h1>Listening is</h1>
        <h1 id="every">everything</h1>
        <p>Millions of songs and podcasts. No credit card needed.</p>

        <button
          onClick={() => {
            window.location.href = url;
          }}
        >
          GET SPOTIFY FREE
        </button>
      </div>
    </div>
  );
};
