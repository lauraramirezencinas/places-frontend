import React from "react";
import {Navbar, Nav} from "react-bootstrap";

const NavigationBar = () => {
	return (
		<Navbar bg="dark" variant="dark">
			<Navbar.Brand href="/">Home</Navbar.Brand>
			<Nav className="mr-auto">
				<Nav.Link href="/list">List of Places</Nav.Link>
				<Nav.Link href="/add">Add Place</Nav.Link>
				<Nav.Link href="/search">Search</Nav.Link>
				<Nav.Link href="/admin">Admin</Nav.Link>
			</Nav>
		</Navbar>
	);
};

export default NavigationBar;
