import React, { Component } from 'react';
import './VideoDetail.css';

export default class VideoDetail extends Component {
    render() {
        let releaseDate = new Date(this.props.video.snippet.publishedAt);
        let releaseYear = releaseDate.getFullYear();
        let releaseMonth = releaseDate.getMonth()+1;
        let releaseDay = releaseDate.getDate();
        debugger
        return (
            <div className="eachVid">
                <iframe width="auto" height="auto" frameborder="0"
                    src={`https://www.youtube.com/embed/${this.props.video.snippet.resourceId.videoId}`}
                    title={this.props.video.snippet.title} allowFullScreen>
                </iframe>
                <div className="title-description">
                    <h6>{this.props.video.snippet.title} <span>{releaseMonth}/{releaseDay}/{releaseYear}</span></h6>
                    <p>{this.props.video.snippet.description.substring(0, 300) + "..."}</p>
                </div>
            </div >
        )
    }
}
