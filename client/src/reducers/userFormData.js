const initialState = {
  name: '', 
  weight: 0, 
  height: 0, 
  bmi: 0,
  weekly_target: 0,
  weight_goal: 0,
  calorie_allot: 0
}

export default (state = initialState, action) => {

  switch(action.type) {
    case 'UPDATED_DATA':
      return action.userFormData;

    case 'RESET_USER_FORM':
      return initialState;
    
    default: 
      return state;
  }
}