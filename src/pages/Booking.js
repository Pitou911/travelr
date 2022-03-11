import React from "react";
import Navbar from "../components/Navbar";
import "./Booking.css";
import angkor from "../bookingImg/angkor.jpg";
import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import apiService from "../service/apiService";

function Booking() {

  

  useEffect(() => {
      document.title = "Booking"
  }, [])

  

  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [description, setDescription] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const onSubmitHandler = (event) => {
    event.preventDefault();
    
    apiService.post('/form', {
      "Firstname": firstname,
      "Lastname": lastname,
      "Email": email,
      "PhoneNumber": phoneNumber,
      "StartDate": startDate,
      "EndDate": endDate,
      "Description": description,
    })
    .then(function (res) {
      console.log(res);
    })
    .catch(function (error) {
      console.log(error);
    });
    console.log("Submitted", firstname, lastname, email, phoneNumber, startDate, endDate, description);
    setIsSubmitted(true);

  }

  return (
    <div>
      <Navbar />
      <div className="banner-wrapper">
        <img className="banner-img" src={angkor} alt="angkor pic" />
        <div>
          {!isSubmitted && <p className="banner-text">BOOK YOUR TRIP NOW!!!</p>}
          {isSubmitted && <p className="banner-text">THANK YOU FOR TRAVELING WITH US</p>}
          {isSubmitted && 
            <div className="m-5">
              <div className="m-5 text-center">
                  <h3>Our team will get back to you as soon as possible</h3>
              </div>
            </div>}
        </div>
      </div>
      {!isSubmitted &&
        <div className="m-5">
          <div className="m-5">
            <h2>How does our booking system work?</h2>
            <ul>
              <li>
                Fill out our booking form (contact information, trip information)
              </li>
              <li>
                We will reach out back to you for furthur information about the
                trip that you want
              </li>
              <li>
                We will arrage and booking everything for the trip that you desire
              </li>
            </ul>
          </div>
        </div>}

        {!isSubmitted &&
        <section className="booking-form m-5">
          <form onSubmit={onSubmitHandler} className="m-5">
            <h2>Contact Information</h2>
            <div className="name">
              <div className="mb-3 name-fill me-3">
                <label htmlFor="firstname" className="form-label">
                  First name
                </label>
                <input onChange={(event) => setFirstname(event.target.value)} type="text" className="form-control" id="firstname" required />
              </div>
              <div className="mb-3 name-fill ms-3">
                <label htmlFor="lastname" className="form-label">
                  Last name
                </label>
                <input onChange={(event) => setLastname(event.target.value)} type="text" className="form-control" id="lastname" required />
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                onChange={(event) => setEmail(event.target.value)}
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                required
              />
              <div id="emailHelp" className="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="phone" className="form-label">
                Phone number
              </label>
              <input onChange={(event) => setPhoneNumber(event.target.value)} type="number" className="form-control" id="phone" required />
            </div>

            <h2>Your Trip Information</h2>
            <div className=" trip-date">
              <div className="mb-3 dateStartEnd me-3">
                <label htmlFor="dateStart" className="form-labell mb-2">
                  Starting date
                </label>
                <input onChange={(event) => setStartDate(event.target.value)} type="date" className="form-control" id="dateStart" />
              </div>
              <div className="mb-3 dateStartEnd ms-3">
                <label htmlFor="dateEnd" className="form-labell mb-2">
                  Ending date
                </label>
                <input onChange={(event) => setEndDate(event.target.value)} type="date" className="form-control" id="dateEnd" />
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="tripInfo" className="form-label">
                Trip description
              </label>
              <textarea
                onChange={(event) => setDescription(event.target.value)}
                className="form-control"
                id="tripInfo"
                placeholder="Add additional information about your trip"
              ></textarea>
            </div>

            <div className="pb-5">
              <button  type="submit" className="btn btn-primary mt-3" id="submitBtn">
                Send
              </button>
            </div>
          </form>
        </section>
      }
      <Footer/>
    </div>
  );
}

export default Booking;
