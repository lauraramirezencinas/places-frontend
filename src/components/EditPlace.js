import React, { Component } from 'react'
import axios from 'axios'
import UploadImage from './uploadimage/UploadImage'

export default class EditPlace extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            description: '',
            imageUrl: '',
            loc: {
                type: 'Point',
                coordinates: [0, 0],
            },
            highlight: false,
            imageFile: null,
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount() {
        const id = this.props.match.params.id
        axios.get(`http://localhost:5000/api/places/${id}`)
            .then(response => {
                this.setState(response.data)
            })
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleUpload = (file) => {
        this.setState({
            imageFile: file
        })
    }

    handleSubmit = (event) => {
        const id = this.props.match.params.id
        const uploadData = new FormData()
        if (this.state.imageFile) {
            uploadData.append('imageUrl', this.state.imageFile)
        }

        uploadData.append('name', this.state.name)
        uploadData.append('description', this.state.description)

        event.preventDefault()
        axios.put(`http://localhost:5000/api/places/${id}`, uploadData)

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
                    <UploadImage handleImageChange={this.handleUpload} />
                    <input type="submit"
                        className="btn btn-primary"
                        value="Submit" />
                </form>
            </div>
        )
    }
}

