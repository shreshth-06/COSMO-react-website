import React from "react";
import "../../App.css";
import Cards from "../cards/Cards";
import MainContent from "../MainContent";
import Footer from "./Footer";

function Home() {
  function handleScroll() {
    window.scroll({
      top: document.body.offsetHeight,
      left: 0,
      behavior: "smooth",
    });
  }

  return (
    <>
      <MainContent data={handleScroll} />
      <Cards />
      <Footer />
    </>
  );
}

export default Home;
