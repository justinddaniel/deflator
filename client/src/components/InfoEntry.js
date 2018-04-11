import React, { Component } from 'react';
import {connect} from 'react-redux';
import {updateUserFormData} from '../actions/userForm.js';
import {createUser} from '../actions/users.js';
import { Route, Switch } from 'react-router-dom';
import { Link } from 'react-router-dom';

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
    this.props.createUser(this.props.userFormData, function(){
      this.props.history.push('/api/users')
    }) 
  }
  

  render() {
    const {name, weight, height, bmi, weight_goal, weekly_target, calorie_allot} = this.props.userFormData
    return (
      <div>Add a User
      <form onSubmit={this.handleOnSubmit}>
        <label htmlFor="user_name"> Name : </label>
        <input 
          type="text"
          name="name"
          value={name} 
          onChange={this.handleOnChange}
          placeholder="User Name"
        /><br></br>

        <label htmlFor="user_weight"> Weight (in pounds) : </label>
        <input 
          type="number"
          name="weight"
          value={weight} 
          onChange={this.handleOnChange}
        /><br></br>

        <label htmlFor="user_height"> Height (in inches) : </label>
        <input 
          type="number"
          name="height"
          value={height} 
          onChange={this.handleOnChange}
        /><br></br>

        <label htmlFor="user_bmi"> Body Mass Index (BMI) : </label>
        <input 
          type="number"
          name="bmi"
          value={bmi} 
          onChange={this.handleOnChange}
        /><br></br><br></br>

        <span><Link to={"/bmihelp"}>Click here for help with BMI calculations</Link></span><br></br><br></br>

        <span><Link to={"/goalhelp"}>Click here for help with your goals</Link></span><br></br><br></br>

        <label htmlFor="user_weight_goal"> Weight Goal (pounds) : </label>
        <input 
          type="number"
          name="weight_goal"
          value={weight_goal} 
          onChange={this.handleOnChange}
        /><br></br>

        <label htmlFor="user_weekly_target"> Weekly Target (pounds lost/week) : </label>
        <input 
          type="number"
          name="weekly_target"
          value={weekly_target} 
          onChange={this.handleOnChange}
        /><br></br>

        <label htmlFor="user_calorie_allot"> Calorie Allotment (per day) : </label>
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