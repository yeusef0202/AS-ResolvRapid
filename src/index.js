import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import CarPage from './views/car-page'
import MainMenu from './views/main-menu'
import CarMaker from './views/car-maker'
import CasePage from './views/case-page'
import CaseMaker from './views/case-maker'
import LoginPage from './views/login-page'
import RegisterPage from './views/register-page'

const App = () => {
  return (
    <Router>
      <div>
        <Route component={CarPage} exact path="/car-page" />
        <Route component={MainMenu} exact path="/main-menu" />
        <Route component={CarMaker} exact path="/car-maker" />
        <Route component={CasePage} exact path="/case-page" />
        <Route component={CaseMaker} exact path="/case-maker" />
        <Route component={LoginPage} exact path="/" />
        <Route component={RegisterPage} exact path="/register-page" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
