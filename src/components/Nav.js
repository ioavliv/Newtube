import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getUser } from '../utils/auth';
import { getChannelByName } from '../utils/api';
import SearchChannels from '../components/SearchChannels';
import { withRouter } from "react-router";
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
        let channel = await getChannelByName(channelInput)
        this.setState({
            channel: channel
        })
    }

    // logout = (response) => {
    //     this.setState({ user: false })
    //     localStorage.removeItem('user')
    //     localStorage.removeItem('userImg')
    //     localStorage.removeItem('userToken')
    // }

    render() {
        return (
            <nav className="black">
                <div className="nav-wrapper">
                    <div className="container">
                        {getUser() ?
                            <>
                                <div>
                                    <h5><Link to={"/subscriptions"}>NewTube</Link></h5>
                                    <h5><Link to={"/"}>Login/out</Link></h5>
                                </div>
                                <SearchChannels {...this.props}/>
                                <img src={localStorage.userImg} alt="Profile Pic" />

                                {/* <a class='dropdown-trigger btn' href='#' data-target='dropdown1'>
                                </a>
                                <ul id='dropdown1' class='dropdown-content'>
                                    <li><GoogleLogout
                                        clientId="533634014318-9106qq5hef7elbmh4pc4l746t8kmoglf.apps.googleusercontent.com"
                                        buttonText="Logout"
                                        onLogoutSuccess={this.logout}
                                        onFailure={this.logout}
                                    /></li>
                                </ul> */}
                            </>
                            : <h5><Link to={"/"}>NewTube</Link></h5>}
                    </div>
                </div>
            </nav>
        )
    }
}

export default withRouter(Nav)