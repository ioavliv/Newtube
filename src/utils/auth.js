import Axios from 'axios'
import qs from "querystring";

export const getUser = function () {
    return JSON.parse(localStorage.getItem('user'));
}

export const setGoogleUser = function (user) {
    localStorage.setItem('user', true)
    localStorage.setItem('userImg', user.profileObj.imageUrl)
    localStorage.setItem('userToken', user.Zi.access_token)
}

export const setNTUser = function (user) {
    localStorage.setItem('user', true)
    localStorage.setItem('userImg', "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOp--jNBmsQj6naeTKbOsGOPiuCygH99c2kYDeNGwgj9ytHhGi")
    localStorage.setItem('userToken', user.Zi.access_token)
}

export const logout = function () {
    localStorage.removeItem('user')
    localStorage.removeItem('userImg')
    localStorage.removeItem('userToken')
    window.location.reload();
}

export const login = function (username, password) {
    return Axios({
        method: "POST",
        headers: { 'content-type': 'application/x-www-form-urlencoded' },
        baseURL: process.env.REACT_APP_SERVER_URL,
        url: "/auth/login",
        data: qs.stringify({username, password}),
    })
    .then(() => {
        alert("Logged in!")
    })
    .catch((err)=>{
        alert(err.message)
    })
}

export const signup = function ({username, password}) {
    return Axios({
        method: "POST",
        headers: { 'content-type': 'application/x-www-form-urlencoded' },
        baseURL: process.env.REACT_APP_SERVER_URL,
        url: "/auth/signup",
        data: qs.stringify({username, password}),
    })
    .then(() => {
        alert("User Created!")
    })
    .catch((err)=>{
        alert(err.message)
    })
}