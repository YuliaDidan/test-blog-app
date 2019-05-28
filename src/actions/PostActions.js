import jsonPlaceholder from '../apis/jsonPlaceholder';
import { FETCH_POSTS,
         ADD_POST,
         ADD_COMMENT,
         FETCH_COMMENTS,
         DELETE_POST } from './types'

export const fetchPosts = () => async dispatch => {
  const response = await jsonPlaceholder.get('/posts');
  dispatch({ type: FETCH_POSTS, payload: response.data });
};


export const addPost = (newPost) => async dispatch => {  
  const response = await jsonPlaceholder.post('/posts', newPost);  
  dispatch({ type: ADD_POST, payload: response.data});                                                                                                                                                            
};

export const fetchComments = (id) => async dispatch => {
  const response = await jsonPlaceholder.get(`/posts/${id}?_embed=comments`);
  dispatch({ type: FETCH_COMMENTS, payload: response.data});
}

export const addComment = (comment) => async dispatch => {
  const response = await jsonPlaceholder.post('/comments', comment);  
  const finalResponse = await jsonPlaceholder.get(`/posts/${response.data.postId}?_embed=comments`); 
  dispatch({ type: ADD_COMMENT, payload: finalResponse.data});
}

export const deletePost = (id) => async dispatch => {
  await jsonPlaceholder.delete(`/posts/${id}`)
  dispatch({ type: DELETE_POST, payload: id });
}