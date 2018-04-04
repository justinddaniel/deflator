import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import UsersDisplay from './UsersDisplay';

class UserDisplay extends Component {

	render() {
		const { user } = this.props //{user} is a destructuring pattern. 
		return user ? //ternary allows it to render user only if user is a truthy object; avoids errors. 
		 <div>
			<h3>Username: {user.name}</h3>
			<p>Weight: {user.weight}</p>
			<p>Height: {user.height}</p>
			<p>Body Mass Index (BMI): {user.bmi}</p>
			<p>Weight Goal (lbs): {user.weight_goal}</p>
			<p>Weekly Target (lbs): {user.weekly_target}</p>
			<p>Daily Calorie Allotment: {user.calorie_allot}</p>
		 </div> : null
		
		
			
	} 
}

const mapStateToProps = (state, ownProps) => {
	const foundUser = state.users.find((user) => {return user.id === +ownProps.match.params.id}) //the + is a clever trick to convert to integer from string
	return {user: foundUser}
}


export default connect(mapStateToProps)(UserDisplay); //connects to the store so it can return states such as users fro store. 