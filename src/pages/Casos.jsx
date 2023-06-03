import './pages.css';
import './logged.css';
import './Casos.css';
import { Footer } from '../components/Footer';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';

export function Casos() {
  const navigate = useNavigate();
  const [cases, setCases] = useState([]);

  useEffect(() => {
    // Retrieve cases from cookies
    const storedCases = Cookies.get('cases');
    const parsedCases = storedCases ? JSON.parse(storedCases) : [];
    setCases(parsedCases);
  }, []);

  function gotoHome() {
    navigate('/home');
  }

  function gotoMapa() {
    navigate('/mapa');
  }

  function gotoCaso1() {
    navigate('/casos/caso1');
  }

  function gotoNewCase() {
    navigate('/casos/novo');
  }

  return (
    <div className="bg">
      <div className="holder">
        <div className="logo" onClick={gotoHome}>
          <p className="logo-align">
            <span style={{ fontSize: '35px' }}>RESOLV</span>
            <br />
            <span style={{ fontFamily: 'postnobills' }}>RAPID</span>
          </p>
        </div>
        <div className="middle casos-holder" style={{ color: 'white' }}>
          <div className="title">Os meus casos:</div>
          <div className="cases">
            {cases.map((caseItem, index) => (
              <div className="case" key={index} onClick={gotoCaso1}>
                {caseItem.location}
              </div>
            ))}
          </div>
          <button onClick={gotoNewCase}>Criar novo caso</button>
        </div>
        <Footer></Footer>
      </div>
    </div>
  );
}
