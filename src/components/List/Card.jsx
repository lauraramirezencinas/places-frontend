import React from 'react'
import ImageContainer from './ImageContainer'

function Card(props) {

    const {imageUrl, title, description} = props.place

    return (
        <div className="d-flex container-fluid">
            <ImageContainer image={imageUrl}/>
            <div className="d-flex container flex-column">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default Card
