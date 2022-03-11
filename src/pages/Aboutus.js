import React from "react";
import Navbar from "../components/Navbar";
import "./Aboutus.css";
import angkor from "../images/angkorWat.jpg";
import { useEffect } from "react";
import Footer from "../components/Footer";
function Aboutus() {
  useEffect(() => {
    document.title = "About us"
 }, [])
  return (
    <div>
      <Navbar />
      <section id="about_us" className="container px-5">
        <div className="title mt-5">
          <h3>About Travelr</h3>
        </div>
        <div className="intro mt-3">
          <p>
            Cambodia is a country rich in culture, art, and tourism sector plays
            an important role. To know more about these, tourists can come and
            visit to get first hand experience and expand their knowledge about
            khmer's history and explore new things.
          </p>

          <p>
            That is when our website came in to play. Our website gives tourists
            a great help for them to make their dream come true and get all the
            problems out of their way as much as possible.
          </p>
        </div>
        <div className="intro-image px-5">
          <img src={angkor} width="100%" alt="angkor" />
        </div>
        <div className="subtitle mt-3">
          <h4>
            Our website was created in first place to target the tourists who:
          </h4>
        </div>
        <ul>
          <li>
            <p>Are interested in khmer culture</p>
          </li>
          <li>
            <p>Want to understand Khmer's history</p>
          </li>
          <li>
            <p>Want to travel to the new place but has no idea where to go</p>
          </li>
          <li>
            <p>
              Need guidelines for traveling and discovering new places in
              Cambodia
            </p>
          </li>
        </ul>
      </section>
      <Footer/>
    </div>
  );
}

export default Aboutus;
