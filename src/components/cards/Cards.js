import React from "react";
import "./Card.css";
import CardItems from "./CardItems";

function Cards() {
  return (
    <div className="cards">
      <h1>Check out some CRAZY cards !!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItems
              src="images/nasa-contact-aliens.jpg"
              text="How Is NASA Contacting Aliens? | What are the conspiracies? | Alien Life Documentary | Spark"
              label="COSMO"
              path="https://youtu.be/EVBCLAaflaws"
            />
            <CardItems
              src="images/saturn-cassini.jpg"
              text="Becoming a part of the ring-giant | Cassini's Final Moments | Saturn Exploration"
              label="COSMO"
              path="https://solarsystem.nasa.gov/resources/17702/cassinis-final-moments/"
            />
            <CardItems
              src="images/mars-explore.jpg"
              text="Looking for the intense possibility of life on Mars | Full Episode I NOVA | PBS "
              label="COSMO"
              path="https://youtu.be/fhtw7Dpntb4"
            />
          </ul>
          <ul className="cards__items">
            <CardItems
              src="images/sun-probe.png"
              text="Traveling to the Sun: Why Won’t Parker Solar Probe Melt?"
              label="COSMO"
              path="https://www.nasa.gov/feature/goddard/2018/traveling-to-the-sun-why-won-t-parker-solar-probe-melt"
            />

            <CardItems
              src="images/black-holes.jpg"
              text="8 ways we know that black holes really do exist"
              label="COSMO"
              path="https://www.livescience.com/how-we-know-black-holes-exist.html"
            />

            <CardItems
              src="images/asteroid.jpg"
              text="Cosmic visitor ‘Oumuamua may have been ripped from an alien world"
              label="COSMO"
              path="https://astronomy.com/news/2020/04/interstellar-visitor-oumuamua-maybe-a-chunk-of-a-shredded-alien-world"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
