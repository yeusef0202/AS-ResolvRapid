import './pages.css';
import './logged.css';
import { Footer } from '../components/Footer';
import { useNavigate, Link } from 'react-router-dom';
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
    let parsedCarros = storedCarros ? JSON.parse(storedCarros) : [];

    // Check if carros have been stored before
    if (parsedCarros.length === 0) {
      // Set default carros
      const defaultCarros = [
        {
          matricula: 'AB-123-CD',
          marca: 'Ford',
          modelo: 'Fiesta',
          pais: 'Portugal',
          apolice: '123456789',
        },
        {
          matricula: 'XY-987-ZW',
          marca: 'Volkswagen',
          modelo: 'Golf',
          pais: 'Alemanha',
          apolice: '987654321',
        },
      ];

      parsedCarros = defaultCarros;

      // Store default carros in cookies
      Cookies.set('carros', JSON.stringify(defaultCarros));
    }

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
              <Link to={`/carros/${index}`} key={index} className="carro">{carro.marca}: {carro.matricula}</Link>
            ))}
          </div>
          <button onClick={adicionar}>Adicionar Veículo</button>
        </div>
        <Footer />
      </div>
    </div>
  );
}
