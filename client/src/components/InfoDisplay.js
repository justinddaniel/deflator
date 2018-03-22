import React from 'react';
import { connect } from 'react-redux';

const User = ({ user }) => {
  return (
    <div>
      {user ?
        <div>
          <h3>{user.name}</h3>
          <p>Weight: {user.weight}</p>
          <p>Height: {user.height}</p>
          <p>BMI: {user.bmi}</p>
          <p>Weekly Target: {user.weekly_target}</p>
          <p>Weight Goal: {user.weight_goal}</p>
          <p>Calorie Allotment: {user.calorie_allot}</p>
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
    user: state.users.find(user => user.id === 1)
  }
}

export default connect(mapStateToProps)(User); 

/* connects to store */