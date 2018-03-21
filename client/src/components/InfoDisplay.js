import React from 'react';
import { connect } from 'react-redux';

const User = ({ user }) => {
  return (
    <div>
      {user ?
        <div>
          <h3>{user.name}</h3>
          <p>Weight: {user.weight}</p><br></br>
          <p>Height: {user.height}</p><br></br>
          <p>BMI: {user.bmi}</p><br></br>
          <p>Weekly Target: {user.weekly_target}</p><br></br>
          <p>Weight Goal: {user.weight_goal}</p><br></br>
          <p>Calorie Allotment: {user.calorie_allot}</p><br></br>
        </div>
        :
        <div>
          ...loading please wait 
        </div>
      }
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.users.find(user => user.id == ownProps.match.params.userId)
  }
}

export default connect(mapStateToProps)(User);