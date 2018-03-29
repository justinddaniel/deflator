import {resetUserForm} from './userForm';

// ** Action Creators **
const setUsers = users => {
  return {
    type: 'GET_USERS_SUCCESS',
    users
  }
}

const addUser = user => {
  return {
    type: 'CREATE_USER_SUCCESS',
    user
  }
}

const likeUser = user => {
  return {
    type: 'LIKE_USER_SUCCESS',
    user
  }
} 

const headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json'
}

// ** Async Actions **
export const getUsers = () => {
    return dispatch => {
      return fetch(`/api/users`, {headers})
      .then(response => response.json())
      .then(users => dispatch(setUsers(users)))
      .catch(error => console.log(error));
  }
}
export const createUser = (user, cb) => {
  return dispatch => {
    return fetch(`/api/users`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ user: user })
    })
      .then(response => response.json())
      .then(user => {
        dispatch(addUser(user))
        cb()
        dispatch(resetUserForm())
      })
      .catch(error => console.log(error))
  }
}

export const editUserLikes = (user, cb) => {
  return dispatch => {
    return fetch(`/api/users/${user.id}`, {
      method: "PUT",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ user: user })
    })
      .then(response => response.json())
      .then(user => {
        dispatch(likeUser(user))
        cb()
      })
      .catch(error => console.log(error))
  }
}  