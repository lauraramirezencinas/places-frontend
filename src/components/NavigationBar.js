import React from "react";
import {Navbar, Nav} from "react-bootstrap";

const NavigationBar = (props) => {
	return (
		<Navbar bg="dark" variant="dark">
			<Navbar.Brand href="/">
				<span className="lnr lnr-home"></span> Home
			</Navbar.Brand>
			<Nav className="mr-auto">
				<Nav.Link href="/list">
					<span className="lnr lnr-list"></span> List of Places
				</Nav.Link>
				<Nav.Link href="/add">
					<span className="lnr lnr-file-add"></span> Add Place
				</Nav.Link>
				<Nav.Link href="/search">
					<span className="lnr lnr-magnifier"></span> Search
				</Nav.Link>
				<Nav.Link href="/admin">
					<span className="lnr lnr-cog"></span> Admin
				</Nav.Link>
			</Nav>
		</Navbar>
	);
};

export default NavigationBar;
