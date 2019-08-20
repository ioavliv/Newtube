import axios from "axios";
import qs from "querystring";

export default class Auth {
    constructor(domain) {
        this.domain = domain || process.env.REACT_APP_API;
        this.login = this.login.bind(this);
    }

    login(username, password) {
        return axios({
            method: "POST",
            url: "/auth/login",
            baseURL: this.domain,
            headers: { 'content-type': 'application/x-www-form-urlencoded' },
            data: qs.stringify({username, password}),
        })
        .then((response)=> {
            this.setUser(response.data)
        })
    }

    signup({username, password, firstname, lastname, email}) {
        return axios({
            method: "POST",
            url: "/auth/signup",
            baseURL: this.domain,
            headers: { 'content-type': 'application/x-www-form-urlencoded' },
            data: qs.stringify({username, firstname, lastname, password, email}),
        })
        .then((response)=> {
            this.setUser(response.data);
        })
    }

    loggedIn(){
        const user = this.getUser()
        return !!user; 
    }

    setUser(user){
        localStorage.setItem('user', JSON.stringify(user));
    }

    getUser(){
        return JSON.parse(localStorage.getItem('user'));
    }

    logout(){
       return axios({
            baseURL: this.domain,
            url: "/auth/logout"
        })
        .then((res)=> {
            localStorage.removeItem('user');
        })
    }    
}

export const setUser = function(user) {
    localStorage.setItem('user', true)
    localStorage.setItem('userImg', user.profileObj.imageUrl)
    localStorage.setItem('userToken', user.Zi.access_token)
}

export const getUser = function(){
    return JSON.parse(localStorage.getItem('user'));
}

export const logout = function(){
    localStorage.removeItem('user')
    localStorage.removeItem('userImg')
    localStorage.removeItem('userToken')
}   