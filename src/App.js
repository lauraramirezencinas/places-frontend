import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {Switch, Route} from "react-router-dom";
import Homepage from "./components/Homepage";
import NavigationBar from "./components/NavigationBar";
import Lista from './components/List/Lista'

function App() {
	return (
		<div>
			<NavigationBar />
			<Switch>
				<Route exact path="/" render={(props) => <Homepage {...props} />} />
        <Route excat path="/list" component={Lista} />
			</Switch>
		</div>
  )
};

export default App;
