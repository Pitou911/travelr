import React from "react";
import facebook from "../footerImg/facebook.png";
import gmail from "../footerImg/gmail.png";
import youtube from "../footerImg/youtube.png";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="p-4 pb-1">
      <div className="container">
        <div className="row">
          <div className="col">
            <h3>
              <b>Travelr</b>
            </h3>
            <div>
              The best digital platform that provide booking service for
              authentic and unpresidented trip in Cambodia.
            </div>
          </div>
          <div className="col"></div>
          <div className="col contact-us">
            <h3>
              <b>Contact Us</b>
            </h3>
            <p>
              <a href="facebook.com">
                <img src={facebook} alt="" />
              </a>
              <a href="youtube.com">
                <img src={youtube} alt="" />
              </a>

              <a href="google.com">
                <img src={gmail} alt="" />
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="copyright">Copyright &copy; 2022 | Travelr</div>
    </footer>
  );
}
