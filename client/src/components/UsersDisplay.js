
import React, {Component} from 'react';
import { connect } from 'react-redux';
import {getUsers} from '../actions/users';
import {editUserLikes} from '../actions/users';
import { Route, Switch } from 'react-router-dom';

class UsersDisplay extends Component {

	componentDidMount() {
		this.props.getUsers()
	}

  userLikes(userId) {
    let likedUser = this.props.users.find((user) => {
      return user.id === userId
    })
    this.props.editUserLikes(likedUser)
  }

render () {

	const users = this.props.users.map((user) => {
		return <div>
      <li key={user.id}>Username: {user.name}, Likes: <span id={user.id}>{user.likes}</span> </li>
      
      <button type="button" id={user.id + 11} onClick={(e) => this.userLikes(user.id)}>Like user</button>
      
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


