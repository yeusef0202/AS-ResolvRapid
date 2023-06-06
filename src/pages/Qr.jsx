import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { Footer } from '../components/Footer';
import './carros.css';


export function Qr() {
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
          <div className="qr-code">
            <img src="https://i.imgur.com/kb94CGv.jpg" alt="" />
          </div>
          <div className="codigo">V5MBZ-BLCKB-7Y5HC</div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
