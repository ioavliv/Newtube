import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './YTChannel.css';
import { addSubscription, removeSubscription, getSubscriptions} from '../utils/api';

export default class YTChannel extends Component {
    constructor(props) {
        super(props)
        this.state = {
            channel: ''
        }
    }

    subscribedTo (channelId){
        debugger
        let match = true;
        getSubscriptions()
        .then( (mySubs)=>{
            debugger
            mySubs.items.map((channel) => {
                debugger
                if(channel.id === channelId){
                    debugger
                    match = true
                }
            })
            if(match){
                return true;
            }
            else{
                return false;
            }
        })
        .catch(err => console.log('err' + err));      
    }

    subscribe = (channelId) => {
        addSubscription(channelId)
        this.props.history.push("/subscriptions")
    }

    unsubscribe = (channelId) => {
        removeSubscription(channelId)
        window.location.reload() ///not working
    }

    render() {
        let isSubscribed = true;
        // isSubscribed = this.subscribedTo(this.props.channelId)
        return (
            <div className="channel-partial">
                <Link to={`/channel/${this.props.channelId}`}>
                    <div>
                        <img src={this.props.channel.snippet.thumbnails.medium.url}
                            alt={this.props.channel.snippet.channelTitle} />
                        <h5>{this.props.channel.snippet.title}</h5>
                    </div>
                </Link>

                {/* MOVE BUTTONS TO SEARCH.JS && SUBSCRIPTIONS.JS */}
                {isSubscribed ?
                    <button className="btn grey" onClick={() => { this.unsubscribe(this.props.channel.id) }}>SUBSCRIBED</button>
                    :
                    <button className="btn red" onClick={() => { this.subscribe(this.props.channelId) }}>SUBSCRIBE</button>
                }
            </div>
        )
    }
}
