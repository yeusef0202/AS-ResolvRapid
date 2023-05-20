import './pages.css';
import './logged.css';
import { Footer } from '../components/Footer';
import { useNavigate } from 'react-router-dom';
import './perfil.css';

export function Perfil() {
  const navigate = useNavigate();

  function gotoHome() {
    navigate('/home')
  }
  function gotoMapa() {
    navigate('/mapa')
  }
  function gotoCasos() {
    navigate('/casos')
  }
  function gotoConta() {
    navigate('/register')
  }
    return (
        <div className="bg">
            <div className="holder-perfil">
                <div className='perfil-box'>
                    <div className="topo-perfil">
                        <div className="logo" style={{fontFamily: 'postnobills'}}><b>Resolv</b>Rapid</div>
                        <div className="botao-opcoes"><i class="fa-solid fa-gear"></i></div>
                    </div>
                    <div className="foto-perfil">
                        <img src="https://i.imgur.com/cfpvbq2.jpeg" alt="" />
                    </div>
                    <div className="perfil-nome">
                        <span style={{fontSize:'14px'}}>Utilizador:</span><br></br>
                        <span style={{fontSize:'24px', fontWeight:'600'}}>João Miguel</span>
                    </div>
                    <div className="perfil-infos">
                        
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    )
}