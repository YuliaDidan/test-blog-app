import { ADD_USER } from '../actions/types';

const initState = {
  users: []
};

const usersReducer = (state = initState, action) => {
  switch (action.type) {
  case ADD_USER:
    return {...state, users: [...state.users, action.payload] }
  default:
    return state;
  }
}

export default usersReducer;
