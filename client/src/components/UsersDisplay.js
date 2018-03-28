
import React, {Component} from 'react';
import { connect } from 'react-redux';
import {getUsers} from '../actions/users';
import { Route, Switch } from 'react-router-dom';

class UsersDisplay extends Component {

	componentDidMount() {
		this.props.getUsers()
	}


render () {

  /*function userLikes (userId) {
    document.getElementById(userId).innerHtml++
    onclick={userLikes(user.id)}
  } */

	const users = this.props.users.map((user) => {
		return <div>
      <li key={user.id}>{user.name}</li>
      <p key={user.id} id={user.id}>0</p>
      <button>Like user</button>
      
    </div>
	})

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


