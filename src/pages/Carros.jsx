import './pages.css';
import './logged.css';
import { Footer } from '../components/Footer';
import { useNavigate } from 'react-router-dom';
import './carros.css';
import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';

export function Carros() {
  const navigate = useNavigate();
  const [carrosLista, setCarrosLista] = useState([]);

  function adicionar() {
    navigate('/carros/adicionar');
  }

  useEffect(() => {
    // Retrieve carros from cookies
    const storedCarros = Cookies.get('carros');
    const parsedCarros = storedCarros ? JSON.parse(storedCarros) : [];
    setCarrosLista(parsedCarros);
  }, []);

  return (
    <div className="bg">
      <div className="holder-carros">
        <div className="carros">
          <div className="logo" style={{ fontFamily: 'postnobills', fontSize: '55px', margin: '20px 0px' }}><b>Resolv</b>Rapid</div>
          <div className="title">Os meus carros:</div>
          <div className="carros-lista">
            {carrosLista.map((carro, index) => (
              <div className="carro" key={index}>{carro}</div>
            ))}
          </div>
          <button onClick={adicionar}>Adicionar Veículo</button>
        </div>
        <Footer />
      </div>
    </div>
  );
}
