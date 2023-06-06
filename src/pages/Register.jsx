import { useState } from 'react';
import './pages.css';
import { useNavigate } from 'react-router-dom';

export function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const navigate = useNavigate();

  function handleEmailChange(event) {
    setEmail(event.target.value);
   
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);

  }

  function handleConfirmPasswordChange(event) {
    setConfirmPassword(event.target.value);
    
  }

  function gotoRegister() {
    navigate('/register')
  }
  
  function gotoLogin() {
    navigate('/')
  }

  function handleSubmit(event) {
    event.preventDefault();

    if(!(email.includes('@') && email.includes('.'))){
      console.log('Invalid email.');
      alert('Invalid email.');
      return;
    }

  
    if (password !== confirmPassword) {
      console.log('Passwords do not match.');
      alert('Passwords do not match.');
      return;
    }
  
    alert('Account created successfully!');
    // Store the registered email in localStorage
    localStorage.setItem('registeredEmail', email);
    localStorage.setItem('registeredPassword', password);
    gotoLogin();


    // Reset the form
    setEmail('');
    setPassword('');
  }
  

  return (
    <div className="bg">
      <div className="home-holder">
        <div className="logo">
          <p className='logo-align'>
            <span style={{ fontSize: '35px' }}>RESOLV</span>
            <br></br>
            <span style={{ fontFamily: 'postnobills' }}>RAPID</span>
          </p>
        </div>
        <form onSubmit={handleSubmit} className="form-control" style={{ flex: '1.45' }}>
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
          <input
            type="password"
            placeholder='Confirm Password'
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
          />
          <button type="submit">Sign Up</button>
          <p className='login-text'>Already have an account yet?</p>
          <a onClick={gotoLogin}>Sign in to your account</a>
        </form>
      </div>
    </div>
  );
}
