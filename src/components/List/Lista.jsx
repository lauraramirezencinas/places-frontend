import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Card from './Card'

function Lista() {

    const place = [
        {
            title: 'random title',
            description: 'description test',
            imageUrl: 'https://res.cloudinary.com/dkejgwlha/image/upload/v1596268173/lypqcmgvpyds6a2nzskc.png',
        },
        {
            title: 'random title2',
            description: 'description test1',
            imageUrl: 'https://res.cloudinary.com/dkejgwlha/image/upload/v1596268173/lypqcmgvpyds6a2nzskc.png',
        }
    ]

    const [places, setPlaces] = useState(place)

    // useEffect(() => {
    //     // axios.get('http://localhost:5000/api/places')
    //     //     .then(({data}) => setPlaces(data))
    //     setPlaces(place)
    // }, [])

    const renderCards = places.map(place => (
            <Card place={place}/>
    ))
    //places.map(e => console.log(e))

    return (
        <div>
            <h1>Places I have been</h1>
            <div className="d-flex mx-5 container-fluid flex-column">
                {renderCards}
            </div>
            
        </div>
    )
}

export default Lista
