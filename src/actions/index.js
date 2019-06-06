import _ from 'lodash';
import jsonPlaceholder from '../apis/jsonPlaceholder';
import { FETCH_POSTS,
         ADD_POST,
         ADD_USER,
         ADD_COMMENT,
         FETCH_COMMENTS,
         DELETE_POST } from './types'

export const fetchPosts = () => async dispatch => {
  const response = await jsonPlaceholder.get('/posts');
  dispatch({ type: FETCH_POSTS, payload: response.data });
};

export const fetchUser = (id) => dispatch => _fetchUser(id, dispatch);
const _fetchUser = _.memoize(async (id, dispatch) => {
  const response = await jsonPlaceholder.get(`/users/${id}`);
  dispatch({ type: ADD_USER, payload: response.data});
});

export const fetchComments = (id) => async dispatch => {
  const response = await jsonPlaceholder.get(`/comments?postId=${id}`);
  console.log('comments-response', response.data);
  dispatch({ type: FETCH_COMMENTS, payload: response.data});
};

export const addComment = (comment) => async dispatch => {
  const response = await jsonPlaceholder.post('/comments', comment);
  console.log('response_add_comment', response.data);
  dispatch({ type: ADD_COMMENT, payload: response.data});
}

export const addPost = (newPost) => async dispatch => {
  const response = await jsonPlaceholder.post('/posts', newPost);
  console.log('response.data', response.data)
  dispatch({ type: ADD_POST, payload: response.data});
};

export const deletePost = (id) => async dispatch => {
  await jsonPlaceholder.delete(`/posts/${id}`)
  dispatch({ type: DELETE_POST, payload: id });
}
