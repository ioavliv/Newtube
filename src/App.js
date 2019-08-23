import React, { Component } from 'react';
import {Route} from "react-router-dom";
import ProtectedRoute from './components/ProtectedRoute';
import Home from './pages/Home';
import Subscriptions from './pages/Subscriptions';
import ChannelDetail from './pages/ChannelDetail';
import Search from './pages/Search';
import VideoDetail from './pages/VideoDetail';
import './App.css';

export default class App extends Component {

  render() {
    return (
      <div className="App">

        <Route exact path="/" component={Home} />
        <Route path="/channel/:id" component={ChannelDetail} />
        <Route path="/search/:query" component={Search} />
        <Route path="/watch/:id/:title" component={VideoDetail} />
        <ProtectedRoute 
          redirectUrl='/' 
          path="/subscriptions" 
          component={Subscriptions}
        />
      </div>
    );
  }
}