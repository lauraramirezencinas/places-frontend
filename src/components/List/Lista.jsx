import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Card from './Card'

function Lista() {

    const [places, setPlaces] = useState('')

    useEffect(() => {
        axios.get('http://localhost:5000/api/places')
            .then(({data}) => setPlaces(data))
    }, [])

    const place = {
        title: 'random title',
        description: 'description test',
        imageUrl: 'https://res.cloudinary.com/dkejgwlha/image/upload/v1596268173/lypqcmgvpyds6a2nzskc.png',
    }

    return (
        <div>
            <h1>Places I have been</h1>
            <div className="d-flex mx-5 container-fluid">
                <Card 
                    place={place}
                />
            </div>
            
        </div>
    )
}

export default Lista
