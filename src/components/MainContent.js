import React from "react";
import "../App.css";
import "./MainContent.css";
import { Button } from "./Button";
import { Button2 } from "./Button2";

function MainContent(props) {
  // function handleScroll() {
  //   window.scroll({
  //     top: document.body.offsetHeight,
  //     left: 0,
  //     behavior: "smooth",
  //   });
  // }
  return (
    <div className="hero-container">
      <video src="/videos/video-9.mp4" autoPlay loop muted />
      <h1>UNIVERSE IS EXPANDING</h1>
      <p>What your mind is waiting for ?</p>
      <div className="hero-btns">
        <Button
          onClick={props.data}
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          LET'S CONNECT
        </Button>

        <Button2
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          WATCH INSIGHTS <i className="far fa-play-circle" />
        </Button2>
      </div>
    </div>
  );
}

export default MainContent;
