import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import NavigationBar from './components/NavigationBar';
import Lista from './components/List/Lista';
import Admin from './components/Admin';
import AddPlace from './components/addplace/AddPlace';
import EditPlace from './components/EditPlace';
import PlaceDetails from './components/PlaceDetails';

function App() {
	return (
		<div>
			<NavigationBar />
			<Switch>
				<Route exact path="/" render={(props) => <Homepage {...props} />} />
				<Route excat path="/list" component={Lista} />
				<Route exact path="/add" component={AddPlace} />
				<Route exact path="/admin" render={(props) => <Admin {...props} />} />
			</Switch>
		</div>
	);
}

export default App;
