import '../pages/pages.css';
import '../pages/logged.css';
import '../pages/Casos.css';
import { Footer } from '../components/Footer';
import { useNavigate } from 'react-router-dom';

export function Caso1() {
  const navigate = useNavigate();

  function gotoHome() {
    navigate('/home')
  }
  function gotoMapa() {
    navigate('/mapa')
  }
  function gotoCasos() {
    navigate('/register')
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
                    <div className="title-case">Caso: 21/03/23</div>
                    <div className="case-box">
                        <div className="item-case">Estado: XXX</div>
                        <div className="item-case">Carro: Alfa R - 8C</div>
                        <div className="item-case">Seguradora: SAFE.INC</div>
                        <div className="item-case">Nº Apolice: 1657283</div>
                        <div className="item-case">Comentários: Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam architecto adipisci nihil ducimus voluptatem eligendi voluptas!</div>
                    </div>
                    <button style={{backgroundColor:'#961515', color:'#000', fontSize:'18px'}}>Eliminar caso</button>
                </div>
                <Footer></Footer>
            </div>
        </div>
    )
}