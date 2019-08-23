import React, { Component } from 'react'
import MainLayout from '../layout/MainLayout';
import { getChannelByName } from '../utils/api';
import YTChannel from '../components/YTChannel';
import './Search.css'

export default class Search extends Component {
    constructor(props) {
        super(props)
        this.state = {
            channel: '',
            isSubscribed: false
        }
    }

    componentDidUpdate = (prevProps) => {
        if (this.props.match.params.query !== prevProps.match.params.query) {
            getChannelByName(this.props.match.params.query)
                .then((channel) => {
                    this.setState({
                        channel: channel
                    })
                })
        }
    }

    componentDidMount = () => {
        getChannelByName(this.props.match.params.query)
            .then((channel) => {
                this.setState({
                    channel: channel
                })
            })
    }

    render() {
        return (
            <MainLayout>
                <div className="ChannelResults">
                    {this.state.channel.items ?
                        <div className="channel">
                            {this.state.channel.items.map((channel, index) => {
                                return (
                                    <div className="searched-channel">
                                        <YTChannel {...this.props} channelId={channel.id} channel={channel} key={index} />
                                        {this.state.isSubscribed === true ?
                                            <button className="btn grey" onClick={() => { this.unsubscribe(this.props.channel.id) }}>SUBSCRIBED</button>
                                            :
                                            (this.state.isSubscribed === false ?
                                                <button className="btn red" onClick={() => { this.subscribe(this.props.channelId) }}>SUBSCRIBE</button>
                                                : <></>)
                                        }
                                    </div>
                                )
                            })
                            }
                        </div>
                        : <></>}
                </div>
            </MainLayout>
        )
    }
}
