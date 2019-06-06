import { FETCH_POSTS,
         ADD_POST,
         DELETE_POST} from '../actions/types'

const initState = { posts: [] };

const postsReducer = (state = initState, action) => {
  switch (action.type) {
    case FETCH_POSTS:
     return  {...state, posts: action.payload};

    case ADD_POST:
      return {...state, posts: [...state.posts, action.payload]};

    case DELETE_POST:
      let newPosts = state.posts.filter(post => action.payload.id !== post.id);
      return {...state, posts: newPosts}
    default:
     return state;
  }
}

export default postsReducer;
