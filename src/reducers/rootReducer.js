import { FETCH_POSTS,
         ADD_POST,
         ADD_COMMENT,
         DELETE_POST,
         FETCH_COMMENTS } from '../actions/types'

const initState = {
  posts: [],
}

const rootReducer = (state = initState, action) => {  
  switch (action.type) {
    case FETCH_POSTS:     
     return  {...state, posts: action.payload};

    case ADD_POST:             
      return {...state, posts: [...state.posts, action.payload]};

    case FETCH_COMMENTS: 
      let getIndexForFetch = (arr, id) => {
        for (let el of arr) {
          if(el.id === id) {
            return arr.indexOf(el);  
          };
        };
      }; 
      let postsChangedComments = [...state.posts];      
      postsChangedComments.splice(getIndexForFetch(state.posts, action.payload.id), 1, action.payload);
      return {...state, posts: postsChangedComments};

    case ADD_COMMENT:
      console.log('action.id', action.payload.id)
      let getIndex = (arr, id) => {
        for (let el of arr) {
          if(el.id === id) {
             return arr.indexOf(el);  
          };
        };
      }; 
      let postsChanged = [...state.posts];      
      postsChanged.splice(getIndex(state.posts, action.payload.id), 1, action.payload);
      return {...state, posts: postsChanged};
      
    case DELETE_POST:
      let newPosts = state.posts.filter(post => {      
      return action.payload.id !== post.id
      });    
      return {...state, posts: newPosts}
    default:
     return state; 
  }
}

export default rootReducer;