import React from "react";
import "./Footer.css";
import appstore from "./Pictures/appStore.png";
import playstore from "./Pictures/playStore.png";
import horse from "./Pictures/horse.png";
function Footer() {
  return (
    <div className="footer-container">
      <div className="footer">
        <div className="horse-logo">
          <img src={horse} className="horse-img" />
        </div>
        <div className="links-container">
          <h1 className="headings">Want to get acty?</h1>
          <div className="links">
            <img src={appstore} height="60"  />
            <img src={playstore} height="70" className="play-store" />
          </div>
        </div>
      </div>

      <p>privacy policy</p>
    </div>
  );
}

export default Footer;
