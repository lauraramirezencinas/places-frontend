import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {Switch, Route} from "react-router-dom";
import Homepage from "./components/Homepage";
import NavigationBar from "./components/NavigationBar";

function App() {
	return (
		<div>
			<NavigationBar />
			<Switch>
				<Route exact path="/" render={(props) => <Homepage {...props} />} />
			</Switch>
		</div>
	);
}

export default App;
