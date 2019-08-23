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
                debugger
                // this.subscribedTo(this.props.channelId)
            })
            // .then((isSubscribed) => {

            // })
            .catch((err) => {
                console.log(err);
            })
    }

    subscribedTo(channelId) {
        let match = true;
        this.state.channels.items.map((channel) => {
            debugger
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
        removeSubscription(channelId);
        // isSubscribed = false;
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
                                        <YTChannel {...this.props} channelId={channel.snippet.resourceId.channelId}
                                            channel={channel}
                                        />
                                        {this.state.isSubscribed === true ?
                                            <button className="btn grey" onClick={() => { this.unsubscribe(this.props.channel.id) }}>SUBSCRIBED</button>
                                            :
                                            (this.state.isSubscribed === false ?
                                                <button className="btn red" onClick={() => { this.subscribe(this.props.channelId) }}>SUBSCRIBE</button>
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
