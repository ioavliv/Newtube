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

    componentDidUpdate = async (prevProps) => {
        if (this.props.match.params.query !== prevProps.match.params.query) {
            let channel = await getChannelByName(this.props.match.params.query)
            this.setState({
                channel: channel
            })
        }
    }

    componentDidMount = async () => {
        let channel = await getChannelByName(this.props.match.params.query)
        this.setState({
            channel: channel
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
                                    <YTChannel channelId={channel.id} channel={channel} key={index} />
                                )
                            })
                            }
                        </div>
                        : <>Loading</>}
                </div>
            </MainLayout>
        )
    }
}
