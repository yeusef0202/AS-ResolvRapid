import './pages.css';
import { useNavigate } from 'react-router-dom';

export function SignIn() {
  const navigate = useNavigate();

  function gotoHome() {
    navigate('/home')
  }

    return (
        <div className="bg">
          <div className="home-holder">
            <div className="logo">
              <p className='logo-align'><span style={{fontSize:'35px'}}>RESOLV</span><br></br><span style={{fontFamily: 'postnobills'}}>RAPID</span></p>
            </div>
            <form action="" className="form-control">
              <input type="text" placeholder='Email' />
              <input type="password" placeholder='Password'/>
              <button onClick={gotoHome}>Log in</button>
              <p className='login-text'>Don't have an account yet?</p>
              <a href='/register'>Create an account</a>
            </form>
          </div>
        </div>
    )
}