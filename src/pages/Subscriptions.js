import React, { Component } from 'react';
import MainLayout from '../layout/MainLayout';
import YTChannel from '../components/YTChannel';
import { getSubscriptions } from "../utils/api";
import './Subscriptions.css';

export default class Subscriptions extends Component {
    constructor(props) {
        super(props)
        this.state = {
            channel: ''
        }
    }

    componentDidMount = () => {
        getSubscriptions()
        .then((subscriptions) => {
            debugger
            this.setState({
                channel: subscriptions
            })
        })
        .catch((err) => {
            console.log(err);
        })
    }

    render() {
        return (
            <MainLayout>
                <br />
                {this.state.channel ?
                    <>
                        <div className="sub-channels">
                            {this.state.channel.items.map((channel, index) => {
                                return (
                                    <div key={index} className="videoPartial">
                                        <YTChannel {...this.props} channelId={channel.snippet.resourceId.channelId}
                                            channel={channel}
                                        />
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
