import React, { Component } from 'react';
import { withRouter } from "react-router";
import { Link } from 'react-router-dom';
import { GoogleLogout } from 'react-google-login';
import { logout as authLogout, getUser } from '../utils/auth';
import { getChannelByName } from '../utils/api';
import SearchChannels from '../components/SearchChannels';
import './Nav.css';

class Nav extends Component {

    constructor(props) {
        super(props)
        this.state = {
            channelInput: '',
            channel: ''
        }
    }

    handleFormChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        const channelInput = this.state.channelInput;
        let channel = await getChannelByName(channelInput)
        this.setState({
            channel: channel
        })
    }

    componentDidMount = async () => {
        let channelInput = this.props.match.params.query
        if (channelInput !== undefined) {
            let channel = await getChannelByName(channelInput)
            this.setState({
                channel: channel
            })
        }
    }

    logout = (response) => {
        authLogout()
        this.setState({ user: false }, () => {
            this.props.history.push("/")
        })
    }

    render() {
        return (
            <nav className="black">
                <div className="nav-wrapper">
                    <div className="container">
                        {getUser() ?
                            <>
                                <h5><Link to={"/subscriptions"}>
                                    <img src="http://www.canam.dance/wp-content/uploads/2018/06/8E5F4202-CB50-4F8C-BB96-D4CBADA6E916.gif" alt="New"/>
                                    NewTube</Link></h5>
                                <SearchChannels {...this.props} />
                                <div className="w3-dropdown-hover">
                                    <button className="w3-black"><img src={localStorage.userImg} alt="Profile Pic" /></button>
                                    <div className="w3-dropdown-content">
                                        <GoogleLogout
                                            clientId="533634014318-9106qq5hef7elbmh4pc4l746t8kmoglf.apps.googleusercontent.com"
                                            buttonText="Logout"
                                            onLogoutSuccess={this.logout}
                                            onFailure={this.logout}
                                        />
                                    </div>
                                </div>
                            </>
                            : <h5><Link to={"/"}>
                                <img src="http://www.canam.dance/wp-content/uploads/2018/06/8E5F4202-CB50-4F8C-BB96-D4CBADA6E916.gif" alt="New"/>
                                NewTube</Link></h5>}
                    </div>
                </div>
            </nav>
        )
    }
}

export default withRouter(Nav)