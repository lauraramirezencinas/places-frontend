import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import UploadImage from '../uploadimage/UploadImage';
import SearchLocation from '../searchlocation/SearchLocation';
import GoogleMaps from 'google-map-react';
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
		locationName: '',
	};
	const [place, setPlace] = useState(initialState);
	const history = useHistory();

	const handleChange = ({ target }) => {
		setPlace((place) => ({
			...place,
			[target.name]: target.value,
		}));
	};
	const handleImageChange = (file) => {
		setPlace({ ...place, imageFile: file });
	};
	const handleLocationChange = (loc) => {
		setPlace({
			...place,
			loc: {
				type: 'Point',
				coordinates: [loc.geometry.location.lat, loc.geometry.location.lng],
			},
			locationName: loc.name,
		});
	};
	const handleSubmit = (event) => {
		event.preventDefault();
		const placeData = new FormData();
		placeData.append('name', place.name);
		placeData.append('description', place.description);
		placeData.append('imageUrl', place.imageFile);
		placeData.append('loc', place.loc);
		placeData.append('highlight', place.highlight);
		console.log(placeData);
		axios
			.post('http://localhost:5000/api/places', placeData, {
				headers: { 'content-type': 'multipart/form-data' },
			})
			.then(() => history.push('/list'));
	};
	const mapLatLng = {
		lat: place.loc.coordinates[0],
		lng: place.loc.coordinates[1],
	};
	const getMapOptions = (maps) => {
		return {
			disableDefaultUI: false,
			mapTypeControl: true,
			streetViewControl: true,
			styles: [
				{
					featureType: 'poi',
					elementType: 'labels',
					stylers: [{ visibility: 'on' }],
				},
			],
		};
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
				<div style={{ width: 600, height: 400 }}>
					<GoogleMaps
						key={place.locationName}
						bootstrapURLKeys={{
							key: 'AIzaSyDUxW4_fK6SjpKiby5Q31xyp_AXs-lREIY',
						}}
						defaultCenter={mapLatLng}
						defaultZoom={15}
						options={getMapOptions}
					></GoogleMaps>
				</div>
				<button className="btn btn btn-success mt-2">Add Place</button>
			</form>
		</div>
	);
}

export default AddPlace;
