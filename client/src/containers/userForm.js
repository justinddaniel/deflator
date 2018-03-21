import React, { Component } from 'react';
import { connect } from 'react-redux';

import { updateUserFormData } from '../actions/userForm';
import { createUser } from '../actions/users';

class UserForm extends Component {

  handleOnChange = event => {
    const { name, value } = event.target;
    const currentUserFormData = Object.assign({}, this.props.userFormData, {
      [name]: value
    })
    this.props.updateUserFormData(currentUserFormData)
  }

  handleOnSubmit = event => {
    event.preventDefault()
    this.props.createUser(this.props.userFormData)
  }

  render() {
    const { name, weight, height, bmi, weekly_target, weight_goal, calorie_allot } = this.props.userFormData;

    return (
      <div>
        Add A User
        <form onSubmit={this.handleOnSubmit}>
          <div>
            <label htmlFor="name"> Name: </label>
            <input 
              type="text"
              onChange={this.handleOnChange}
              name="name"
              value={name}
            />
          </div>
          <div>
            <label htmlFor="weight"> Weight (lbs): </label>
            <input 
              type="number"
              onChange={this.handleOnChange}
              name="weight"
              value={weight}
            />
          </div>
          <div>
            <label htmlFor="height"> Height inches: </label>
            <input 
              type="number"
              onChange={this.handleOnChange}
              name="height"
              value={height}
            />
          </div>
          <div>
            <label htmlFor="bmi"> Body Mass Index (bmi): </label>
            <input 
              type="number"
              onChange={this.handleOnChange}
              name="bmi"
              value={bmi}
            />
          </div>
          <div>
            <label htmlFor="weekly_target"> Weekly Target (lbs): </label>
            <input 
              type="number"
              onChange={this.handleOnChange}
              name="weekly_target"
              value={weekly_target}
            />
          </div>
          <div>
            <label htmlFor="weight_goal"> Weight Goal (lbs): </label>
            <input 
              type="number"
              onChange={this.handleOnChange}
              name="weight_goal"
              value={weight_goal}
            />
          </div>
          <div>
            <label htmlFor="calorie_allot"> Calorie Allotment per day: </label>
            <input 
              type="number"
              onChange={this.handleOnChange}
              name="calorie_allot"
              value={calorie_allot}
            />
          </div>


          <button type="submit">Add User</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    userFormData: state.userFormData
  }
}

export default connect(mapStateToProps, { 
  updateUserFormData,
  createUser
})(UserForm);