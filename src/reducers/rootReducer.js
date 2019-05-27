const initState = {
  posts: [],
}

const rootReducer = (state = initState, action) => {
  // console.log('action.payload', action.payload) 
  switch (action.type) {
    case 'FETCH_POSTS':     
     return  {...state, posts: action.payload};
     case 'ADD_POST':       
       return state
     case 'DELETE_POST':
      let newPosts = state.posts.filter(post => {      
        return action.id !== post.id
      });    
        return {...state, posts: newPosts}
    default:
     return state; 
  }
}

export default rootReducer;