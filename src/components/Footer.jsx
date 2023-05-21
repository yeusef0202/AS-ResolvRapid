import './footer.css';
import { useNavigate } from 'react-router-dom';


export function Footer() {
    const navigate = useNavigate();

    function gotoMapa() {
      navigate('/mapa')
    }
    function gotoCasos() {
      navigate('/casos')
    }
    function gotoHome() {
        navigate('/home')
    }
    function gotoCarros() {
      navigate('/carros')
    }
    function gotoPerfil() {
      navigate('/perfil')
    }

    return (
        <div className="footer-box">
            <button onClick={gotoHome}><i className="fa-solid fa-house"></i></button>
            <button onClick={gotoCarros}><i className="fa-solid fa-car"></i></button>
            <button onClick={gotoCasos}><i className="fa-solid fa-folder"></i></button>
            <button onClick={gotoPerfil}><i className="fa-solid fa-user"></i></button>
        </div>
    )
}