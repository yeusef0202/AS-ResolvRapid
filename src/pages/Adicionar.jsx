import './pages.css';
import './logged.css';
import { Footer } from '../components/Footer';
import './carros.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

export function Adicionar() {
  const navigate = useNavigate();
  const [matricula, setMatricula] = useState('');
  const [marca, setMarca] = useState('');
  const [modelo, setModelo] = useState('');

  function handleSubmit(event) {
    event.preventDefault();

    // Create a new car string with the provided data
    const newCarro = `Carro ${marca} ${modelo} ${matricula}`;

    // Retrieve the existing carros from cookies
    const storedCarros = Cookies.get('carros');
    const parsedCarros = storedCarros ? JSON.parse(storedCarros) : [];

    // Add the new car to the array
    parsedCarros.push(newCarro);

    // Store the updated carros array in cookies
    Cookies.set('carros', JSON.stringify(parsedCarros));

    // Reset the form fields
    setMatricula('');
    setMarca('');
    setModelo('');

    // Redirect to the Carros page
    navigate('/carros');
  }

  return (
    <div className="bg">
      <div className="holder-carros">
        <div className="carros">
          <div className="logo" style={{ fontFamily: 'postnobills', fontSize: '55px', margin: '20px 0px' }}><b>Resolv</b>Rapid</div>
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Matrícula:" value={matricula} onChange={e => setMatricula(e.target.value)} />
            <input type="text" placeholder="Marca:" value={marca} onChange={e => setMarca(e.target.value)} />
            <input type="text" placeholder="Modelo:" value={modelo} onChange={e => setModelo(e.target.value)} />
            {/* Add more input fields for other car details if needed */}
            <button type="submit" style={{ marginTop: '20px' }}>Adicionar</button>
          </form>
        </div>
        <Footer />
      </div>
    </div>
  );
}
