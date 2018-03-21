import React, { Component } from 'react';
import './App.css';
import InfoDisplay from './components/InfoDisplay';
import InfoEntry from './components/InfoEntry';
import UserService from './services/UserService';


class App extends Component {

	componentDidMount() {
		UserService.fetchUsers().then(users => this.setState({ users }))
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

export default App;
