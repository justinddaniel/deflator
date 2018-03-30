import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

class UserDisplay extends Component {

	render() {

		const user = this.state.user

		return <div>
		<h2>Username: {user.name} </h2>
		
		<p>Weight (lbs): {user.weight}</p>
		
		<p>Height (inches): {user.height}</p>
		
		<p>Body Mass Index (BMI): {user.bmi}</p>
		
		<p>Weight goal (lbs): {user.weight_goal}</p>
		
		<p>Weekly Target (lbs lost): {user.weekly_target}</p>
		
		<p>Calorie Allotment: {user.calorie_allot}</p>
	</div>
	}
}

const mapStateToProps = (state, ownProps) => {
  return ({
    user: state.user
  })
} 

export default connect(mapStateToProps, {})(UserDisplay);