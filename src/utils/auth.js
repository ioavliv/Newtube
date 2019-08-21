import Axios from 'axios'
import qs from "querystring";

export const getUser = function () {
    return JSON.parse(localStorage.getItem('user'));
}

export const setUser = function (user) {
    localStorage.setItem('user', true)
    localStorage.setItem('userImg', user.profileObj.imageUrl)
    localStorage.setItem('userToken', user.Zi.access_token)
}

export const logout = function () {
    localStorage.removeItem('user')
    localStorage.removeItem('userImg')
    localStorage.removeItem('userToken')
    window.location.reload();
}

export const login = function (user) {

}

export const signup = function ({username, password, confirm}) {
    debugger
    return Axios.create({
        method: "POST",
        url: "/auth/signup",
        baseURL: "localhost:3001", //process.env.SERVER_URL
        headers: { 'content-type': 'application/x-www-form-urlencoded' },
        data: qs.stringify({username, password, confirm}),
    })
        // .then((response) => {
        //     debugger
        //     this.setUser(response.data);
        //     this.props.history.push('/auth/login')
        // })
}