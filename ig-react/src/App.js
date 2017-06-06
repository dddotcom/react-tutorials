import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import Home from './components/Home';
import Profile from './components/Profile';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <br></br>

          <nav>
            <img className="float-left" src="/assets/images/logo.jpg"/>
            <p className="title">&emsp;Instergerm&emsp;</p>
            <input className="float-left search" type="text" placeholder="Search"/>
            <Link className="float-right" to="/">Home</Link>
            <p className="float-right">|</p>
            <Link className="float-right" to="/profile">Profile</Link>
          </nav>
          <br></br>
          <hr/>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/profile" component={Profile}></Route>
        </div>
      </Router>
    );
  }
}

export default App;
