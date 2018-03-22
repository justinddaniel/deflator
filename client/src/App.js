import React, { Component } from 'react';
import './App.css';
import InfoDisplay from './components/InfoDisplay';
import InfoEntry from './components/InfoEntry';
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
        		{ /* <Navbar /> */ }
        	</div>
        	<div className="info-display">
        		<InfoDisplay /> 
        	</div>
        	<div className="info-entry">
        		<InfoEntry />
        	</div>
        </div>
      </Router>
    );
  }
}

export default connect(null, {getUsers})(App); 


