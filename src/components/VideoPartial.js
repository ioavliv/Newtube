import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './VideoPartail.css';

export default class VideoPartial extends Component {
    render() {
        let today = new Date()
        let releaseDate = new Date(this.props.video.snippet.publishedAt);
        let releaseYear = releaseDate.getFullYear();
        let releaseMonth = releaseDate.getMonth() + 1;
        let releaseDay = releaseDate.getDate();
        let videoReleaseDate = `${releaseMonth}/${releaseDay}/${releaseYear}`
        for (let i = 0; i < 10; i++) {
            if ((today.getDate() - i) === releaseDate.getDate() && today.getMonth() === releaseDate.getMonth() && today.getFullYear() === releaseDate.getFullYear()) {
                videoReleaseDate = `${i} days ago`
            }
        }
        if (videoReleaseDate === "0 days ago") {
            videoReleaseDate = "Today"
        }
        if (videoReleaseDate === "1 days ago") {
            videoReleaseDate = "Yesterday"
        }
        return (
            <Link to={`/watch/${this.props.video.snippet.resourceId.videoId}/${this.props.video.snippet.title}`}> 
                <div className="eachVid">
                    <div className="video-thumbnail">
                        <img src={this.props.video.snippet.thumbnails.medium.url} alt="" />
                    </div>
                    <div className="title-description">
                        <h6>{this.props.video.snippet.title} <span>{videoReleaseDate}</span></h6>
                        <p>{this.props.video.snippet.description}</p>
                    </div>
                </div >
            </Link>
        )
    }
}
