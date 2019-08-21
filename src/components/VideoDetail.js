import React, { Component } from 'react';
import './VideoDetail.css';

export default class VideoDetail extends Component {
    render() {
        let today = new Date()
        let releaseDate = new Date(this.props.video.snippet.publishedAt);
        let releaseYear = releaseDate.getFullYear();
        let releaseMonth = releaseDate.getMonth()+1;
        let releaseDay = releaseDate.getDate();
        let videoReleaseDate = `${releaseMonth}/${releaseDay}/${releaseYear}`
        for(let i = 0; i < 10; i++){
            if((today.getDate() - i) === releaseDate.getDate() && today.getMonth() === releaseDate.getMonth() && today.getFullYear() === releaseDate.getFullYear()){
                videoReleaseDate = `${i} days ago`
            }
        }
        if(videoReleaseDate === "0 days ago"){
            videoReleaseDate = "Today"
        }
        if(videoReleaseDate === "1 days ago"){
            videoReleaseDate = "Yesterday"
        }
        return (
            <div className="eachVid">
                <iframe width="auto" height="auto" frameBorder="0"
                    src={`https://www.youtube.com/embed/${this.props.video.snippet.resourceId.videoId}`}
                    title={this.props.video.snippet.title} allowFullScreen>
                </iframe>
                <div className="title-description">
                    <h6>{this.props.video.snippet.title} <span>{videoReleaseDate}</span></h6>
                    <p>{this.props.video.snippet.description}</p>
                </div>
            </div >
        )
    }
}
