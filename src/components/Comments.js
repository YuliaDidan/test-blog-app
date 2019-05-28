import React from 'react';
import CommentsForm from './CommentsForm';
import CommentsList from './CommentsList';


const Comments = ({postId}) => { 
  // console.log('postId', postId) 
    return (
      <div>
        <CommentsList />        
        <CommentsForm postId={postId} />        
      </div>     
    )
  }


export default Comments;