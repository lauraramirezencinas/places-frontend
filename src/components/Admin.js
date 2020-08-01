import React, { Component } from 'react'
import axios from 'axios'

export default class Admin extends Component {

    constructor(props) {
        super(props)
        this.state = {
            places: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:5000/api/places')
        .then(res => {
            const places = res.data.map(place => ({...place, edit: false}))
            this.setState(state => ({...state, places}))
        })
        .catch(e => console.log(`Error when getting the places from admin --> ${e}`))
    }

    delete = id => {
        axios.delete(`http://localhost:5000/api/places/${id}`)
        .then()         
        .catch(e => console.log(`Error when getting deleting a place from admin --> ${e}`))
    }
    
    toggleStatus = id => {
        const places = this.state.places.map(place => {
            const currentPlace = place._id === id
            const toggleEdit = currentPlace ? !place.edit : place.edit
            return {
               ...place,
               edit: toggleEdit
            }
        })
        this.setState(state => ({...state, places}))
    }

    render() {

    const myPlaces = this.state.places.map(place => 
        <div key={place._id} className='pl-5 pt-5'>
            <h2>{place.name}</h2>
            <h3>{place.description}</h3>
            <button className='btn btn-danger' onClick={() => this.delete(place._id)}>Remove</button>
            <button className='btn btn-primary' onClick={() => this.toggleStatus(place._id)}>Edit</button>
            {place.edit && <p>Edit Form</p>}           
        </div>
    )

        return (
            <div>
                <h1 style={{textAlign: "center"}}>Manage Your Places</h1>
                {myPlaces}
            </div>
        )
    }
}
