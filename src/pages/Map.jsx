import './pages.css';
import './logged.css';
import { Footer } from '../components/Footer';
import { useNavigate } from 'react-router-dom';
import React, { useState } from "react";
import { Mapa } from '../components/Mapa';

export function Map() {
  const navigate = useNavigate();
  const [showMarkers, setShowMarkers] = useState(false);
  function gotoHome() {
    navigate("/home");
  }

  function toggleMarkers() {
    setShowMarkers((prevShowMarkers) => !prevShowMarkers);
    console.log("carrinhos")
    
  }


  return (
    <div className="bg" style={{ background: "none" }}>
      <div className="map-holder">
        <Mapa showCars={showMarkers} />
        <div className="box-mapa">
          <div className="item1" onClick={toggleMarkers}>
            <i className="fa-solid fa-car-burst" style={{ fontSize: "50px", paddingRight: "30px" }}></i>
            <span>Acidentes<br></br> Próximos</span>
          </div>
          <div className="item2">
            <button onClick={gotoHome}><i className="fa-solid fa-house"></i></button>
            <button><i className="fa-solid fa-car"></i></button>
            <button><i className="fa-solid fa-folder"></i></button>
            <button><i className="fa-solid fa-user"></i></button>
          </div>
        </div>
      </div>
    </div>
  );
}
