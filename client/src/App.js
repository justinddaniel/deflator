import React, { Component } from 'react';
import './App.css';
import InfoDisplay from './components/InfoDisplay';
import InfoEntry from './components/InfoEntry';
import Home from './components/Home';
import {getUsers} from './actions/users';
import {connect} from 'react-redux';

import { 
  BrowserRouter as Router, 
  Route,
  Link
} from 'react-router-dom';


class App extends Component {

	componentDidMount() {
		this.props.getUsers()
	} 

  render() {
    return (
      <Router>
        <div className="App">
        	<div className="navbar">
        		<Link to="/"> Home </Link>
            <Link to="/api/users"> Users </Link>
            <Link to="/api/users/new"> Add user </Link>
        	</div>
        	<div className="info-display">
        		<Route path="/api/users" component={InfoDisplay} /> 
        	</div>
        	<div className="info-entry">
        		<Route path="/api/users/new" component={InfoEntry} />
            <Route path="/" component={Home} />
        	</div>
        </div>
      </Router>
    );
  }
}

export default connect(null, {getUsers})(App); 


