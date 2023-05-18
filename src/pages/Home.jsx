import './pages.css';
import './logged.css';
import { Footer } from '../components/Footer';

export function Home() {
    return (
        <div className="bg">
          <div className="holder">
            <div className="logo">
              <p className='logo-align'><span style={{fontSize:'35px'}}>RESOLV</span><br></br><span style={{fontFamily: 'postnobills'}}>RAPID</span></p>
            </div>
            <div className="middle" style={{color:'white'}}>
              <div className="menu">
                <div className="menu-item">Mapa</div>
                <div className="menu-item">Meus Casos</div>
                <div className="menu-item">Meus Veículos</div>
                <div className="menu-item">Detalhes da Conta</div>
              </div>
            </div>
            <Footer />
            </div>
        </div>
    )
}