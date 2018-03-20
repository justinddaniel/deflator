import React, { Component } from 'react';
import './App.css';
import InfoDisplay from './components/InfoDisplay';
import InfoEntry from './components/InfoEntry';
import UserService from './services/UserService';

class App extends Component {
	constructor() {
		super()

		this.state = {
			users: []
		}
	}

	componentDidMount() {
		UserService.fetchUsers().then(users => this.setState({ users }))
	}

  addUser = user => {
    UserService.createUser(user).then(user => this.setState({
      users: this.state.users.concat(user)
    }))
  }

  render() {
    return (
      <div className="App">
      	<div className="navbar">
      		{ /* <Navbar /> */ }
      	</div>
      	<div className="info-display">
      		<InfoDisplay users={this.state.users} /> 
      	</div>
      	<div className="info-entry">
      		<InfoEntry addUser={this.addUser} />
      	</div>
      </div>
    );
  }
}

export default App;
