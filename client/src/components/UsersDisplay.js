/* Component needs works

import React, {Component} from 'react';
import { connect } from 'react-redux';
import {getUsers} from '../actions/users';
import { Route, Switch } from 'react-router-dom';

class UsersDisplay extends Component {

  componentDidMount() {
  this.props.getUsers()
  }

  render () {
  	debugger
  	const users = this.props.users.map((user) => {
  		<li key={user.id}> 
  		  {user.name} 
  		</li>
  	});

  	return (
  		<ul>{users}</ul>
  	);
	}
}

const mapStateToProps = (state, ownProps) => {
  return ({
    users: state.users
  })
}

export default connect(mapStateToProps, {getUsers})(UsersDisplay); 

*/
