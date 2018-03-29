export default (state = [], action) => {
  switch(action.type) {
    case 'GET_USERS_SUCCESS':
      return action.users;

    case 'CREATE_USER_SUCCESS':
      return state.concat(action.user);

    case 'LIKE_USER_SUCCESS':
    	return action.user;

    default: 
      return state;
  }
}