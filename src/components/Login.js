import React, { Component } from 'react'
import './Login.css';
import { login } from '../utils/auth';

export default class Login extends Component {
    
    constructor() {
        super();
        this.state = {
            user: {
                loginUsername: "",
                loginPassword: ""
            },
            error: null
        };
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.handleFormChange = this.handleFormChange.bind(this);
    }

    handleFormChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleFormSubmit(event) {
        event.preventDefault()
        login(this.state.loginUsername, this.state.loginPassword)
        .then(() => {
          this.setState({ error: "" });
          this.props.history.push('/subscriptions')
        })
        .catch((err) => {
          this.setState({ error: err.message });
        });
      }

    render() {
        return (
            <div className="logIn">
                <h6>Log in</h6>
                <form onSubmit={this.handleFormSubmit}>
                    <div className="input-field col s12">
                        <input id="loginUsername" type="text" name="loginUsername"
                            value={this.state.username} onChange={this.handleFormChange}
                        />
                        <label htmlFor="loginUsername">Username</label>
                    </div>

                    <div className="input-field col s12">
                        <input id="loginPassword" type="password" name="loginPassword"
                            value={this.state.password} onChange={this.handleFormChange}
                        />
                        <label htmlFor="loginPassword">Password</label>
                    </div>

                    <input type="submit" value="Log in" className="btn red" />
                </form>
            </div >
        )
    }
}