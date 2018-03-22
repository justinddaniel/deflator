import React, { Component } from 'react';
import './App.css';
import InfoDisplay from './components/InfoDisplay';
import InfoEntry from './components/InfoEntry';
import {getUsers} from './actions/users';
import {connect} from 'react-redux';


class App extends Component {

	componentDidMount() {
		this.props.getUsers()
	} 

  render() {
    return (
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
    );
  }
}

export default connect(null, {getUsers})(App); 


