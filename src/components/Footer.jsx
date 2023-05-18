import './footer.css';
import { useNavigate } from 'react-router-dom';


export function Footer() {
    const navigate = useNavigate();

    function gotoMapa() {
      navigate('/')
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
        <div className="footer-box">
            <button><i class="fa-solid fa-house"></i></button>
            <button ><i class="fa-solid fa-car"></i></button>
            <button><i class="fa-solid fa-folder"></i></button>
            <button><i class="fa-solid fa-user"></i></button>
        </div>
    )
}