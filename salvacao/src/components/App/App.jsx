import './App.css';
import React from 'react';
import { history } from './history'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Mapa from '../Pages/Mapa/Mapa';
import Home from '../Pages/Home/Home';
import Login from '../Pages/Login/Login';
import Profile from '../Pages/Profile/Profile';
import Cadastro from '../Pages/Cadastro/Cadastro';
import Pets from '../Pages/Pets/Pets';

const App = () => (
  
  <Router history={history}>
    <Navbar/>
    <Switch >
      <Route component={Home} exact path="/"/>
      <Route component={Mapa} exact path='/map'/>
      <Route component={Login} exact path="/login"/>
      <Route component={Profile} exact path="/profile"/>
      <Route component={Cadastro} exact path="/cadastro"/>
      <Route component={Pets} exact path="/pets" />
    </Switch>
  </Router>
    

)

export default App;
