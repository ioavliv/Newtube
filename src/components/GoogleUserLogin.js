import React, { Component } from 'react';
import { GoogleLogin } from 'react-google-login';
import { setGoogleUser, logout as authLogout } from '../utils/auth';
import './GoogleUserLogin.css';

export default class GoogleUserLogin extends Component {

    constructor(props) {
        super(props)
        this.state = {
            user: false
        }
    }

    responseGoogle = async (response) => {
        await setGoogleUser(response)
        this.setState({ user: true }, () => {
            this.props.history.push("/subscriptions")
        })
    }

    logout = async (response) => {
        await authLogout()
        this.setState({ user: false }, () => {
            this.props.history.push("/")
        })
    }

    render() {
        return (
            <div className="googleLogin">
                <h6>Log In With Google</h6>
                <GoogleLogin
                    scope={process.env.REACT_APP_SCOPE}
                    clientId="533634014318-9106qq5hef7elbmh4pc4l746t8kmoglf.apps.googleusercontent.com"
                    buttonText="Login"
                    onSuccess={this.responseGoogle}
                    onFailure={this.responseGoogle} //Needs a separate function
                    cookiePolicy={'single_host_origin'}
                />
                <br/>
                <p>Get started right away by connecting with your YouTube account subscriptions!</p>
            </div>
        )
    }
}
