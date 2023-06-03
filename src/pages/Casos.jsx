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
    const storedCases = Cookies.get('cases');
    if (!storedCases) {
      // Example cases data
      const exampleCases = [
        {
          id: 1,
          occurrenceDate: '2023-06-01',
          location: 'Example Location 1',
          carro: 'Car 1',
          outroEnvolvido: '',
          description: 'Example Description 1',
          status: 'A decorrer',
        },
        {
          id: 2,
          occurrenceDate: '2023-06-02',
          location: 'Example Location 2',
          carro: 'Car 2',
          outroEnvolvido: '',
          description: 'Example Description 2',
          status: 'Resolvido',
        },
      ];
  
      Cookies.set('cases', JSON.stringify(exampleCases));
      setCases(exampleCases);
    } else {
      const parsedCases = JSON.parse(storedCases);
      setCases(parsedCases);
    }
  }, []);
  

  useEffect(() => {
    // Retrieve cases from cookies
    const storedCases = Cookies.get('cases');
    const parsedCases = storedCases ? JSON.parse(storedCases) : [];
    setCases(parsedCases);
  }, []);

  function gotoHome() {
    navigate('/home');
  }

  function gotoCasos() {
    navigate('/casos');
  }

  function gotoCaso1() {
    navigate('/casos/caso1');
  }

  function gotoNewCase() {
    navigate('/casos/novo');
  }

  function gotoCaso(id) {
    console.log( Cookies.get('cases'));
    console.log(Cookies.get('carros'))
    navigate(`/casos/caso/${id}`);
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
          <div className="title"><button onClick={gotoHome} style={{padding:'8px 10px', fontSize:'17px'}}><i className="fa-solid fa-left-long"></i> Voltar</button> Os meus casos:</div>
          <div className="cases">
            {cases.map((caseItem, index) => (
              <div className="case" key={index} onClick={() => gotoCaso(caseItem.id)} style={{fontSize:'17px', padding:'5px 5px'}}>
                Caso nº <b>{caseItem.id}</b> : {caseItem.occurrenceDate} - {caseItem.location}
              </div>
            ))}
          </div>
          <button onClick={gotoNewCase} style={{padding:'5px 28px', fontSize:'18px', fontWeight:'600'}}>Criar novo caso</button>
        </div>
        <Footer></Footer>
      </div>
    </div>
  );
}
