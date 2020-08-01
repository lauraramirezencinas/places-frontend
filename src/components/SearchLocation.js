import React, { Component } from 'react'
import axios from 'axios'

export class SearchLocation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: "",
            lat: 0,
            lng: 0,
            candidates: []
        };
    }

    handleChange = (e) => {
        this.setState({ search: e.target.value })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        console.log("a buscar...")
        axios.get("http://localhost:5000/api/address?search=" + this.state.search)
            .then(resp => {
                console.log("respuesta: ", resp.data)
                this.setState({
                    candidates: resp.data.candidates
                })
            })
    }

    selectPlace = (position) => {
        console.log("SearchLocation.selectPlace results: ", position)
        // call props function to send info for container component
        // and send position...
        this.props.callback(position)
    }


    render() {
        const candidates = this.state.candidates.map(local => (
            <div key={local.place_id}>
                <h5><span onClick={() => this.selectPlace(local.geometry.location)}>{local.name}</span></h5>
            </div>
        ))
        let header = ""
        if (candidates.length > 0) {
            header = <h3>Results (select one)</h3>
        }
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text"
                        name="search"
                        placeholder="place, ex: 'Paris'"
                        value={this.state.search}
                        onChange={this.handleChange} />
                    <input type="submit" value="buscar" />
                </form>
                {header}
                {candidates}
            </div>
        )
    }


}

export default SearchLocation
