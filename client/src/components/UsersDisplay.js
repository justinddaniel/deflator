import React, {Component} from 'react';
import { connect } from 'react-redux';
import {editUserLikes} from '../actions/users';
import { Route, Switch } from 'react-router-dom';
import UserDisplay from './UserDisplay'
import { Link } from 'react-router-dom';

class UsersDisplay extends Component {

  userLikes(userId) {
    var user = this.props.users.find(function (user) { return user.id === userId; });
    var userCopy = Object.assign({}, user, {likes: user.likes + 1})
    
    this.props.editUserLikes(userCopy)
  }

render () {

	const users = this.props.users.map((user) => {
		return <div>
      <li key={user.id}>Username: <Link key={user.id + 11} to={`/api/users/${user.id}`}>{user.name}</Link>, Likes: <span id={user.id}>{user.likes}</span> </li>
      
      <button type="button" id={user.id + 11} onClick={(e) => this.userLikes(user.id)}>Like user</button>
      
    </div>
	})

  return (
  	<div>
  	  <ul>{users}</ul>
      <div>
         <Route path="/api/users/:id" component={UserDisplay} /> 
      </div>
  	</div>
  	) 
  }
}

const mapStateToProps = (state, ownProps) => {
  return ({
    users: state.users
  })
} 

export default connect(mapStateToProps, {editUserLikes})(UsersDisplay);


