import React from 'react';
import CommentsForm from '../container/CommentsForm';
import CommentsList from '../container/CommentsList';


const Comments = ({postId}) => {  
    return (
      <div>
        <CommentsForm postId={postId} />
        <span className="blue-text text-darken-4">Comments</span>
        <ul className="collection">          
          <CommentsList postId={postId} />
        </ul>                 
      </div>     
    )
  }


export default Comments;