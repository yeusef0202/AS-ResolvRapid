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
  function logout() {
    navigate('/')
  }
    return (
        <div className="bg">
            <div className="holder-perfil">
                <div className='perfil-box'>
                    <div className="topo-perfil">
                        <div className="logo" style={{fontFamily: 'postnobills'}}><b>Resolv</b>Rapid</div>
                        <div className="botao-opcoes"><i className="fa-solid fa-gear"></i></div>
                    </div>
                    <div className="foto-perfil">
                        <img src="https://i.imgur.com/cfpvbq2.jpeg" alt="" />
                    </div>
                    <div className="perfil-nome">
                        <span style={{fontSize:'14px'}}>Utilizador:</span><br></br>
                        <span style={{fontSize:'24px', fontWeight:'600'}}>João Miguel</span>
                    </div>
                    <div className="perfil-infos">
                        <div className="item-perfil">
                            Nº de acidentes:<br></br><span>54</span>
                        </div>
                        <div className="item-perfil">
                            Casos:<br></br><span>10</span>
                        </div>
                        <div className="item-perfil">
                            Veículos:<br></br><span>3</span>
                        </div>
                    </div>
                    <div className="contatos">
                        <div className="item-contato" style={{fontWeight:'bold'}}>Telefone</div>
                        <div className="item-contato">+351 96 xxx xx xx</div>
                        <div className="item-contato" style={{fontWeight:'bold'}}>Email</div>
                        <div className="item-contato">Loremipsum@gmail.com</div>
                        <div className="item-contato" style={{fontWeight:'bold'}}>Línguas</div>
                        <div className="item-contato">Português, Inglês</div>
                    </div>
                    <div className="logout">
                        <button onClick={logout}>Log Out</button>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    )
}