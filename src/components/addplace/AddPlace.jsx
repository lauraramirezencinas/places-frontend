import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import UploadImage from '../uploadimage/UploadImage';
import SearchLocation from '../searchlocation/SearchLocation';
function AddPlace() {
	const initialState = {
		name: '',
		description: '',
		imageUrl: '',
		loc: {
			type: 'Point',
			coordinates: [0, 0],
		},
		highlight: false,
		imageFile: null,
	};
	const [place, setPlace] = useState(initialState);
	const history = useHistory();

	const handleChange = ({ target }) => {
		setPlace((place) => ({
			...place,
			[target.name]: target.value,
		}));
	};
	console.log(place);
	const handleImageChange = (file) => {
		console.log(file);
		setPlace({ ...place, imageFile: file });
	};
	const handleLocationChange = (loc) => {
		console.log(loc);
		setPlace({
			...place,
			loc: {
				type: 'Point',
				coordinates: [loc.geometry.location.lat, loc.geometry.location.lng],
			},
		});
	};
	const handleSubmit = () => {
		axios
			.post('http://localhost:5000/api/places', place)
			.then(() => history.push('/list'));
	};
	return (
		<div className="container">
			<h1>Share your experience</h1>
			<form onSubmit={handleSubmit}>
				<div className="form-group">
					<label htmlFor="name">Name of place</label>
					<input
						type="text"
						className="form-control"
						name="name"
						id="name"
						value={place.name}
						onChange={handleChange}
						aria-describedby="helpId"
						placeholder="Name of place"
					/>
				</div>
				<div className="form-group">
					<label htmlFor="description">Description of place</label>
					<textarea
						rows="5"
						className="form-control"
						name="description"
						id="dscription"
						value={place.description}
						onChange={handleChange}
						placeholder="Description of place"
					></textarea>
				</div>
				<UploadImage handleImageChange={handleImageChange}></UploadImage>
				<SearchLocation
					handleLocationChange={handleLocationChange}
				></SearchLocation>
				<button className="btn btn btn-success">Add Place</button>
			</form>
		</div>
	);
}

export default AddPlace;
