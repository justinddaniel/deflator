import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import UsersDisplay from './UsersDisplay';

class UserDisplay extends Component {

	render() {
		const { user } = this.props //{user} is a destructuring pattern. 
		return user ? //ternary allows it to render user only if user is a truthy object; avoids errors. 
		 <div className="col-md-8 col-lg-6 col-sm-8 col-xs-8">
			<h3>Username: {user.name}</h3>
			<p>Weight: {user.weight} pounds</p>
			<p>Height: {user.height} inches</p>
			<p>Body Mass Index (BMI): {user.bmi}</p>
			<p>Weight Goal: {user.weight_goal} pounds</p>
			<p>Weekly Target: {user.weekly_target} pounds per week</p>
			<p>Daily Calorie Allotment: {user.calorie_allot} Calories</p>
		 </div> : null
		
		
			
	} 
}

const mapStateToProps = (state, ownProps) => {
	const foundUser = state.users.find((user) => {return user.id === +ownProps.match.params.id})
	return {user: foundUser}
}


export default connect(mapStateToProps)(UserDisplay);