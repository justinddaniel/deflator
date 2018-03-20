import React, { Component } from 'react';

class InfoEntry extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '', 
      weight: '',
      height: '',
      bmi: '',
      weight_goal: '',
      weekly_target: '',
      calorie_allot: ''
    }
  }

  handleOnChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    })
  }

  handleOnSubmit = event => {
    event.preventDefault();
    const user = this.state;
    this.props.addUser(user)
    this.setState({
      name: '', 
      weight: '',
      height: '',
      bmi: '',
      weight_goal: '',
      weekly_target: '',
      calorie_allot: ''
    })
  }

  render() {
    return (
      <form onSubmit={this.handleOnSubmit}>
        <label htmlFor="user_name">Name</label>
        <input 
          type="text"
          name="name"
          value={this.state.name} 
          onChange={this.handleOnChange}
          placeholder="User Name"
        />

        <label htmlFor="user_weight">Weight</label>
        <input 
          type="number"
          name="weight"
          value={this.state.weight} 
          onChange={this.handleOnChange}
          placeholder="User Weight (lbs)"
        />

        <label htmlFor="user_height">Height</label>
        <input 
          type="number"
          name="height"
          value={this.state.height} 
          onChange={this.handleOnChange}
          placeholder="User Height (inches)"
        />

        <label htmlFor="user_bmi">BMI</label>
        <input 
          type="number"
          name="bmi"
          value={this.state.bmi} 
          onChange={this.handleOnChange}
          placeholder="User Body Mass Index (BMI)"
        />

        <label htmlFor="user_weight_goal">Weight Goal</label>
        <input 
          type="number"
          name="weight_goal"
          value={this.state.weight_goal} 
          onChange={this.handleOnChange}
          placeholder="Weight Goal (lbs)"
        />

        <label htmlFor="user_weekly_target">Weekly Target</label>
        <input 
          type="number"
          name="weekly_target"
          value={this.state.weekly_target} 
          onChange={this.handleOnChange}
          placeholder="Weekly target (lbs lost)"
        />

        <label htmlFor="user_calorie_allot">Calorie Allotment</label>
        <input 
          type="number"
          name="calorie_allot"
          value={this.state.calorie_allot} 
          onChange={this.handleOnChange}
          placeholder="Callorie Allotment (calories/day)"
        />

        <button>Add User</button>
      </form>
    )
  }
}

export default InfoEntry;