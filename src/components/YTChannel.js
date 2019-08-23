import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './YTChannel.css';

export default class YTChannel extends Component {
    constructor(props) {
        super(props)
        this.state = {
            channel: ''
        }
    }

    render() {
        return (
            <div className="channel-partial">
                <Link to={`/channel/${this.props.channelId}`}>
                    <div>
                        <img src={this.props.channel.snippet.thumbnails.medium.url}
                            alt={this.props.channel.snippet.channelTitle} />
                        <h5>{this.props.channel.snippet.title}</h5>
                    </div>
                </Link>                
            </div>
        )
    }
}
