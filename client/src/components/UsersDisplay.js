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
  const length = this.props.users.length
	const users = this.props.users.map((user) => {

    return <div>
      <li key={user.id}>Username: <Link key={user.id + length} to={`/users/${user.id}`}>{user.name}</Link>, Likes: <span id={user.id}>{user.likes}</span> </li>
      
      <button type="button" id={user.id + length} onClick={(e) => this.userLikes(user.id)}>Like user</button>
    
    </div>
	} )

  return (
  	<div className="row">
      <div className="col-md-4 col-lg-6 col-sm-4 col-xs-4">  
  	   <ul>{users}</ul>
      </div>
      <Route path="/users/:id" component={UserDisplay} /> 
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


