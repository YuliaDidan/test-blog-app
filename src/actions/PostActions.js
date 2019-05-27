import jsonPlaceholder from '../apis/jsonPlaceholder';

export const fetchPosts = () => async dispatch => {
  const response = await jsonPlaceholder.get('/posts');     

  dispatch({ type: 'FETCH_POSTS', payload: response.data });
  };

export const addPost = (newPost) => async dispatch => {

  const response = await jsonPlaceholder.post('/posts', newPost);

  dispatch({ type: 'ADD_POST', payload: response.data});                                                                                                                                                            
};

export const deletePost = (id) => async dispatch => {
  await jsonPlaceholder.delete(`/posts/${id}`)
  dispatch( {
    type: 'DELETE_POST',
    id
  })
}