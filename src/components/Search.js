import React, { Component } from 'react'

export class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: "",
            lat: 0,
            lng: 0,
            direccion: ""
        };
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()

    }


    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Search </label>
                    <input type="text" name="search" value={this.state.search} onChange={this.handleChange} />
                    <input type="submit" value="Buscar" />
                </form>
            </div>
        )
    }
}

export default Search
