import React, { useState } from 'react';
import './pages.css';
import { useNavigate } from 'react-router-dom';

export function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }

  function gotoRegister() {
    navigate('/register')
  }
  

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  function gotoHome(event) {
    event.preventDefault();

    // Retrieve the registered email from localStorage
    const registeredEmail = localStorage.getItem('registeredEmail');
    const registeredPassword = localStorage.getItem('registeredPassword');

    // Perform authentication logic using the retrieved email
    if (email === registeredEmail && password === registeredPassword) {
      // Reset the form
      setEmail('');
      setPassword('');
      alert('Logged in successfully!');

      // Navigate to the home page
      navigate('/home');
    } else {
      alert('Invalid email or password');
    }
  }

  return (
    <div className="bg">
      <div className="home-holder">
        <div className="logo">
          <p className='logo-align'><span style={{ fontSize: '35px' }}>RESOLV</span><br></br><span style={{ fontFamily: 'postnobills' }}>RAPID</span></p>
        </div>
        <form action="" className="form-control">
          <input
            type="text"
            placeholder='Email'
            value={email}
            onChange={handleEmailChange}
          />
          <input
            type="password"
            placeholder='Password'
            value={password}
            onChange={handlePasswordChange}
          />
          <button onClick={gotoHome}>Log in</button>
          <p className='login-text'>Don't have an account yet?</p>
          <a href='' onClick={gotoRegister}>Create an account</a>
        </form>
      </div>
    </div>
  );
}

// Example authentication logic
function authenticateUser(email, password) {
  // Replace with your own authentication logic
  const validEmail = 'example@example.com';
  const validPassword = 'password';

  return email === validEmail && password === validPassword;
}
