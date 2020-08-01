<<<<<<< HEAD
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
=======
import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {Switch, Route} from "react-router-dom";
import Homepage from "./components/Homepage";
import NavigationBar from "./components/NavigationBar";
import Lista from './components/List/Lista'
import Admin from './components/Admin'

function App() {
	return (
		<div>
			<NavigationBar />
			<Switch>
				<Route exact path="/" render={(props) => <Homepage {...props} />} />
        <Route excat path="/list" component={Lista} />
        <Route exact path="/admin" render={(props) => <Admin {...props} />} />
			</Switch>
		</div>
  )
};

>>>>>>> e29497a6a738328f12c637fbd677a65f430423c6

export default App;
