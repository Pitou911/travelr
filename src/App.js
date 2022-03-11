// import Navbar from "./components/Navbar";
import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Aboutus from "./pages/Aboutus";
import Booking from "./pages/Booking";
import Home from "./pages/Home";
import Place from "./pages/Place";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/placetovisit" element={<Place />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/aboutus" element={<Aboutus />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
