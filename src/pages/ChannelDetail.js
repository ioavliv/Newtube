import React, { Component } from 'react';
import { getChannelById, getAllVideos, getPreviousPage, getNextPage } from '../utils/api';
import MainLayout from '../layout/MainLayout';
import VideoDetail from '../components/VideoDetail';
import './ChannelDetail.css';

export default class ChannelDetail extends Component {
    constructor(props) {
        super(props)
        this.state = {
            channel: '',
            videos: ''
        }
    }

    componentDidMount = async () => {
        const channel_id = this.props.match.params.id
        let channel = await getChannelById(channel_id)
        this.setState({
            channel: channel
        })
        this.findVideos(this.state.channel.contentDetails.relatedPlaylists.uploads);
    }

    findVideos = async (playlistId) => {
        let videos = await getAllVideos(playlistId)
        this.setState({
            videos: videos
        })
    }

    previousPage = async (playlistId, pageToken) => {
        let videos = await getPreviousPage(playlistId, pageToken)
        this.setState({
            videos: videos
        })
    }

    nextPage = async (playlistId, pageToken) => {
        let videos = await getNextPage(playlistId, pageToken)
        this.setState({
            videos: videos
        })
    }

    render() {
        return (
            <MainLayout>
                <div className="channelDetail">
                    {this.state.channel.snippet ?
                        <div className="channelInfo">
                            <div className="channelImg">
                                <img src={this.state.channel.snippet.thumbnails.medium.url} alt="" />
                            </div>
                            <div>
                                <ul className="collection">
                                    <li className="collection-item">Subscribers: {this.state.channel.statistics.subscriberCount
                                        .toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                                    </li>
                                    <li className="collection-item">Views: {this.state.channel.statistics.viewCount
                                        .toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                                    </li>
                                    <li className="collection-item">Videos: {this.state.channel.statistics.videoCount
                                        .toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <p className="channelDescription">{this.state.channel.snippet.description}</p>
                            </div>
                        </div>
                        : <>Loading</>}

                    {this.state.videos.items ?
                        <div className="channelVideos">
                            <button className="moreVidsBtn" onClick={()=>{{this.previousPage(this.state.channel.contentDetails.relatedPlaylists.uploads, this.state.videos.prevPageToken)}}}>▲</button> 
                                {this.state.videos.items.map((video, index) => {
                                    return (
                                        <VideoDetail video={video} key={index} />
                                    )
                                })}
                            <button className="moreVidsBtn" onClick={()=>{this.nextPage(this.state.channel.contentDetails.relatedPlaylists.uploads, this.state.videos.nextPageToken)}}>▼</button> 
                        </div>
                        : <div className="channelVideos">Loading</div>}

                </div>
            </MainLayout>
        )
    }
}
