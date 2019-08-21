import React, { Component } from 'react';
import {Route} from "react-router-dom";
import Home from './pages/Home';
import Subscriptions from './pages/Subscriptions';
import ChannelDetail from './pages/ChannelDetail';
import ProtectedRoute from './components/ProtectedRoute';
import Search from './pages/Search';
import './App.css';

export default class App extends Component {

  render() {
    return (
      <div className="App">

        <Route exact path="/" component={Home} />
        <Route path="/channel/:id" component={ChannelDetail} />
        <Route path="/search/:query" component={Search} />
        <ProtectedRoute 
          redirectUrl='/' 
          path="/subscriptions" 
          component={Subscriptions}
        />
      </div>
    );
  }
}