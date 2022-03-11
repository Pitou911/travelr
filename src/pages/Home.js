import React from "react";
import Navbar from "../components/Navbar";
import { useEffect } from "react";
import Footer from "../components/Footer";
import angkor from "../homepageImg/angkor-edit.jpg";
import angkor2 from "../images/angkor2.jpg";
import bayon from "../images/bayon3.jpg";
import pub from "../images/pub1.jpg";
import kulen from "../homepageImg/kulen.jpg";
import apsara from "../homepageImg/apsara.jpg";
import architecture from "../homepageImg/architecture.jpg";
import bokator from "../homepageImg/bokator.jpg";
import sculpture from "../homepageImg/sculpture.jpg";
import textile from "../homepageImg/textile.jpg";
import ceramic from "../homepageImg/ceramic.jpg";
import {Link, NavLink} from "react-router-dom";
import "./Home.css";

function Home() {
  useEffect(() => {
    document.title = "Travelr"
 }, [])
  return (
    <div>
      <Navbar />



      <div id="carouselExampleDark" className="carousel carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="10000">
            <img src={angkor} className="d-block w-100 blurImg" alt="..."/>
            <div className="carousel-caption">
              <h1><b>Let us take you away</b></h1>
            </div>
          </div>
          <div className="carousel-item">
            <img src={kulen} className="d-block w-100 blurImg" alt="..."/>
            <div className="carousel-caption d-none d-md-block">
              <h1><b>Make Your Tour Amazing With Us</b></h1>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>  


      

      <div className="container mt-5">
        <h3><b>Popular Places</b></h3>
        <hr/>
        <div className="row">
          <div className="col-lg-4 col-sm-12 mt-2">
            <div className="card">
              <img src={angkor2} className="card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">Angkor Wat</h5>
                <p className="card-text">Angkor Wat is one of the most popular place to visit in Cambodia, and It is an enormous Buddhist temple complex located in northern Cambodia. It was originally built in the first half of the 12th century as a Hindu temple.</p>
                
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-12 mt-2">
            <div className="card">
              <img src={bayon} className="card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">Angkor Thom</h5>
                <p className="card-text">Angkor Thom, alternatively Nokor Thom located in present-day Cambodia, was the last and most enduring capital city of the Khmer Empire. It was established in the late twelfth century by King Jayavarman VII.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-12 mt-2">
            <div className="card">
              <img src={pub} className="card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">Pub Street</h5>
                <p className="card-text">Pub Street Siem Reap is the nightlife hub of the town, featuring rows of backpacker-friendly bars and pubs, packed nightclubs and international restaurants.</p>
              </div>
            </div>
          </div>
          <div className="mt-3">
            <Link exact to="/placetovisit" className="btn btn-primary" id = "submitBtn">See the full list &gt;</Link>
          </div>
          
        </div>

        <h3><b>Art and Culture</b></h3>
        <hr/>
        <div className="row">
          <div className="col-lg-4 col-sm-12 mt-2">
            <div className="card">
              <img src={sculpture} className="card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">Sculpture</h5>
                <p className="card-text">Khmer sculpture refers to the stone sculpture of the Khmer Empire, which ruled a territory based on modern Cambodia, but rather larger, from the 9th to the 13th century. The most celebrated examples are found in Angkor, which served as the seat of the empire.</p>
                <a href="https://en.wikipedia.org/wiki/Khmer_sculpture" className="btn btn-primary " id="submitBtn">Read More</a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-12 mt-2">
            <div className="card">
              <img src={architecture} className="card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">Architecture</h5>
                <p className="card-text">The Kingdom of Cambodia has a rich history of Khmer architecture. Built from the latter half of the 8th century to the first half of the 15th century, these structures are embodied by the iconic Angkor Wat temple complex.</p>
                <a href="https://en.wikipedia.org/wiki/Khmer_architecture" className="btn btn-primary " id="submitBtn">Read More</a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-12 mt-2">
            <div className="card">
              <img src={apsara} className="card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">Apsara Dance</h5>
                <p className="card-text">Apsara dance is an essential part of the Khmer culture. It finds its roots in both Hindu and Buddhist mythologies. According to Hindu mythology, Apsaras were beautiful female creatures that descended from heaven to entertain Gods and Kings with their dance.</p>
                <a href="https://en.wikipedia.org/wiki/Apsara_Dance" className="btn btn-primary " id="submitBtn">Read More</a>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-sm-12 mt-2">
            <div className="card">
              <img src={bokator} className="card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">Bokator</h5>
                <p className="card-text">Bokator is an ancient battlefield martial art used by ancient Khmer military groups. It is one of the oldest existing fighting systems originating from Cambodia.</p>
                <a href="https://en.wikipedia.org/wiki/Bokator" className="btn btn-primary " id="submitBtn">Read More</a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-12 mt-2">
            <div className="card">
              <img src={textile} className="card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">Textiles</h5>
                <p className="card-text">Silk weaving in Cambodia has a long history. The practice dates to as early as the late 13th century. According to Zhou Daguan’s record, “None of the locals produces silk. Nor do the women know how to stitch and darn with a needle and thread. The only thing they can do is weave cotton from Kapok. Even then they cannot spin the yarn, but just use their hands to gather the cloth into strands.</p>
                <a href="https://en.wikipedia.org/wiki/Cambodian_art#Textiles" className="btn btn-primary " id="submitBtn">Read More</a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-12 mt-2">
            <div className="card">
              <img src={ceramic} className="card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">Ceramics</h5>
                <p className="card-text">Cambodian pottery traditions date to 5000 BCE. Ceramics were mostly used for domestic purposes such as holding food and water. There is no evidence that Khmer ceramics were ever exported, though ceramics were imported from elsewhere in Asia beginning in the 10th century. Ceramics in the shape of birds, elephants, rabbits, and other animals were popular between the 11th and 13th centuries</p>
                <a href="https://en.wikipedia.org/wiki/Cambodian_art#Ceramics" className="btn btn-primary " id="submitBtn">Read More</a>
              </div>
            </div>
          </div>
        </div>
        <div className="m-5">
            <iframe src="https://www.youtube.com/embed/fGrLyci6M4k?autoplay=1&mute=1&loop=1" title="Khmer Culture and Art" ></iframe>
        </div>
        <hr/>
          
        <h3></h3>    
        
      </div>

     

      <Footer/>
    </div>
  );
}

export default Home;
