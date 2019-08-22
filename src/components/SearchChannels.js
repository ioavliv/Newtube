import React, { Component } from 'react';
import './SearchChannels.css';

export default class SearchChannels extends Component {
    constructor(props) {
        super(props)
        this.state = {
            channelInput: '',
        }
    }

    handleFormChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const channelInput = this.state.channelInput;
        this.props.history.push(`/search/${channelInput}`)
    }

    render() {
        return (

            <div className="nav-wrapper searchChannels">
                <form onSubmit={this.handleSubmit}>
                    <div className="input-field">
                        <input id="search" type="search" className="searchInput" placeholder="Find a Channel" name="channelInput"required 
                               value={this.state.channelInput} onChange={this.handleFormChange}
                        />
                        <label className="label-icon" htmlFor="search"><i className="material-icons">search</i></label>
                        <i className="material-icons">close</i>
                    </div>
                </form>
            </div>
        )
    }
}