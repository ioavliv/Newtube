import React, { Component } from 'react'
import MainLayout from '../layout/MainLayout';
import { getChannelByName } from '../utils/api';
import YTChannel from '../components/YTChannel';
import './Search.css'

export default class Search extends Component {
    constructor(props) {
        super(props)
        this.state = {
            channel: ''
        }
    }

    componentDidUpdate = (prevProps) => {
        if (this.props.match.params.query !== prevProps.match.params.query) {
            getChannelByName(this.props.match.params.query)
            .then((channel)=>{
                this.setState({
                    channel: channel
                })
            })   
        }
    }

    componentDidMount = () => {
        getChannelByName(this.props.match.params.query)
        .then((channel)=>{
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
                        <div className="channels">
                            {this.state.channel.items.map((channel, index) => {
                                return (
                                    <YTChannel {...this.props} channelId={channel.id} channel={channel} key={index} />
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
