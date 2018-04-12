import React, { Component } from 'react';
import './App.css';
import InfoDisplay from './components/InfoDisplay';
import InfoEntry from './components/InfoEntry';
import BMIDisplay from './components/BMIDisplay';
import GoalHelp from './components/GoalHelp';
import UsersDisplay from './components/UsersDisplay';
import UserDisplay from './components/UserDisplay';
import Home from './components/Home';
import {getUsers} from './actions/users';
import {connect} from 'react-redux';
import { IndexRoute } from 'react-router';

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
          <span>Deflator Navigation Bar: </span>
        		<Link to="/"> Home </Link>
            <Link to="/users"> Users </Link>
            <Link to="/users/new"> Add user </Link>
            <Link to="/bmihelp"> Your BMI </Link>
            <Link to="/goalhelp"> Help with Goals </Link>
        	</div>
        	<div className="info-display container-fluid">
        		<Route path="/users" component={UsersDisplay} />
           
        	</div>
        	<div className="info-entry">
        		<Route path="/users/new" component={InfoEntry} />
            <Route path="/bmihelp" component={BMIDisplay} />
            <Route path="/goalhelp" component={GoalHelp} />
            <Route exact path="/" component={Home} />
        	</div>
        </div>
      </Router>
    );
  }
}

export default connect(null, {getUsers})(App); 


