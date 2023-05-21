import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { Footer } from '../components/Footer';
import { useNavigate } from 'react-router-dom';

import './carros.css';


export function CarPage() {
  const navigate = useNavigate();

  function gotoQR() {
    navigate('/QR')
  }

  const { id } = useParams();
  const [carro, setCarro] = useState('');

  useEffect(() => {
    // Retrieve carros from cookies
    const storedCarros = Cookies.get('carros');
    const parsedCarros = storedCarros ? JSON.parse(storedCarros) : [];
    
    // Retrieve the specific car based on the id
    const selectedCarro = parsedCarros[id] || '';
    setCarro(selectedCarro);
  }, [id]);

  return (
    <div className="bg">
      <div className="holder-carros">
        <div className="carrinho">
        <div className="logo" style={{ fontFamily: 'postnobills', fontSize: '55px', margin: '20px 0px',fontWeight:'400' }}><b>Resolv</b>Rapid</div>
          <div className="infos">
            <div className="info-item"><span style={{fontWeight:'600'}}>Matrícula:</span> {carro.matricula}</div>
            <div className="info-item"><span style={{fontWeight:'600'}}>Marca:</span> {carro.marca}</div>
            <div className="info-item"><span style={{fontWeight:'600'}}>Modelo: </span>{carro.modelo}</div>
            <div className="info-item"><span style={{fontWeight:'600'}}>Pais:</span> {carro.pais}</div>
            <div className="info-item"><span style={{fontWeight:'600'}}>Apólice:</span> {carro.apolice}</div>
          </div>
          <div className='botao-para-qr'>
            <button onClick={gotoQR}>Transferir informações</button>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
