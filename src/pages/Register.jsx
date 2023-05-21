export function Register() {
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
              <button>Sign Up</button>
              <p className='login-text'>Already have an account yet?</p>
              <a href='/'>Sign in to your account</a>
            </form>
          </div>
        </div>
     );
}