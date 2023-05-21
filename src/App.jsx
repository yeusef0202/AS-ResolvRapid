import './App.css';
import { Routes, Route } from 'react-router-dom';
import { SignIn } from './pages/SignIn';
import  { Register } from './pages/Register';
import  { Home } from './pages/Home';
import { Map } from './pages/Map';
import { Casos } from './pages/Casos';
import { Caso1 } from './cases/Caso1';
import { Perfil } from './pages/Perfil';
import { Carros } from './pages/Carros';
import { Adicionar } from './pages/Adicionar';

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
        <Route path='/perfil' element={<Perfil />} />
        <Route path='/carros' element={<Carros></Carros>}></Route>
        <Route path='/carros/adicionar' element={<Adicionar></Adicionar>}></Route>
      </Routes>

    </div>
  )
}

export default App
