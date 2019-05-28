import jsonPlaceholder from '../apis/jsonPlaceholder';

export const fetchPosts = () => async dispatch => {
  const response = await jsonPlaceholder.get('/posts');     

  dispatch({ type: 'FETCH_POSTS', payload: response.data });
};


export const addPost = (newPost) => async dispatch => {  
  const response = await jsonPlaceholder.post('/posts', newPost);
  console.log('response', response);

  dispatch({ type: 'ADD_POST', payload: response.data});                                                                                                                                                            
};

export const addComment = (comment) => async dispatch => {
  const response = await jsonPlaceholder.post('/comments', comment);
  console.log('response', response);
  const finalResponse = await jsonPlaceholder.get(`/posts/${response.data.postId}?_embed=comments`);
  console.log(finalResponse); 
  
}

export const deletePost = (id) => async dispatch => {
  await jsonPlaceholder.delete(`/posts/${id}`)
  dispatch( {
    type: 'DELETE_POST',
    id
  })
}