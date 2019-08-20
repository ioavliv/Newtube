import Axios from 'axios'
import { logout } from "../utils/auth"
//import withRouter from "react-router-dom"

const KEY = 'AIzaSyD0Iwd_upkBRDFq61IryxWJH_jHJ7qPGAM';
const axios = Axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3/"
})
export default axios;

export const getSubscriptions = async function () {
    try {
        const subscriptions = await axios({
            url: "/subscriptions",
            headers: {
                'Authorization': `Bearer ${localStorage.userToken}`,
            },
            params: {
                maxResults: 50,
                part: 'contentDetails,snippet',
                mine: true,
                key: KEY,
            },
            method: "GET"
        })
        return subscriptions.data
    } catch (err) {
        if (err.response.status === 401) {
            logout();
            //
        }
    }
}

export const getChannelByName = async function (channelSearch) {
    const response = await axios({
        url: "/channels",
        params: {
            part: 'snippet',
            key: KEY,
            forUsername: channelSearch,
        },
        method: "GET"
    })
    return response.data
}

export const getChannelById = async function (channel_id) {
    const channel = await axios({
        url: "/channels",
        headers: {
            'Authorization': `Bearer ${localStorage.userToken}`,
        },
        params: {
            part: 'contentDetails,snippet,statistics',
            id: channel_id,
            key: KEY,
        },
        method: "GET"
    })
    return channel.data.items[0]
}

export const getAllVideos = async function (playlistId) {
    const videos = await axios({
        url: "/playlistItems",
        headers: {
            'Authorization': `Bearer ${localStorage.userToken}`,
        },
        params: {
            part: 'snippet',
            playlistId: playlistId,
            key: KEY,
            maxResults: 4
        },
        method: "GET"
    })
   return videos.data
}