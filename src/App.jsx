import './App.css';
import { Routes, Route } from 'react-router-dom';
import { SignIn } from './pages/SignIn';
import  { Register } from './pages/Register';
import  { Home } from './pages/Home';
import { Map } from './pages/Map';
import { Casos } from './pages/Casos';

import { Caso1 } from './cases/Caso1';


function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={<SignIn />} />
        <Route path='/register' element={<Register />} />
        <Route path='/home' element={<Home />} />
        <Route path='/mapa' element={<Map />} />
        <Route path='/casos' element={<Casos />} />
        <Route path='/casos/Caso1' element={<Caso1 />} />

      </Routes>

    </div>
  )
}

export default App
