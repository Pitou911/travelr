import React, {useState} from "react";
import "./Sidebar.css";
function Sidebar() {
  
 const [isButtom, setIsButtom] = useState(false);

  window.onscroll = function() {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) 
    {
       setIsButtom(true);
    }
    else
    {
       setIsButtom(false);
    }
  };

  return (
    // className="w3-sidebar w3-bar-block"

    <div id="sit" className={`w3-sidebar w3-bar-block sit${isButtom ? " active" : ""}`}>
      <h3 className="w3-bar-item">Place Listing</h3>
      <a href="#angkor" className="w3-bar-item w3-button">
        1.Angkor Wat
      </a>
      <a href="#bayon" className="w3-bar-item w3-button">
        2.Angkor Thom
      </a>
      <a href="#bakheng" className="w3-bar-item w3-button">
        3.Phnom Bakheng
      </a>
      <a href="#bakong" className="w3-bar-item w3-button">
        4.Bakong Temples
      </a>
      <a href="#taprom" className="w3-bar-item w3-button">
        5.Ta Prohm Temple
      </a>
      <a href="#banteaysrei" className="w3-bar-item w3-button">
        6.Banteay Srei Temple
      </a>
      <a href="#preaskhan" className="w3-bar-item w3-button">
        7.Preah Khan Temple
      </a>
      <a href="#kulen" className="w3-bar-item w3-button">
        8.Phnom Kulen National Park
      </a>
      <a href="#museum" className="w3-bar-item w3-button">
        9.Angkor Museum
      </a>
      <a href="#pubstreet" className="w3-bar-item w3-button">
        10.Pubs street
      </a>
    </div>
    
  );
  
}

export default Sidebar;
