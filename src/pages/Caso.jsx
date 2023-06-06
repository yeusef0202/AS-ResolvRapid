// Caso.js

import '../pages/pages.css';
import '../pages/logged.css';
import '../pages/Casos.css';
import { Footer } from '../components/Footer';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';

export function Caso() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [caseData, setCaseData] = useState(null);

  useEffect(() => {
    const storedCases = Cookies.get('cases');
    const parsedCases = storedCases ? JSON.parse(storedCases) : [];
    const matchedCase = parsedCases.find((caseItem) => caseItem.id === Number(id));

    if (matchedCase) {
      setCaseData(matchedCase);
    } else {
      console.error(`Case with ID ${id} not found.`);
    }
  }, [id]);

  function deleteCase() {
    const storedCases = Cookies.get('cases');
    const parsedCases = storedCases ? JSON.parse(storedCases) : [];
    const updatedCases = parsedCases.filter((caseItem) => caseItem.id !== Number(id));
    Cookies.set('cases', JSON.stringify(updatedCases));
    navigate('/casos');
  }

  function gotoHome() {
    navigate('/home');
  }

  if (!caseData) {
    return <div>Loading...</div>;
  }

  function getStatusColor(status) {
    switch (status) {
      case 'A decorrer':
        return 'yellow';
      case 'Resolvido':
        return 'green';
      case 'Fechado':
        return 'red';
      default:
        return 'transparent';
    }
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
          <div className="title-case">Caso: {id}</div>
          <div className="case-box">
            <div className="item-case">
              Estado: <span style={{ backgroundColor: getStatusColor(caseData.status), borderRadius: '10px', padding: '0px 10px' }}>{caseData.status}</span>
            </div>
            <div className="item-case">Carro: {caseData.carro}</div>
            <div className="item-case">Seguradora: SAFE.INC</div>
            <div className="item-case">Nº Apolice: 3213121</div>
            <div className="item-case">Descrição: {caseData.description}</div>
          </div>
          <button onClick={deleteCase} style={{ backgroundColor: '#961515', color: '#000', fontSize: '18px' }}>
            Eliminar caso
          </button>
        </div>
        <Footer></Footer>
      </div>
    </div>
  );
}
