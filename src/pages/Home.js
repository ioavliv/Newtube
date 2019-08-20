import React, { Component } from 'react';
import MainLayout from '../layout/MainLayout';
import NewTubeLogin from '../components/NewTubeLogin';
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
                <section>
                    <div className="home">
                        <div className="logins">
                            <GoogleUserLogin {...this.props}/>
                            <NewTubeLogin />
                        </div>
                    </div>
                </section>
            </MainLayout>
        )
    }

}