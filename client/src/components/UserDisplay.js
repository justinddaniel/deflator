import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import UsersDisplay from './UsersDisplay';

class UserDisplay extends Component {

	render() {
		const { user } = this.props
		return user ? 
		 <div>
			<p>{user.name}</p>
		 </div> : null
		
		
			
	} 
}

const mapStateToProps = (state, ownProps) => {
	const foundUser = state.users.find((user) => {return user.id === +ownProps.match.params.id})
	return {user: foundUser}
}


export default connect(mapStateToProps)(UserDisplay);