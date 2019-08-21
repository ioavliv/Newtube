import React, { Component } from 'react';
import './SignUp.css';
import { signup } from '../utils/auth';

export default class SignUp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user: {
                username: "",
                password: "",
                confirm: ""
            }
        }
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.handleFormChange = this.handleFormChange.bind(this);
    }

    handleFormChange = (e) => {
        let user = this.state.user
        user[e.target.name] = e.target.value
        this.setState({
            user: user
        });
    }

    handleFormSubmit = async (e) => {
        e.preventDefault();
        if (this.state.password !== this.state.confirm) {
            alert("Passwords don't match");
        } else {
            debugger
            let response = await signup(this.state.user)
            debugger
            console.log("Account created!")
            this.props.history.push("/");
        }
    }

    render() {
        return (
            <div className="signUp">
                <h6>Create an account</h6>
                <form onSubmit={this.handleFormSubmit}>
                    <div className="input-field">
                        <div className="input-field col s12">
                            <input id="username" type="text" name="username"
                                value={this.state.username} onChange={this.handleFormChange}
                            />
                            <label htmlFor="username">Username</label>
                        </div>
                        <br />
                        <div className="input-field col s12">
                            <input id="password" type="password" name="password"
                                value={this.state.password} onChange={this.handleFormChange}
                            />
                            <label htmlFor="password">Password</label>
                        </div>
                        <div className="input-field col s12">
                            <input id="confirm" type="password" name="confirm"
                                value={this.state.confirm} onChange={this.handleFormChange}
                            />
                            <label htmlFor="confirm">Confirm Password</label>
                        </div>
                        <input type="submit" value="Create Account" className="btn grey" />
                    </div>
                </form>
            </div>
        )
    }
}
