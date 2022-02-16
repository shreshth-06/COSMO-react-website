import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import { Button3 } from "./../Button3";

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Join our community to receive the best astronomical insights
        </p>
        <p className="footer-subscription-text">
          Feel free to unsubscribe at any time.
        </p>
        <div className="input-areas">
          <form>
            <input
              className="footer-input"
              name="email"
              type="email"
              placeholder="Your Email"
            />
            <Button3 buttonStyle="btn--outline">Submit</Button3>
          </form>
        </div>
      </section>
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>About Us</h2>
            <Link to="/about">How it works</Link>
            <Link to="/">Testimonials</Link>
            <Link to="/">Careers</Link>
            <Link to="/">Investors</Link>
            <Link to="/">Terms of Service</Link>
          </div>
          <div className="footer-link-items">
            <h2>Contact Us</h2>
            <Link to="/">Contact</Link>
            <Link to="/">Support</Link>
            <Link to="/">Sponsorships</Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>Videos</h2>
            <Link to="/">Submit Video</Link>
            <Link to="/">Ambassadors</Link>
            <Link to="/">Agency</Link>
            <Link to="/">Influencer</Link>
          </div>
          <div className="footer-link-items">
            <h2>Social Media</h2>
            <Link
              to={{
                pathname: "https://www.instagram.com/_shreshth_24/",
              }}
              target="_blank"
            >
              Instagram
            </Link>
            <Link
              to={{
                pathname: "https://www.facebook.com/shreshth.chaturvedi.56",
              }}
              target="_blank"
            >
              Facebook
            </Link>
            <Link to="/">Youtube</Link>
            <Link
              to={{
                pathname:
                  "https://www.linkedin.com/in/shreshth-chaturvedi-320745181",
              }}
              target="_blank"
            >
              LinkedIn
            </Link>
          </div>
        </div>
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link to="/" className="social-logo">
              COSMO
              <i className="fab fa-battle-net" />
            </Link>
          </div>
          <small className="website-rights">COSMO © 2022</small>
          <div className="social-icons">
            {/* facebook */}
            <Link
              className="social-icon-link facebook"
              to={{
                pathname: "https://www.facebook.com/shreshth.chaturvedi.56",
              }}
              target="_blank"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook-f" />
            </Link>

            {/* instagram  */}
            <Link
              className="social-icon-link instagram"
              to={{
                pathname: "https://www.instagram.com/_shreshth_24/",
              }}
              target="_blank"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram" />
            </Link>

            {/* youtube  */}
            <Link
              className="social-icon-link youtube"
              to="/"
              // target="_blank"
              aria-label="Youtube"
            >
              <i className="fab fa-youtube" />
            </Link>

            {/* twitter  */}
            <Link
              className="social-icon-link twitter"
              to="/"
              // target="_blank"
              aria-label="Twitter"
            >
              <i className="fab fa-twitter" />
            </Link>

            {/* linkedin  */}
            <Link
              className="social-icon-link linkedin"
              to={{
                pathname:
                  "https://www.linkedin.com/in/shreshth-chaturvedi-320745181",
              }}
              target="_blank"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
