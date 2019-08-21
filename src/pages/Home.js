import React, { Component } from 'react';
import MainLayout from '../layout/MainLayout';
import SignUp from '../components/SignUp';
import Login from '../components/Login';
import GoogleUserLogin from '../components/GoogleUserLogin';
import './Home.css'


export default class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user: false
        }
    }

    render() {
        return (
            <MainLayout>
                <div className="welcome">
                    <div className="app-description">
                        <h5>Do you ever get distracted by useless YouTube videos?</h5>
                        <h5>Stop wasting time and join NewTube today!</h5>
                    </div>
                    <div className="right-panel">
                    <div className="benefits">
                        <div className="pros">
                            <ul>
                                <li><img src="./images/checkmark.png" alt="pro"/> Subscriber-focused feed</li>
                                <li><img src="./images/checkmark.png" alt="pro"/> Track time spent</li>
                            </ul>
                        </div>
                        <div className="cons">
                            <ul>
                                <li><img src="./images/x-mark.png" alt="con"/> No distractions</li>
                                <li><img src="./images/x-mark.png" alt="con"/> No recommendations</li>
                                <li><img src="./images/x-mark.png" alt="con"/> No missed content</li>
                            </ul>
                        </div>
                    </div>
                    <GoogleUserLogin {...this.props}/>
                    </div>
                </div>
                <div className="or">OR</div>
                <div className="logins">
                    <SignUp {...this.props} />
                    <Login {...this.props} />
                </div>
            </MainLayout>
        )
    }

}