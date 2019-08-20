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
            <div className="searchChannels">
                <form onSubmit={this.handleSubmit}>
                    <div className="input-field">
                        <input type="text" placeholder="Enter Channel Name" name="channelInput"
                            value={this.state.name} onChange={this.handleFormChange}
                        />
                        <input type="submit" value="Find Channel" className="btn grey" />
                    </div>
                </form>
            </div>
        )
    }
}