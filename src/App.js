import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom'
import Homepage from './components/Homepage';
import Navbar from './components/Navbar';
import Lista from './components/List/Lista'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {


  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" render={(props) => <Homepage {...props} />} />
        <Route excat path="/list" component={Lista} />
      </Switch>
      
    </div>
  );
}

export default App;
