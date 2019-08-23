import React, { Component } from 'react'
import MainLayout from '../layout/MainLayout';
import './VideoDetail.css'

export default class VideoDetail extends Component {
    render() {
        return (
            <MainLayout>
            <div className="video-viewer">
                <iframe width="100%" height="100%" frameBorder="0"
                    src={`https://www.youtube.com/embed/${this.props.match.params.id}?autoplay=1`}
                    title={this.props.match.params.title} allowFullScreen>
                </iframe>
            </div>
            </MainLayout>
        )
    }
}
