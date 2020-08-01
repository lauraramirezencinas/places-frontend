import React, { Component } from 'react'
import axios from 'axios'

export default class EditPlace extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            description: '',
            imageUrl: ''
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleUpload = (event) => {
        const uploadData = new FormData()
        uploadData.append('imageUrl', event.target.files[0])
        console.log(event.target.files[0])
        axios.post()
    }

    handleSubmit = (event) => {
        const name = this.state.name
        const description = this.state.description
        const id = this.props.match.params.id
        event.preventDefault()
        axios.put(`http://localhost:5000/api/places/${id}`, {name, description})
        .then(() => {
            
        })
    }


    render() {
        console.log(this.props)
        return (
            <div>
                <h3>Edit form</h3>
                <form onSubmit={this.handleFormSubmit}>
                    <div className="form-group">
                        <label>Name:</label>
                        <input
                            type="text"
                            className="form-control"
                            name="name"
                            value={this.state.name}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Description:</label>
                        <textarea
                            className="form-control"
                            name="description"
                            value={this.state.description}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Photo:</label>
                        <input
                            type="file"
                            className="form-control"
                            name="imageUrl"
                            value={this.state.imageUrl}
                            onChange={this.handleChange}
                        />
                    </div>
                    <input type="submit"
                        className="btn btn-primary"
                        value="Submit" />
                </form>
            </div>
        )
    }
}

