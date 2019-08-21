import React, { Component } from 'react'
import './Login.css';


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
        event.preventDefault();
        // if (this.password !== this.password_repeat) {
        //     alert("Passwords don't match");
        // } else {
        //     auth.signup(this.state.user)
        //         .then(() => {
        //             this.setState({ error: "" });
        //             this.props.history.push("/login");
        //         })
        //         .catch((err) => {
        //             this.setState({ error: err.message });
        //         });
        // }

    };

    //   handleFormChange(event) {
    //     let user = this.state.user
    //     user[event.target.name]= event.target.value
    //     this.setState({
    //       user: user
    //     });
    //   }

    // handleSubmit = async (e) => {
    //     e.preventDefault();
    //     //create new account in DB
    //     console.log("Account created!")
    // }

    render() {
        return (
            <div className="logIn">
                <h6>Log in</h6>
                <form onSubmit={this.handleSubmit}>
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

                    <input type="submit" value="Log in" className="btn grey" />
                </form>
            </div >
        )
    }
}