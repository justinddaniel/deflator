export default (state = [], action) => {
  switch(action.type) {
    case 'GET_USERS_SUCCESS':
      return action.users;

    case 'CREATE_USERS_SUCCESS':
      return state.concat(action.user);

    default: 
      return state;
  }
}