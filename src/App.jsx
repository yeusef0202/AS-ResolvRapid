import './App.css';
import { Routes, Route } from 'react-router-dom';
import { SignIn } from './pages/SignIn';
import  { Register } from './pages/Register';
import  { Home } from './pages/Home';
import { Map } from './pages/Map';


function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={<SignIn />} />
        <Route path='/register' element={<Register />} />
        <Route path='/home' element={<Home />} />
        <Route path='/mapa' element={<Map />} />
      </Routes>

    </div>
  )
}

export default App
