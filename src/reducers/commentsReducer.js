import { FETCH_COMMENTS, ADD_COMMENT } from './../actions/types';

const initState = {
  comments: []
}

const commentsReducer = (state = initState, action) => {
  switch(action.type){

    case FETCH_COMMENTS:
      return {...state, comments: action.payload}

    case ADD_COMMENT:
      return {...state, comments: [...state.comments, action.payload]};

    default:
      return state
  }
}

export default commentsReducer;
