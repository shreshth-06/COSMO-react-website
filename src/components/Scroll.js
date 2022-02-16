import React from "react";
import MainContent from "./MainContent";

function Scroll() {
  function handleScroll() {
    window.scroll({
      top: document.body.offsetHeight,
      left: 0,
      behavior: "smooth",
    });
  }

  return <MainContent data={handleScroll} />;
}

export default Scroll;
