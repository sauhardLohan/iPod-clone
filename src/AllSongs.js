import edm from "./edm.mp3";
import React from "react";
import Kesariya from "./Kesariya.mp3";
import cheapThrills from "./cheapThrills.mp3";
const AllSongs = (props) => {
  const { musicItem } = props;
  // You can play and pause song by clicking on center button.
  // In all songs menu there are three songs to choose from you can change between them by clicking on next button (>>|) or previous button (|<<).
  // If a song completes it automatically switches to next song.

  return (
    // div containing all the details of a played song
    <div
      style={{
        width: "100%",
        height: "100%",
        paddingInline: 15,
        paddingTop: 30,
        paddingBottom: 30,
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column"
      }}
    >
      <div style={{ height: 140, width: "100%", display: "flex" }}>
        <div style={{ height: "100%", width: "100%" }}>
          {/* img for music played  */}
          <img
            src={musicItem.img}
            style={{ width: 127, height: 121 }}
            alt="music-icon"
          ></img>
        </div>
        {/* Music Name and Artist Name  */}
        <div style={{ height: "100%", width: "100%" }}>
          <p style={{ textAlign: "center", fontSize: 20, fontWeight: 700 }}>
            {musicItem.musicName}
          </p>
          <p style={{ fontSize: 15, textAlign: "center" }}>
            {musicItem.artistName}
          </p>
        </div>
      </div>
      {/* audio element to render depending on selected music determined by musicItem from props  */}
      <div style={{ width: "100%", height: 43 }} id="audio-controller">
        {musicItem.src === "edm" ? (
          <audio
            key="edm"
            controls="controls"
            controlsList="nodownload noplaybackrate "
            id="myAudio"
          >
            <source src={edm} />
            Your browser does not support the audio element.
          </audio>
        ) : musicItem.src === "Kesariya" ? (
          <audio
            key="Kesariya"
            controls="controls"
            controlsList="nodownload noplaybackrate "
            id="myAudio"
          >
            <source src={Kesariya} />
            Your browser does not support the audio element.
          </audio>
        ) : musicItem.src === "cheapThrills" ? (
          <audio
            key="cheapThrills"
            controls="controls"
            controlsList="nodownload noplaybackrate "
            id="myAudio"
          >
            <source src={cheapThrills} />
            Your browser does not support the audio element.
          </audio>
        ) : null}
      </div>
    </div>
  );
};
export default AllSongs;
