
import React from 'react';
import './App.css';
import Navbar from './Component/Navbar';
import Home from './Component/Pag/Home';
import Services from './Component/Pag/Services';
import Products from './Component/Pag/Products';
import SignUp from './Component/Pag/SignUp';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'



function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path='/Services' component={Services} />
        <Route path='/Products' component={Products} />
        <Route path='/Sign-Up' component={SignUp} />
      </Switch>
      </Router>
    </>
  );
}

export default App;
