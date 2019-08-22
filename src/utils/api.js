import Axios from 'axios'
import { logout } from "../utils/auth"
const KEY = process.env.REACT_APP_API_KEY;
const axios = Axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3/"
})
export default axios;

export const getSubscriptions = function () {
        return axios({
            url: "/subscriptions",
            headers: {
                'Authorization': `Bearer ${localStorage.userToken}`,
            },
            params: {
                maxResults: 50,
                part: 'contentDetails,snippet',
                mine: true,
                key: KEY,
                order: "unread"
            },
            method: "GET"
        })
        .then(responseFromApi => {
    
            return responseFromApi.data;
        })
        .catch((err) => {
            console.log('err' + err)
            if (err.response.status === 401) {
                logout();
                //
            }
            if (err.response.status === 400) {
                console.log("Error 400");
            }
        });
}

export const getChannelByName = function (channelSearch) {
        return axios({
            url: "/channels",
            params: {
                part: 'snippet',
                key: KEY,
                forUsername: channelSearch,
            },
            method: "GET"
        })
        .then(responseFromApi => {
    
            return responseFromApi.data;
        })
        .catch((err) => {
            console.log('err' + err)
            if (err.response.status === 401) {
                logout();
                //
            }
            if (err.response.status === 400) {
                console.log("Error 400");
            }
        });
}

export const getChannelById = function (channel_id) {
        return axios({
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
        .then(responseFromApi => {
    
            return responseFromApi.data;
        })
        .catch((err) => {
            console.log('err' + err)
            if (err.response.status === 401) {
                logout();
                //
            }
            if (err.response.status === 400) {
                console.log("Error 400");
            }
        });
}

export const getAllVideos = function (playlistId) {
        return axios({
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
        .then(responseFromApi => {
    
            return responseFromApi.data;
        })
        .catch((err) => {
            console.log('err' + err)
            if (err.response.status === 401) {
                logout();
                //
            }
            if (err.response.status === 400) {
                console.log("Error 400");
            }
        });
}

export const getPreviousPage = function (playlistId, pageToken) {
        return axios({
            url: "/playlistItems",
            headers: {
                'Authorization': `Bearer ${localStorage.userToken}`,
            },
            params: {
                part: 'snippet',
                playlistId: playlistId,
                key: KEY,
                maxResults: 4,
                pageToken: pageToken
            },
            method: "GET"
        })
        .then(responseFromApi => {
    
            return responseFromApi.data;
        })
        .catch((err) => {
            console.log('err' + err)
            if (err.response.status === 401) {
                logout();
                //
            }
            if (err.response.status === 400) {
                console.log("Error 400");
            }
        });
}

export const getNextPage = function (playlistId, pageToken) {
        return axios({
            url: "/playlistItems",
            headers: {
                'Authorization': `Bearer ${localStorage.userToken}`,
            },
            params: {
                part: 'snippet',
                playlistId: playlistId,
                key: KEY,
                maxResults: 4,
                pageToken: pageToken
            },
            method: "GET"
        })
        .then(responseFromApi => {
    
            return responseFromApi.data;
        })
        .catch((err) => {
            console.log('err' + err)
            if (err.response.status === 401) {
                logout();
                //
            }
            if (err.response.status === 400) {
                console.log("Error 400");
            }
        });
}

export const addSubscription = function (channelId) {
        return axios({
            url: "/subscriptions",
            headers: {
                'Authorization': `Bearer ${localStorage.userToken}`,
            },
            params: {
                part: 'snippet',
                key: KEY,
                mine: true,
                data: {
                    "snippet": {
                      "resourceId": {
                        "kind": "youtube#channel",
                        "channelId": channelId
                      }
                    }
                  }
            },
            method: "GET"
        })
        .then(responseFromApi => {
    
            return responseFromApi.data;
        })
        .catch((err) => {
            console.log('err' + err)
            if (err.response.status === 401) {
                logout();
                //
            }
            if (err.response.status === 400) {
                console.log("Error 400");
            }
        });
}

export const removeSubscription = function (channelId) {
        return axios({
            url: "/subscriptions",
            headers: {
                'Authorization': `Bearer ${localStorage.userToken}`,
            },
            params: {
                id: channelId,
                key: KEY,
            },
            method: "DELETE"
        })
        .then(responseFromApi => {
    
            return responseFromApi.data;
        })
        .catch((err) => {
            console.log('err' + err)
            if (err.response.status === 401) {
                logout();
                //
            }
            if (err.response.status === 400) {
                console.log("Error 400");
            }
        });
}