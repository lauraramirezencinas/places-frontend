import React from "react";
import {Container, Row, Col, Jumbotron} from "react-bootstrap";
import HomepageHighlights from "./HomepageHighlights";

const Homepage = () => {
	return (
		<div>
			<header>
				<Jumbotron fluid>
					<Container>
						<Row>
							<Col lg={12}>
								<h1 className="text-center">Ironhackers around the world!</h1>
							</Col>
						</Row>
					</Container>
				</Jumbotron>
			</header>
			<section>
				<HomepageHighlights maxPlaces={3} />
			</section>
		</div>
	);
};

export default Homepage;
