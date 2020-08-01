import React, {useState, useEffect} from "react";
import HighlightCard from "./HighlightCard";
import {Container, Row, Col} from "react-bootstrap";
import api from "../services/api";

const HomepageHighlights = ({maxPlaces}) => {
	const initialState = {
		highlightedPlaces: [],
	};
	const [state, setState] = useState(initialState);

	const getHighligthedPlaces = () => {
		const getUlr = "/highlights?quantity=" + maxPlaces;
		api.highlights.get(getUlr).then((res) => {
			setState({...state, highlightedPlaces: res.data});
		});
	};

	useEffect(getHighligthedPlaces, []);

	const highlightedPlacesList = state.highlightedPlaces.map((place) => (
		<HighlightCard imageUrl={place.imageUrl} />
	));

	return (
		<Container>
			<Row>
				<Col lg={12}>
					<h2 className="text-center">Highlighted Places</h2>
					<div className="d-flex">{highlightedPlacesList}</div>
				</Col>
			</Row>
		</Container>
	);
};

export default HomepageHighlights;
