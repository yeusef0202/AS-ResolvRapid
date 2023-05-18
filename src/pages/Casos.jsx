import './pages.css';
import './logged.css';
import './Casos.css';
import { Footer } from '../components/Footer';
import { useNavigate } from 'react-router-dom';

export function Casos() {
  const navigate = useNavigate();

  function gotoHome() {
    navigate('/home')
  }
  function gotoMapa() {
    navigate('/mapa')
  }
  function gotoCaso1() {
    navigate('/casos/caso1')
  }
  function gotoConta() {
    navigate('/register')
  }
    return (
        <div className="bg">
            <div className="holder">
                <div className="logo" onClick={gotoHome}>
                <p className='logo-align'><span style={{fontSize:'35px'}}>RESOLV</span><br></br><span style={{fontFamily: 'postnobills'}}>RAPID</span></p>
                </div>
                <div className="middle casos-holder" style={{color:'white'}}>
                    <div className="title">Os meus casos:</div>
                    <div className="cases">
                        <div className="case" onClick={gotoCaso1}>Caso: 21/03/23</div>
                        <div className="case">Caso: 11/01/23</div>
                        <div className="case">Caso: 05/11/22</div>
                        <div className="case">Caso: 02/2/22</div>
                    </div>
                    <button>Criar novo caso</button>
                </div>
                <Footer></Footer>
            </div>
        </div>
    )
}