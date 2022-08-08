import React, { useState, useEffect } from "react";
import "../Style/Footer.css";
import {
  PlayCircleOutline,
  SkipPrevious,
  SkipNext,
  PlaylistPlay,
  Shuffle,
  Repeat,
  VolumeDown,
  PauseCircleOutline,
} from "@material-ui/icons";
import { Grid, Slider } from "@material-ui/core";

function Footer({ song }) {
  const [audio, setAudio] = useState(new Audio(song.preview_url));
  const [playing, setPlaying] = useState(false);

  const togglePlayBack = () => setPlaying(!playing);
  useEffect(() => {
    if (playing) {
      audio.play();
    } else {
      audio.pause();
    }
  }, [playing]);

  useEffect(() => {
    audio.pause();
    setPlaying(false);
    setAudio(new Audio(song.preview_url));
  }, [song]);

  useEffect(() => {
    audio.addEventListener("ended", () => setPlaying(false));
    return () => {
      audio.removeEventListener("ended", () => setPlaying(false));
    };
  }, []);

  return (
    <div className="footer">
      <div className="footer__left">
        <img src={song.img} alt="" className="footer__albumLogo" />
        <div className="footer__songInfo">
          <h4>{song.name}</h4>
          <p>{song.artists}</p>
        </div>
      </div>
      <div className="footer__center">
        <Shuffle className="footer__green" />
        <SkipPrevious className="footer__icon" />

        {playing ? (
          <PauseCircleOutline
            onClick={togglePlayBack}
            fontSize="large"
            className="footer__icon"
          />
        ) : (
          <PlayCircleOutline
            onClick={togglePlayBack}
            fontSize="large"
            className="footer__icon"
          />
        )}

        <SkipNext className="footer__icon" />
        <Repeat className="footer__green" />
      </div>
      <div className="footer__right">
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlay />
          </Grid>
          <Grid item>
            <VolumeDown />
          </Grid>
          <Grid item xs>
            <Slider />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Footer;
