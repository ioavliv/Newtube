import React, { Component } from 'react';
import MainLayout from '../layout/MainLayout';
import YTChannel from '../components/YTChannel';
import { addSubscription, removeSubscription, getSubscriptions } from '../utils/api';
import './Subscriptions.css';

export default class Subscriptions extends Component {
    constructor(props) {
        super(props)
        this.state = {
            channels: '',
            isSubscribed: true
        }
    }

    componentDidMount = () => {
        getSubscriptions()
            .then((subscriptions) => {
                this.setState({
                    channels: subscriptions
                })
            })
            // .then((isSubscribed) => {})
            .catch((err) => {
                console.log(err);
            })
    }

    subscribedTo(channelId) {
        let match = true;
        this.state.channels.items.map((channel) => {
            if (channel.id === channelId) {
                match = true
            }
        })
        if (match) {
            return true;
        }
        else {
            return false;
        }
    }

    subscribe = (channelId) => {
        addSubscription(channelId)
        this.props.history.push("/subscriptions")
    }

    unsubscribe = (channelId) => {
        debugger
        removeSubscription(channelId)
        .then(()=>{
            debugger
            this.setState({
                isSubscribed: false
            })
        })
        
    }

    render() {
        return (
            <MainLayout>
                {this.state.channels ?
                    <>
                        <div className="sub-channels">
                            {this.state.channels.items.map((channel, index) => {
                                return (
                                    <div key={index} className="videoPartial">

                                        <YTChannel {...this.props} channelId={channel.snippet.resourceId.channelId} channel={channel} />
                                        {/* // this.subscribedTo(this.state.channels.items[].snippet.resourceId.channelId) */}

                                        {this.state.isSubscribed === true ?
                                            <button className="btn grey" onClick={() => { this.unsubscribe(channel.id) }}>SUBSCRIBED</button>
                                            :
                                            (this.state.isSubscribed === false ?
                                                <button className="btn red" onClick={() => { this.subscribe(channel.snippet.resourceId.channelId) }}>SUBSCRIBE</button>
                                                : <></>)
                                        }
                                    </div>
                                )
                            })}
                        </div>
                    </>
                    : <>Loading</>}

            </MainLayout>
        )
    }
}
