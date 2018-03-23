
import React, {Component} from 'react';
import { connect } from 'react-redux';
import {getUsers} from '../actions/users';
import { Route, Switch } from 'react-router-dom';

class UsersDisplay extends Component {

	componentDidMount() {
		this.props.getUsers()
	}


render () {

	const users = this.props.users.map((user) => {
		return <div>
      <li key={user.id}>{user.name}</li>
      <button>click me</button>
      
    </div>
	})

	 console.log(users)

  return (
  	<div>
  	  <ul>{users}</ul>
  	</div>
  	) 
  }
}

const mapStateToProps = (state, ownProps) => {
  return ({
    users: state.users
  })
} 

export default connect(mapStateToProps, {getUsers})(UsersDisplay);


