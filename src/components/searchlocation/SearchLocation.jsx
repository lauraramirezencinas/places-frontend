import React, { useState } from 'react';
import axios from 'axios';
function SearchLocation(props) {
	const initialState = {
		search: '',
		resultSearch: [],
		location: {},
		searching: false,
	};
	const [location, setLocation] = useState(initialState);
	const handleChange = ({ target }) => {
		setLocation({ ...location, [target.name]: target.value });
	};
	const handleSearch = (event) => {
		event.preventDefault();
		axios
			.get('http://localhost:5000/api/address?search=' + location.search)
			.then((response) => {
				console.log(response.data);
				setLocation({ ...location, resultSearch: response.data.candidates });
			});
	};
	const handleLocationSelect = (loc) => {
		console.log(loc);
		setLocation((location) => ({
			...location,
			location: loc,
		}));
		props.handleLocationChange(loc);
	};
	const searchResultList = location.resultSearch.map((loc) => (
		<li key={loc.place_id} className="list-group-item">
			<div className="input-group">
				<div className="input-group-prepend">
					<div className="input-group-text">
						<input
							type="radio"
							aria-label="Radio button for following text input"
							name="location"
							onClick={() => handleLocationSelect(loc)}
						/>
					</div>
				</div>
				<input
					type="text"
					className="form-control"
					aria-label="Text input with radio button"
					value={loc.name + ' (' + loc.formatted_address + ')'}
					readOnly
				/>
			</div>
		</li>
	));
	return (
		<>
			<label htmlFor="search">Seach Location</label>
			<div className="input-group mb-3">
				<input
					type="text"
					className="form-control"
					placeholder="Search location"
					aria-label="Search location"
					aria-describedby="basic-addon2"
					name="search"
					id="search"
					value={location.search}
					onChange={handleChange}
				/>
				<div className="input-group-append">
					<button
						className="btn btn-primary"
						onClick={handleSearch}
						type="button"
					>
						Search location
					</button>
				</div>
			</div>
			<ul className="list-group">{searchResultList}</ul>
		</>
	);
}

export default SearchLocation;
