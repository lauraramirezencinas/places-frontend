import React from 'react';

function UploadImage(props) {
	const handleChange = (event) => {
		props.handleImageChange(event.target.files[0]);
	};
	return (
		<div className="form-group">
			<label htmlFor="image">Image</label>
			<input
				type="file"
				className="form-control"
				name="imageUrl"
				id="imageUrl"
				onChange={handleChange}
			/>
		</div>
	);
}

export default UploadImage;
