import React, { Component } from 'react';
import { connect } from 'react-redux';
import  { fetchComments } from '../../actions/PostActions';

class CommentsList extends Component {

  componentDidMount() {    
    this.props.fetchComments(this.props.postId);
  }

  render() {
    const { posts } = this.props;
    const postWithComments = posts.find(elem => elem.id === this.props.postId);
    console.log('comments.length', typeof postWithComments.comments);
    const commentsList = postWithComments.comments ? (
        postWithComments.comments.map(comment => {
          return (
            <li key={comment.id} className="collection-item avatar">
              <i className ="material-icons circle">face</i>
              <p>{comment.body}</p>
            <a href="#!" className="secondary-content"><i className="material-icons">grade</i></a>
            </li>
          )
        }        
      )
    ) : (<div>No posts yet</div>  )
    
    return (
      <div>{commentsList}</div>
      // <div>Hello</div>
    )
  }  
}

const mapStateToProps = (state) => {
  console.log('state with comments', state.posts)     
  return {
    posts: state.posts,
  }
}

export default connect(mapStateToProps, { fetchComments })(CommentsList);