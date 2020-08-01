import React, { Component } from 'react'

export default class PlaceDetails extends Component {
    render() {
        return (
            <div>
                <h1>Your experience</h1>
                <h4>{this.props.name}</h4>
                <img src={this.props.imageUrl} alt={this.props.name}/>
                <p>{this.props.description}</p>

            </div>
        )
    }
}
