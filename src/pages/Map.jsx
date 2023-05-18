import './pages.css';
import './logged.css';
import { Footer } from '../components/Footer';
import { useNavigate } from 'react-router-dom';
import React, { useState } from "react";
import { Mapa } from '../components/Mapa';


export function Map() {

    const navigate = useNavigate();

    function gotoHome() {
      navigate('/home')
    }

    function gotoMapa() {
      navigate('/mapa')
    }
    function gotoCasos() {
      navigate('/register')
    }
    function gotoMapa() {
        navigate('/')
    }
    function gotoConta() {
      navigate('/register')
    }
    return (
        <div className="bg" style={{background:'none'}}>
            <div className="map-holder">
                <Mapa></Mapa>
                <div className="caralho" >
                    <div className="item">
                        <i className="fa-solid fa-car-burst" style={{fontSize:'50px', paddingRight:'30px'}}></i>
                        <span>Acidentes<br></br> Próximos</span>
                    </div>
                    <div className="item2"></div>
                </div>
            </div>
        </div>
    )
}