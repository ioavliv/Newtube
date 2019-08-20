import React, { Component } from 'react';
import './NewTubeLogin.css';

export default class NewTubeLogin extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user: null,
            username: '',
            password: '',
            videos: ''
        }
        // this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleFormChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        //create new account in DB
        console.log("Account created!")
    }

    render() {
        return (
            <div className="newtubeLogin">
                <h6>Create an account</h6>
                <form onSubmit={this.handleSubmit}>
                    <div className="input-field">
                        <input type="text" placeholder="Username" name="username"
                            value={this.state.name} onChange={this.handleFormChange}
                        />
                        <input type="password" placeholder="Password" name="password"
                            value={this.state.name} onChange={this.handleFormChange}
                        />
                        <input type="submit" value="Create Account" className="btn grey" />
                    </div>
                </form>
            </div>
        )
    }
}
