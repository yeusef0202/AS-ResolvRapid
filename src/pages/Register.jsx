import { useNavigate } from 'react-router-dom';

export function Register() {
  const navigate = useNavigate();

  function gotoHome() {
    navigate('/home')
  }
  function gotoBegin() {
    navigate('/')
  }
  
    return ( 
        <div className="bg">
          <div className="home-holder">
            <div className="logo">
              <p className='logo-align'><span style={{fontSize:'35px'}}>RESOLV</span><br></br><span style={{fontFamily: 'postnobills'}}>RAPID</span></p>
            </div>
            <form action="" className="form-control" style={{flex:'1.45'}}>
              <input type="text" placeholder='Email' />
              <input type="password" placeholder='Password'/>
              <input type="password" placeholder='Confirm Password'/>      
              <button onClick={gotoHome}>Sign Up</button>
              <p className='login-text'>Already have an account yet?</p>
              <a onClick={gotoBegin}>Sign in to your account</a>
            </form>
          </div>
        </div>
     );
}
