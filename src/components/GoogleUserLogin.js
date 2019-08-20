import React, { Component } from 'react';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import {setUser, logout as authLogout, getUser} from '../utils/auth';
import './GoogleUserLogin.css';

export default class GoogleUserLogin extends Component {

    constructor(props) {
        super(props)
        this.state = {
            user: false
        }
    }

    responseGoogle = async (response) => {
        setUser(response)
        this.setState({user: true}, ()=> {
            this.props.history.push("/subscriptions")
        })
    }

    logout = (response) => {
        authLogout()
        this.setState({user: false}, ()=> {
            this.props.history.push("/")
        })
    }

    render() {
        return (
            <div className="googleLogin">
                <h6>Log In With Google</h6>

                {getUser() ?
                    <GoogleLogout
                        clientId="533634014318-9106qq5hef7elbmh4pc4l746t8kmoglf.apps.googleusercontent.com"
                        buttonText="Logout"
                        onLogoutSuccess={this.logout}
                        onFailure={this.logout}
                    />
                    :
                    <GoogleLogin
                        scope="https://www.googleapis.com/auth/youtube.readonly"
                        clientId="533634014318-9106qq5hef7elbmh4pc4l746t8kmoglf.apps.googleusercontent.com"
                        buttonText="Login"
                        onSuccess={this.responseGoogle}
                        onFailure={this.responseGoogle} //Needs a separate function
                        cookiePolicy={'single_host_origin'}
                    />
                }
            </div>
        )
    }
}
