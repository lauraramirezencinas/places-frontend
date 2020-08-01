import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom'
import Homepage from './components/Homepage';
import Navbar from './components/Navbar';
import EditPlace from './components/EditPlace';
import PlaceDetails from './components/PlaceDetails';



function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" render={(props) => <Homepage {...props} />} />
        <Route path='/place/:id/edit' render={(props) => <EditPlace {...props}/>}/>
        <Route path='/place/:id' render={(props) => <PlaceDetails {...props}/>}/>
      </Switch>
    </div>
  );
}

export default App;
