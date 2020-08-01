import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddPlace from './components/addplace/AddPlace';

function App() {
	return (
		<div>
			<Navbar />
			<Switch>
				<Route exact path="/" render={(props) => <Homepage {...props} />} />
				<Route exact path="/add" component={AddPlace} />
			</Switch>
		</div>
	);
}

export default App;
