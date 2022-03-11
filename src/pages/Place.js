import React from "react";
import Navbar from "../components/Navbar";
import "./Place.css";
import angkor1 from "../images/angkor1.jpg";
import angkor2 from "../images/angkor2.jpg";
import angkor3 from "../images/angkor3.jpg";
import angkor4 from "../images/angkor4.jpg";
import angkor5 from "../images/angkor5.jpg";
import angkor6 from "../images/angkor6.jpg";
import angkor7 from "../images/angkor7.jpg";
import angkor8 from "../images/angkor8.jpg";
import angkor9 from "../images/angkor9.jpg";
import bayon1 from "../images/bayon1.jpg";
import bayon2 from "../images/bayon2.jpg";
import bayon3 from "../images/bayon3.jpg";
import bayon4 from "../images/bayon4.jpg";
import bayon5 from "../images/bayon5.jpg";
import bayon6 from "../images/bayon6.jpg";
import bayon7 from "../images/bayon7.jpg";
import bayon8 from "../images/bayon8.png";
import bayon9 from "../images/bayon9.jpg";
import bakheng1 from "../images/bakheng1.jpg";
import bakheng2 from "../images/bakheng2.jpg";
import bakheng3 from "../images/bakheng3.jpg";
import bakheng4 from "../images/bakheng4.jpg";
import bakheng5 from "../images/bakheng5.jpg";
import bakheng6 from "../images/bakheng6.jpg";
import bakheng7 from "../images/bakheng7.jpg";
import bakheng8 from "../images/bakheng8.jpg";
import bakheng9 from "../images/bakheng9.jpg";
import bakong1 from "../images/bakong1.jpg";
import bakong2 from "../images/bakong2.jpg";
import bakong3 from "../images/bakong3.jpg";
import bakong4 from "../images/bakong4.jpg";
import bakong5 from "../images/bakong5.jpg";
import bakong6 from "../images/bakong6.jpg";
import bakong7 from "../images/bakong7.jpg";
import bakong8 from "../images/bakong8.jpg";
import bakong9 from "../images/bakong9.jpg";
import taprom1 from "../images/taprom1.jpg";
import taprom2 from "../images/taprom2.jpg";
import taprom3 from "../images/taprom3.jpg";
import taprom4 from "../images/taprom4.jpg";
import taprom5 from "../images/taprom5.jpg";
import taprom6 from "../images/taprom6.jpg";
import taprom7 from "../images/taprom7.jpg";
import taprom8 from "../images/taprom8.jpg";
import taprom9 from "../images/taprom9.jpg";
import srei1 from "../images/srei1.jpg";
import srei2 from "../images/srei2.jpg";
import srei3 from "../images/srei3.jpg";
import srei4 from "../images/srei4.jpg";
import srei5 from "../images/srei5.jpg";
import srei6 from "../images/srei6.jpg";
import srei7 from "../images/srei7.jpg";
import srei8 from "../images/srei8.jpg";
import srei9 from "../images/srei9.jpg";
import khan1 from "../images/khan1.jpg";
import khan2 from "../images/khan2.jpg";
import khan3 from "../images/khan3.jpg";
import khan4 from "../images/khan4.jpg";
import khan5 from "../images/khan5.jpg";
import khan6 from "../images/khan6.jpg";
import khan7 from "../images/khan7.jpg";
import khan8 from "../images/khan8.jpg";
import khan9 from "../images/khan9.jpg";
import kulen1 from "../images/kulen1.jpg";
import kulen2 from "../images/kulen2.jpg";
import kulen3 from "../images/kulen3.jpg";
import kulen4 from "../images/kulen4.jpg";
import kulen5 from "../images/kulen5.jpg";
import kulen6 from "../images/kulen6.jpg";
import kulen7 from "../images/kulen7.jpg";
import kulen8 from "../images/kulen8.jpg";
import kulen9 from "../images/kulen9.jpg";
import musuem1 from "../images/musuem1.jpg";
import musuem2 from "../images/musuem2.jpg";
import musuem3 from "../images/musuem3.jpg";
import musuem4 from "../images/musuem4.jpg";
import musuem5 from "../images/musuem5.jpg";
import musuem6 from "../images/musuem6.jpg";
import musuem7 from "../images/musuem7.jpg";
import musuem8 from "../images/musuem8.jpg";
// import musuem9 from "../images/musuem9.jpg";
import pub1 from "../images/pub1.jpg";
import pub2 from "../images/pub2.jpg";
import pub3 from "../images/pub3.jpg";
import pub4 from "../images/pub4.jpg";
import pub5 from "../images/pub5.jpg";
import pub6 from "../images/pub6.jpg";
// import "../script/placeScript.js";
import { useEffect, useState } from "react";
import facebook from "../footerImg/facebook.png";
import gmail from "../footerImg/gmail.png";
import youtube from "../footerImg/youtube.png";

import Sidebar from "../components/Sidebar";
function Place() {
  useEffect(() => {
    document.title = "Places to visit";
  }, []);

  const [isActive, setIsActive] = useState(false);

  window.addEventListener("scroll", () => {
    if (window.pageYOffset > 100) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  });

  return (
    <div>
      <Navbar />

      {/* <a href="#" className="logoFixed">Travelr</a> */}
      {isActive && (
        <a href="/" className="logoFixed active">
          Travelr
        </a>
      )}
      {!isActive && (
        <a href="/" className="logoFixed">
          Travelr
        </a>
      )}
      <div className="container-fluid">
        <Sidebar />
        <div className="container" id="contain">
          <h1 id="angkor">10 highly recommended places in Siem Reap</h1>
          <br />
          <div className="row mx-auto my-auto justify-content-center border border-success rounded-3">
            <div className="container my-3">
              <h2 className="font-weight-light mt-2" id="angkor">
                1. Angkor Wat
              </h2>
              <div
                id="recipeCarousel"
                className="carousel slide w-100"
                data-ride="carousel"
              >
                <div className="carousel-inner w-100" role="listbox">
                  <div className="carousel-item row no-gutters active img-wrapper">
                    <div className="col-4 float-start">
                      <img className="img-fluid" src={angkor1} alt="" />
                    </div>
                    <div className="col-4 float-start">
                      <img className="img-fluid" src={angkor2} alt="" />
                    </div>
                    <div className="col-4 float-start">
                      <img className="img-fluid" src={angkor3} alt="" />
                    </div>
                  </div>
                  <div className="carousel-item row no-gutters img-wrapper">
                    <div className="col-4 float-start">
                      <img className="img-fluid" src={angkor4} alt="" />
                    </div>
                    <div className="col-4 float-start">
                      <img className="img-fluid" src={angkor5} alt="" />
                    </div>
                    <div className="col-4 float-start">
                      <img className="img-fluid" src={angkor6} alt="" />
                    </div>
                  </div>
                  <div className="carousel-item row no-gutters img-wrapper">
                    <div className="col-4 float-start">
                      <img className="img-fluid" src={angkor7} alt="" />
                    </div>
                    <div className="col-4 float-start">
                      <img className="img-fluid" src={angkor8} alt="" />
                    </div>
                    <div className="col-4 float-start">
                      <img className="img-fluid" src={angkor9} alt="" />
                    </div>
                  </div>
                </div>
                <a
                  className="carousel-control-prev bg-transparent w-aut"
                  href="#recipeCarousel"
                  role="button"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                </a>
                <a
                  className="carousel-control-next bg-transparent w-aut"
                  href="#recipeCarousel"
                  role="button"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                </a>
              </div>
              <div>
                <br />
                <p>
                  Angkor Wat is a temple complex in northwest Cambodia. A
                  national symbol and sacred site of Cambodian Buddhism, the
                  complex is a UNESCO World Heritage Site and a significant
                  tourist destination. Angkor Wat is the largest religious
                  complex in the world by land area, measuring 162.6 hectares or
                  more than three times the area of the Vatican City. At the
                  centre of the temple stands a quincunx of four towers
                  surrounding a central spire that rises to a height of 65 m
                  above the ground. The temple has three rectangular galleries,
                  each raised above the next. It lies within an outer wall 3.6
                  kilometres long and a moat more than five kilometres long. The
                  temple was built in the early 12th century at the behest of
                  Suryavarman II of the Khmer Empire, within the imperial
                  capital Yaśodharapura. It served as the state temple for the
                  empire. Originally dedicated to the Hindu god Vishnu, it was
                  converted to a Buddhist temple towards the end of the 12th
                  century. Angkor Wat combines two basic plans of Khmer temple
                  architecture: the temple-mountain and the later galleried
                  temple. It is designed to represent Mount Meru, home of the
                  devas in Hindu and Buddhist cosmology.
                </p>
                <a
                  href="https://en.wikipedia.org/wiki/Angkor_Wat"
                  className="btn btn-warning mt-3"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="container" id="contain">
          <br id="bayon" />
          <div className="row mx-auto my-auto justify-content-center border border-success rounded-3">
            <div className="container my-3">
              <h2 className="font-weight-light mt-2">2. Angkor Thom (Bayon)</h2>
              <div
                id="recipeCarousel1"
                className="carousel slide w-100"
                data-ride="carousel"
              >
                <div className="carousel-inner w-100" role="listbox">
                  <div className="carousel-item row no-gutters active img-wrapper">
                    <div className="col-4 float-start">
                      <img className="img-fluid" src={bayon1} alt="" />
                    </div>
                    <div className="col-4 float-start">
                      <img className="img-fluid" src={bayon2} alt="" />
                    </div>
                    <div className="col-4 float-start">
                      <img className="img-fluid" src={bayon3} alt="" />
                    </div>
                  </div>
                  <div className="carousel-item row no-gutters img-wrapper">
                    <div className="col-4 float-start">
                      <img className="img-fluid" src={bayon4} alt="" />
                    </div>
                    <div className="col-4 float-start">
                      <img className="img-fluid" src={bayon5} alt="" />
                    </div>
                    <div className="col-4 float-start">
                      <img className="img-fluid" src={bayon6} alt="" />
                    </div>
                  </div>
                  <div className="carousel-item row no-gutters img-wrapper">
                    <div className="col-4 float-start">
                      <img className="img-fluid" src={bayon7} alt="" />
                    </div>
                    <div className="col-4 float-start">
                      <img className="img-fluid" src={bayon8} alt="" />
                    </div>
                    <div className="col-4 float-start">
                      <img className="img-fluid" src={bayon9} alt="" />
                    </div>
                  </div>
                </div>
                <a
                  className="carousel-control-prev bg-transparent w-aut"
                  href="#recipeCarousel1"
                  role="button"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                </a>
                <a
                  className="carousel-control-next bg-transparent w-aut"
                  href="#recipeCarousel1"
                  role="button"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                </a>
              </div>
              <div>
                <br />
                <p>
                  The Bayon is a richly decorated Khmer Buddhist temple at
                  Angkor in Cambodia. Built in the late 12th or early 13th
                  century as the state temple of the Mahayana Buddhist King
                  Jayavarman VII, the Bayon stands at the centre of Jayavarman's
                  capital, Angkor Thom. Following Jayavarman's death, it was
                  modified and augmented by subsequent Hindu and Theravada
                  Buddhist kings in accordance with their own religious
                  preferences. The Bayon's most distinctive feature is the
                  multitude of serene and smiling stone faces on the many towers
                  which jut out from the upper terrace and cluster around its
                  central peak. These faces have been associated with the Hindu
                  God Brahma because of the four faces looking in different
                  directions but archaeologists also associate it with Buddha
                  despite the jewelry, crown marking which are not associated
                  with Buddha. The temple has two sets of bas-reliefs, which
                  present a combination of mythological, historical, and mundane
                  scenes. The main conservatory body, the Japanese Government
                  Team for the Safeguarding of Angkor has described the temple
                  as "the most striking expression of the baroque style" of
                  Khmer architecture, as contrasted with the classical style of
                  Angkor Wat
                </p>
                <a
                  href="https://en.wikipedia.org/wiki/Bayon"
                  className="btn btn-warning mt-3"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="container" id="contain">
          <br id="bakheng" />
          <div className="row mx-auto my-auto justify-content-center border border-success rounded-3">
            <div className="container my-3">
              <h2 className="font-weight-light mt-2">3. Phnom Bakheng</h2>
              <div
                id="recipeCarousel2"
                className="carousel slide w-100"
                data-ride="carousel"
              >
                <div className="carousel-inner w-100" role="listbox">
                  <div className="carousel-item row no-gutters active img-wrapper">
                    <div className="col-4 float-start">
                      <img className="img-fluid" src={bakheng1} alt="" />
                    </div>
                    <div className="col-4 float-start">
                      <img className="img-fluid" src={bakheng2} alt="" />
                    </div>
                    <div className="col-4 float-start">
                      <img className="img-fluid" src={bakheng3} alt="" />
                    </div>
                  </div>
                  <div className="carousel-item row no-gutters img-wrapper">
                    <div className="col-4 float-start">
                      <img className="img-fluid" src={bakheng4} alt="" />
                    </div>
                    <div className="col-4 float-start">
                      <img className="img-fluid" src={bakheng5} alt="" />
                    </div>
                    <div className="col-4 float-start">
                      <img className="img-fluid" src={bakheng6} alt="" />
                    </div>
                  </div>
                  <div className="carousel-item row no-gutters img-wrapper">
                    <div className="col-4 float-start">
                      <img className="img-fluid" src={bakheng7} alt="" />
                    </div>
                    <div className="col-4 float-start">
                      <img className="img-fluid" src={bakheng8} alt="" />
                    </div>
                    <div className="col-4 float-start">
                      <img className="img-fluid" src={bakheng9} alt="" />
                    </div>
                  </div>
                </div>
                <a
                  className="carousel-control-prev bg-transparent w-aut"
                  href="#recipeCarousel2"
                  role="button"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                </a>
                <a
                  className="carousel-control-next bg-transparent w-aut"
                  href="#recipeCarousel2"
                  role="button"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                </a>
              </div>
              <div>
                <br />
                <p>
                  Phnom Bakheng is a Hindu and Buddhist temple in the form of a
                  temple mountain in Siem Reap Province, Cambodia. Dedicated to
                  Shiva, it was built at the end of the 9th century, during the
                  reign of King Yasovarman. Located atop a hill, it is nowadays
                  a popular tourist spot for sunset views of the much bigger
                  temple Angkor Wat, which lies amid the jungle about 1.5 km to
                  the southeast. The large number of visitors makes Phnom
                  Bakheng one of the most threatened monuments of Angkor. Since
                  2004, World Monuments Fund has been working to conserve the
                  temple in partnership with APSARA.
                </p>
                <a
                  href="https://en.wikipedia.org/wiki/Phnom_Bakheng"
                  className="btn btn-warning mt-3"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="container" id="contain">
          <br id="bakong" />
          <div className="row mx-auto my-auto justify-content-center border border-success rounded-3">
            <div className="container my-3">
              <h2 className="font-weight-light mt-2">4. Bakong Temples</h2>
              <div
                id="recipeCarousel3"
                className="carousel slide w-100"
                data-ride="carousel"
              >
                <div className="carousel-inner w-100" role="listbox">
                  <div className="carousel-item row no-gutters active img-wrapper">
                    <div className="col-4 float-start">
                      <img className="img-fluid" src={bakong1} alt="" />
                    </div>
                    <div className="col-4 float-start">
                      <img className="img-fluid" src={bakong2} alt="" />
                    </div>
                    <div className="col-4 float-start">
                      <img className="img-fluid" src={bakong3} alt="" />
                    </div>
                  </div>
                  <div className="carousel-item row no-gutters img-wrapper">
                    <div className="col-4 float-start">
                      <img className="img-fluid" src={bakong4} alt="" />
                    </div>
                    <div className="col-4 float-start">
                      <img className="img-fluid" src={bakong5} alt="" />
                    </div>
                    <div className="col-4 float-start">
                      <img className="img-fluid" src={bakong6} alt="" />
                    </div>
                  </div>
                  <div className="carousel-item row no-gutters img-wrapper">
                    <div className="col-4 float-start">
                      <img className="img-fluid" src={bakong7} alt="" />
                    </div>
                    <div className="col-4 float-start">
                      <img className="img-fluid" src={bakong8} alt="" />
                    </div>
                    <div className="col-4 float-start">
                      <img className="img-fluid" src={bakong9} alt="" />
                    </div>
                  </div>
                </div>
                <a
                  className="carousel-control-prev bg-transparent w-aut"
                  href="#recipeCarousel3"
                  role="button"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                </a>
                <a
                  className="carousel-control-next bg-transparent w-aut"
                  href="#recipeCarousel3"
                  role="button"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                </a>
              </div>
              <div>
                <br />
                <p>
                  Bakong is the first Khmer temple mountain of sandstone
                  constructed by rulers of the Khmer Empire at Angkor near
                  modern Siem Reap in Cambodia. In the final decades of the 9th
                  century AD, it served as the official state temple of King
                  Indravarman I in the ancient city of Hariharalaya, located in
                  an area that today is called Roluos. The structure of Bakong
                  took shape of stepped pyramid, popularly identified as temple
                  mountain of early Khmer temple architecture. The striking
                  similarity of the Bakong and Borobudur temple in Java, going
                  into architectural details such as the gateways and stairs to
                  the upper terraces, suggests strongly that Borobudur was
                  served as the prototype of Bakong. There must have been
                  exchanges of travelers, if not mission, between Khmer kingdom
                  and the Sailendras in Java. Transmitting to Cambodia not only
                  ideas, but also technical and architectural details of
                  Borobudur, including arched gateways in corbelling method.
                </p>
                <a
                  href="https://en.wikipedia.org/wiki/Bakong"
                  className="btn btn-warning mt-3"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="container" id="contain">
          <br id="taprom" />
          <div className="row mx-auto my-auto justify-content-center border border-success rounded-3">
            <div className="container my-3">
              <h2 className="font-weight-light mt-2">5. Ta Prohm Temple</h2>
              <div
                id="recipeCarousel4"
                className="carousel slide w-100"
                data-ride="carousel"
              >
                <div className="carousel-inner w-100" role="listbox">
                  <div className="carousel-item row no-gutters active img-wrapper">
                    <div className="col-4 float-start">
                      <img className="img-fluid" src={taprom1} alt="" />
                    </div>
                    <div className="col-4 float-start">
                      <img className="img-fluid" src={taprom2} alt="" />
                    </div>
                    <div className="col-4 float-start">
                      <img className="img-fluid" src={taprom3} alt="" />
                    </div>
                  </div>
                  <div className="carousel-item row no-gutters img-wrapper">
                    <div className="col-4 float-start">
                      <img className="img-fluid" src={taprom4} alt="" />
                    </div>
                    <div className="col-4 float-start">
                      <img className="img-fluid" src={taprom5} alt="" />
                    </div>
                    <div className="col-4 float-start">
                      <img className="img-fluid" src={taprom6} alt="" />
                    </div>
                  </div>
                  <div className="carousel-item row no-gutters img-wrapper">
                    <div className="col-4 float-start">
                      <img className="img-fluid" src={taprom7} alt="" />
                    </div>
                    <div className="col-4 float-start">
                      <img className="img-fluid" src={taprom8} alt="" />
                    </div>
                    <div className="col-4 float-start">
                      <img className="img-fluid" src={taprom9} alt="" />
                    </div>
                  </div>
                </div>
                <a
                  className="carousel-control-prev bg-transparent w-aut"
                  href="#recipeCarousel4"
                  role="button"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                </a>
                <a
                  className="carousel-control-next bg-transparent w-aut"
                  href="#recipeCarousel4"
                  role="button"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                </a>
              </div>
              <div>
                <br />
                <p>
                  Ta Prohm is the modern name of the temple in Siem Reap,
                  Cambodia, built in the Bayon style largely in the late 12th
                  and early 13th centuries and originally called Rajavihara.
                  Located approximately one kilometre east of Angkor Thom and on
                  the southern edge of the East Baray, it was founded by the
                  Khmer King Jayavarman VII as a Mahayana Buddhist monastery and
                  university. Unlike most Angkorian temples, Ta Prohm is in much
                  the same condition in which it was found: the photogenic and
                  atmospheric combination of trees growing out of the ruins and
                  the jungle surroundings have made it one of Angkor's most
                  popular temples with visitors. UNESCO inscribed Ta Prohm on
                  the World Heritage List in 1992. Today, it is one of the most
                  visited complexes in Cambodia’s Angkor region. The
                  conservation and restoration of Ta Prohm is a partnership
                  project of the Archaeological Survey of India and the APSARA.
                </p>
                <a
                  href="https://en.wikipedia.org/wiki/Ta_Prohm"
                  className="btn btn-warning mt-3"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="container" id="contain">
          <br id="banteaysrei" />
          <div className="row mx-auto my-auto justify-content-center border border-success rounded-3">
            <div className="container my-3">
              <h2 className="font-weight-light mt-2">6. Banteay Srei Temple</h2>
              <div
                id="recipeCarousel5"
                className="carousel slide w-100"
                data-ride="carousel"
              >
                <div className="carousel-inner w-100" role="listbox">
                  <div className="carousel-item row no-gutters active img-wrapper">
                    <div className="col-4 float-start">
                      <img className="img-fluid" src={srei1} alt="" />
                    </div>
                    <div className="col-4 float-start">
                      <img className="img-fluid" src={srei2} alt="" />
                    </div>
                    <div className="col-4 float-start">
                      <img className="img-fluid" src={srei3} alt="" />
                    </div>
                  </div>
                  <div className="carousel-item row no-gutters img-wrapper">
                    <div className="col-4 float-start">
                      <img className="img-fluid" src={srei4} alt="" />
                    </div>
                    <div className="col-4 float-start">
                      <img className="img-fluid" src={srei5} alt="" />
                    </div>
                    <div className="col-4 float-start">
                      <img className="img-fluid" src={srei6} alt="" />
                    </div>
                  </div>
                  <div className="carousel-item row no-gutters img-wrapper">
                    <div className="col-4 float-start">
                      <img className="img-fluid" src={srei7} alt="" />
                    </div>
                    <div className="col-4 float-start">
                      <img className="img-fluid" src={srei8} alt="" />
                    </div>
                    <div className="col-4 float-start">
                      <img className="img-fluid" src={srei9} alt="" />
                    </div>
                  </div>
                </div>
                <a
                  className="carousel-control-prev bg-transparent w-aut"
                  href="#recipeCarousel5"
                  role="button"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                </a>
                <a
                  className="carousel-control-next bg-transparent w-aut"
                  href="#recipeCarousel5"
                  role="button"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                </a>
              </div>
              <div>
                <br />
                <p>
                  Banteay Srei or Banteay Srey is a 10th-century Cambodian
                  temple dedicated to the Hindu god Shiva. Located in the area
                  of Angkor, it lies near the hill of Phnom Dei, 25 km (16 mi)
                  north-east of the main group of temples that once belonged to
                  the medieval capitals of Yasodharapura and Angkor Thom.[1]
                  Banteay Srei is built largely of red sandstone, a medium that
                  lends itself to the elaborate decorative wall carvings which
                  are still observable today. The buildings themselves are
                  miniature in scale, unusually so when measured by the
                  standards of Angkorian construction. These factors have made
                  the temple extremely popular with tourists, and have led to
                  its being widely praised as a "precious gem", or the "jewel of
                  Khmer art.
                </p>
                <a
                  href="https://en.wikipedia.org/wiki/Banteay_Srei"
                  className="btn btn-warning mt-3"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="container" id="contain">
          <br id="preaskhan" />
          <div className="row mx-auto my-auto justify-content-center border border-success rounded-3">
            <div className="container my-3">
              <h2 className="font-weight-light mt-2">7. Preah Khan Temple</h2>
              <div
                id="recipeCarousel6"
                className="carousel slide w-100"
                data-ride="carousel"
              >
                <div className="carousel-inner w-100" role="listbox">
                  <div className="carousel-item row no-gutters active img-wrapper">
                    <div className="col-4 float-start">
                      <img className="img-fluid" src={khan1} alt="" />
                    </div>
                    <div className="col-4 float-start">
                      <img className="img-fluid" src={khan2} alt="" />
                    </div>
                    <div className="col-4 float-start">
                      <img className="img-fluid" src={khan3} alt="" />
                    </div>
                  </div>
                  <div className="carousel-item row no-gutters img-wrapper">
                    <div className="col-4 float-start">
                      <img className="img-fluid" src={khan4} alt="" />
                    </div>
                    <div className="col-4 float-start">
                      <img className="img-fluid" src={khan5} alt="" />
                    </div>
                    <div className="col-4 float-start">
                      <img className="img-fluid" src={khan6} alt="" />
                    </div>
                  </div>
                  <div className="carousel-item row no-gutters img-wrapper">
                    <div className="col-4 float-start">
                      <img className="img-fluid" src={khan7} alt="" />
                    </div>
                    <div className="col-4 float-start">
                      <img className="img-fluid" src={khan8} alt="" />
                    </div>
                    <div className="col-4 float-start">
                      <img className="img-fluid" src={khan9} alt="" />
                    </div>
                  </div>
                </div>
                <a
                  className="carousel-control-prev bg-transparent w-aut"
                  href="#recipeCarousel6"
                  role="button"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                </a>
                <a
                  className="carousel-control-next bg-transparent w-aut"
                  href="#recipeCarousel6"
                  role="button"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                </a>
              </div>
              <div>
                <br />
                <p>
                  Preah Khan is a temple at Angkor, Cambodia, built in the 12th
                  century for King Jayavarman VII to honor his father. It is
                  located northeast of Angkor Thom and just west of the
                  Jayatataka baray, with which it was associated. It was the
                  centre of a substantial organisation, with almost 100,000
                  officials and servants. The temple is flat in design, with a
                  basic plan of successive rectangular galleries around a
                  Buddhist sanctuary complicated by Hindu satellite temples and
                  numerous later additions. Like the nearby Ta Prohm, Preah Khan
                  has been left largely unrestored, with numerous trees and
                  other vegetation growing among the ruins.
                </p>
                <a
                  href="https://en.wikipedia.org/wiki/Preah_Khan"
                  className="btn btn-warning mt-3"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="container" id="contain">
          <br id="kulen" />
          <div className="row mx-auto my-auto justify-content-center border border-success rounded-3">
            <div className="container my-3">
              <h2 className="font-weight-light mt-2">
                8. Phnom Kulen National Park
              </h2>
              <div
                id="recipeCarousel7"
                className="carousel slide w-100"
                data-ride="carousel"
              >
                <div className="carousel-inner w-100" role="listbox">
                  <div className="carousel-item row no-gutters active img-wrapper">
                    <div className="col-4 float-start">
                      <img className="img-fluid" src={kulen1} alt="" />
                    </div>
                    <div className="col-4 float-start">
                      <img className="img-fluid" src={kulen7} alt="" />
                    </div>
                    <div className="col-4 float-start">
                      <img className="img-fluid" src={kulen9} alt="" />
                    </div>
                  </div>
                  <div className="carousel-item row no-gutters img-wrapper">
                    <div className="col-4 float-start">
                      <img className="img-fluid" src={kulen8} alt="" />
                    </div>
                    <div className="col-4 float-start">
                      <img className="img-fluid" src={kulen3} alt="" />
                    </div>
                    <div className="col-4 float-start">
                      <img className="img-fluid" src={kulen4} alt="" />
                    </div>
                  </div>
                  <div className="carousel-item row no-gutters img-wrapper">
                    <div className="col-4 float-start">
                      <img className="img-fluid" src={kulen5} alt="" />
                    </div>
                    <div className="col-4 float-start">
                      <img className="img-fluid" src={kulen6} alt="" />
                    </div>
                    <div className="col-4 float-start">
                      <img className="img-fluid" src={kulen2} alt="" />
                    </div>
                  </div>
                </div>
                <a
                  className="carousel-control-prev bg-transparent w-aut"
                  href="#recipeCarousel7"
                  role="button"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                </a>
                <a
                  className="carousel-control-next bg-transparent w-aut"
                  href="#recipeCarousel7"
                  role="button"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                </a>
              </div>
              <div>
                <br />
                <p>
                  A playground for locals, Phnom Kulen (literally Mountain of
                  the Lychees) is a gorgeous day out. The main attraction is the
                  waterfalls at the top of Kulen Mountain and it’s also a great
                  picnic spot; well set up in Cambodian style with hammocks and
                  shelters to keep you shaded from the sun. It’s around 1.5-2
                  hours drive from Siem Reap and if you go all the way to the
                  top by van or car, you need to get there early, as the road is
                  one-way traffic only. The birthplace of the ancient Khmer
                  empire, it is said that it was at Phnom Kulen that King
                  Jayavarman II proclaimed Cambodia’s independence from Java.
                </p>
                <a
                  href="https://en.wikipedia.org/wiki/Phnom_Kulen_National_Park"
                  className="btn btn-warning mt-3"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="container" id="contain">
          <br id="museum" />
          <div className="row mx-auto my-auto justify-content-center border border-success rounded-3">
            <div className="container my-3">
              <h2 className="font-weight-light mt-2">
                9. Angkor National Museum
              </h2>
              <div
                id="recipeCarousel8"
                className="carousel slide w-100"
                data-ride="carousel"
              >
                <div className="carousel-inner w-100" role="listbox">
                  <div className="carousel-item row no-gutters active img-wrapper">
                    <div className="col-4 float-start">
                      <img className="img-fluid" src={musuem4} alt="" />
                    </div>
                    <div className="col-4 float-start">
                      <img className="img-fluid" src={musuem1} alt="" />
                    </div>
                    <div className="col-4 float-start">
                      <img className="img-fluid" src={musuem2} alt="" />
                    </div>
                  </div>
                  <div className="carousel-item row no-gutters img-wrapper">
                    <div className="col-4 float-start">
                      <img className="img-fluid" src={musuem3} alt="" />
                    </div>
                    <div className="col-4 float-start">
                      <img className="img-fluid" src={musuem5} alt="" />
                    </div>
                    <div className="col-4 float-start">
                      <img className="img-fluid" src={musuem6} alt="" />
                    </div>
                  </div>
                  <div className="carousel-item row no-gutters img-wrapper">
                    <div className="col-4 float-start">
                      <img className="img-fluid" src={musuem7} alt="" />
                    </div>
                    <div className="col-4 float-start">
                      <img className="img-fluid" src={musuem8} alt="" />
                    </div>
                    <div className="col-4 float-start">
                      <img className="img-fluid" src={musuem1} alt="hehe" />
                    </div>
                  </div>
                </div>
                <a
                  className="carousel-control-prev bg-transparent w-aut"
                  href="#recipeCarousel8"
                  role="button"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                </a>
                <a
                  className="carousel-control-next bg-transparent w-aut"
                  href="#recipeCarousel8"
                  role="button"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                </a>
              </div>
              <div>
                <br />
                <p>
                  Angkor National Museum is an archaeological museum dedicated
                  to the collection, preservation and presentation of Angkorian
                  artifacts, also to provides information and education about
                  art and culture of Khmer civilization, with collections mainly
                  dated from Khmer Empire's Angkor period circa 9th to
                  14th-century. Most of the artifacts are discovered in and
                  around the Angkor archaeological sites nearby. The museum is
                  located in Siem Reap, Cambodia, on the way between downtown
                  Siem Reap to northern road leading to Angkor ancient city.
                  Opened on 12 November 2007, the Angkor National Museum covers
                  the golden era of the Khmer Empire, making use of audio-visual
                  multimedia technology. The museum covers Khmer history,
                  civilization, and cultural heritage in eight galleries. The
                  museum has a strict no-photos policy. The museum is owned and
                  operated by Thai Vilailuck International Holdings, based in
                  Bangkok. It is currently displaying archaeological objects
                  borrowed from the Cambodian National Museum in Phnom Penh
                </p>
                <a
                  href="https://en.wikipedia.org/wiki/Angkor_National_Museum"
                  className="btn btn-warning mt-3"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="container" id="contain">
          <br id="pubstreet" />
          <div className="row mx-auto my-auto justify-content-center border border-success rounded-3">
            <div className="container my-3">
              <h2 className="font-weight-light mt-2">10. Pubs street</h2>
              <div
                id="recipeCarousel9"
                className="carousel slide w-100"
                data-ride="carousel"
              >
                <div className="carousel-inner w-100" role="listbox">
                  <div className="carousel-item row no-gutters active img-wrapper">
                    <div className="col-4 float-start">
                      <img className="img-fluid" src={pub1} alt="" />
                    </div>
                    <div className="col-4 float-start">
                      <img className="img-fluid" src={pub2} alt="" />
                    </div>
                    <div className="col-4 float-start">
                      <img className="img-fluid" src={pub4} alt="" />
                    </div>
                  </div>
                  <div className="carousel-item row no-gutters  img-wrapper">
                    <div className="col-4 float-start">
                      <img className="img-fluid" src={pub3} alt="" />
                    </div>
                    <div className="col-4 float-start">
                      <img className="img-fluid" src={pub5} alt="" />
                    </div>
                    <div className="col-4 float-start">
                      <img className="img-fluid" src={pub6} alt="" />
                    </div>
                  </div>
                </div>
                <a
                  className="carousel-control-prev bg-transparent w-aut"
                  href="#recipeCarousel9"
                  role="button"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                </a>
                <a
                  className="carousel-control-next bg-transparent w-aut"
                  href="#recipeCarousel9"
                  role="button"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                </a>
              </div>
              <div>
                <br />
                <p>Pubs, dining & a party atmosphere</p>
                <a
                  href="https://www.google.com/search?q=Pubs+street&sxsrf=APq-WBu9ApeTB8hLWCQMJej9nPjGEumscQ%3A1646321940586&ei=FOEgYsSwI8CEr7wPzf656AQ&ved=0ahUKEwjEitGTo6r2AhVAwosBHU1_Dk0Q4dUDCA4&oq=Pubs+street&gs_lcp=Cgdnd3Mtd2l6EAwyBwgAEEcQsAMyBwgAEEcQsAMyBwgAEEcQsAMyBwgAEEcQsAMyBwgAEEcQsAMyBwgAEEcQsAMyBwgAEEcQsAMyBwgAEEcQsAMyBwgAELADEEMyBwgAELADEEMyBwgAELADEEMyBwgAELADEEMyCggAEOQCELADGAAyCggAEOQCELADGAAyCggAEOQCELADGAAyEgguEMcBEK8BEMgDELADEEMYATISCC4QxwEQrwEQyAMQsAMQQxgBMhIILhDHARCvARDIAxCwAxBDGAEyEgguEMcBEK8BEMgDELADEEMYAUoECEEYAEoECEYYAVDXB1jXB2CuDmgDcAB4AIABAIgBAJIBAJgBAKABAqABAcgBE8ABAdoBBggAEAEYCdoBBggBEAEYCA&sclient=gws-wiz"
                  className="btn btn-warning mt-3"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col">
              <h3>Travelr</h3>
              <div>
                The best digital platform that provide booking service for
                authentic and unpresidented trip in Cambodia.
              </div>
            </div>
            <div className="col"></div>
            <div className="col contact-us">
              <h3>Contact Us</h3>
              <p>
                <a href="facebook.com">
                  <img src={facebook} alt="" />
                </a>
                <a href="youtube.com">
                  <img src={youtube} alt="" />
                </a>

                <a href="gmail.com">
                  <img src={gmail} alt="" />
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="copyright">Copyright &copy; 2022 | Travelr</div>
      </footer>
    </div>
  );
}

export default Place;
