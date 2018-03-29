export default (state = [], action) => {
  switch(action.type) {
    case 'GET_USERS_SUCCESS':
      return action.users;

    case 'CREATE_USER_SUCCESS':
      return state.concat(action.user);

    case 'LIKE_USER_SUCCESS':
    // map over the current users and only replace the one user that we get back from the server
      return state.map((user) => {
        if (user.id === action.user.id) {
          return action.user
        }
        else {return user}
      })

    default: 
      return state;
  }
}