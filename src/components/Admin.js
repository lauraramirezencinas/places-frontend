import React, { Component } from 'react'
import axios from 'axios'

export default class Admin extends Component {

    constructor(props) {
        super(props)
        this.state = {
            places: [],
            edit: false
        }
    }

    componentDidMount() {
        axios.get('http://localhost:5000/api/places')
        .then(res => {
            this.setState({
                places: res.data
            })
        })
        .catch(e => console.log(`Error when getting the places from admin --> ${e}`))
    }

    delete = id => {
        axios.delete(`http://localhost:5000/api/places/${id}`)
        .then()         
        .catch(e => console.log(`Error when getting deleting a place from admin --> ${e}`))
    }

    editForm = () => {
        if(this.state.edit) {
            return <p>Edit Form</p>
        } 
    }
    
    toggleStatus = () => {
        this.setState({
            edit: !this.state.edit
        })
    }

    render() {

    const myPlaces = this.state.places.map(place => 
        <div key={place._id}>
            <h3>{place.description}</h3>
            <button className='btn btn-danger' onClick={() => this.delete(place._id)}>Remove</button>
            <button className='btn btn-primary' onClick={() => this.toggleStatus()}>Edit</button>
            <div>{this.editForm()}</div>
        </div>
    )

        return (
            <div>
                <h1>Manage Your Places</h1>
                {myPlaces}
            </div>
        )
    }
}
