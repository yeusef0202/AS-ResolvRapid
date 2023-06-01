import './pages.css';
import './logged.css';
import './Casos.css';
import { Footer } from '../components/Footer';
import { useNavigate } from 'react-router-dom';

export function NewCase() {
    const navigate = useNavigate();

    function gotoHome() {
        navigate('/home')
      }

    return (
        <div className="bg">
            <div className="holder">
                <div className="logo" onClick={gotoHome}>
                <p className='logo-align'><span style={{fontSize:'35px'}}>RESOLV</span><br></br><span style={{fontFamily: 'postnobills'}}>RAPID</span></p>
                </div>
                <div className="middle casos-holder" style={{color:'white', display:'flex', flexDirection:'column', marginTop:'20px'}}>
                    <form action="">
                        <input type="text" name="" id="Carro1" className='forms-newcase-input' placeholder='Carro 1 (meu carro):' />
                        <div className="divider-form" style={{textAlign:'left'}}>
                            <label htmlFor="" style={{fontSize:'18px'}}>Houve outro carro envolvido?</label>
                            <input type="checkbox" name="" id="" style={{width:'20px',height:'16px'}} />
                        </div>
                        <button className='localizacao-buttons 2Carro'>Adicionar o 2º carro</button>
                        <div className="divider-form" style={{display:'flex',gap:'10px'}}>
                            <button className='localizacao-buttons'><i class="fa-solid fa-map-pin"></i> Localização manual</button>
                            <button className='localizacao-buttons'><i class="fa-solid fa-location-dot"></i> Localização Automática</button>
                        </div>
                    </form>
                </div>
                <Footer></Footer>
            </div>
        </div>
    )
}