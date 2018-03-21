import {
  createStore, 
  applyMiddleware,
  combineReducers
} from 'redux';
import thunk from 'redux-thunk';

import users from './reducers/users';
import userFormData from './reducers/userFormData';

const reducers = combineReducers({
  users,
  userFormData
});
const middleware = [thunk];

export default createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(...middleware),
);