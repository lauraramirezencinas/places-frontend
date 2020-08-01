import React, { useState } from 'react'

function ImageContainer(props) {

    const [button, setButton] = useState(false);

    const divStyle = {
        width: '150px', 
        height: '150px',
        backgroundImage: `url(${props.image})`,
        backgroundSize: '150px 150px',
    }

    const buttonContent = !button ? 'Map' : 'Image'

    return (
        <div style={divStyle} className="d-flex flex-direction-column justify-content-center align-items-end">
            <button className="btn btn-info mb-2" onClick={() => setButton(!button)}>{buttonContent}</button>
        </div>
    )
}

export default ImageContainer
