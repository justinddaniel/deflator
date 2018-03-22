import React, { Component } from 'react';
import {connect} from 'react-redux';
import {updateUserFormData} from '../actions/userForm.js';
import {createUser} from '../actions/users.js';

class InfoEntry extends Component {

  handleOnChange = event => {
    const { name, value } = event.target;
  const currentUserFormData = Object.assign({}, this.props.userFormData, {
      [name]: value
    })
    this.props.updateUserFormData(currentUserFormData)
  }

  handleOnSubmit = event => {
    event.preventDefault();
    this.props.createUser(this.props.userFormData)
    }
  

  render() {
    const {name, weight, height, bmi, weight_goal, weekly_target, calorie_allot} = this.props.userFormData
    return (
      <div>Add a User
      <form onSubmit={this.handleOnSubmit}>
        <label htmlFor="user_name"> Name </label>
        <input 
          type="text"
          name="name"
          value={name} 
          onChange={this.handleOnChange}
          placeholder="User Name"
        /><br></br>

        <label htmlFor="user_weight"> Weight </label>
        <input 
          type="number"
          name="weight"
          value={weight} 
          onChange={this.handleOnChange}
        /><br></br>

        <label htmlFor="user_height"> Height </label>
        <input 
          type="number"
          name="height"
          value={height} 
          onChange={this.handleOnChange}
        /><br></br>

        <label htmlFor="user_bmi"> BMI </label>
        <input 
          type="number"
          name="bmi"
          value={bmi} 
          onChange={this.handleOnChange}
        /><br></br>

        <label htmlFor="user_weight_goal"> Weight Goal </label>
        <input 
          type="number"
          name="weight_goal"
          value={weight_goal} 
          onChange={this.handleOnChange}
        /><br></br>

        <label htmlFor="user_weekly_target"> Weekly Target </label>
        <input 
          type="number"
          name="weekly_target"
          value={weekly_target} 
          onChange={this.handleOnChange}
        /><br></br>

        <label htmlFor="user_calorie_allot"> Calorie Allotment </label>
        <input 
          type="number"
          name="calorie_allot"
          value={calorie_allot} 
          onChange={this.handleOnChange}
        /><br></br><br></br>

        <button>Add User</button>
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
})(InfoEntry);