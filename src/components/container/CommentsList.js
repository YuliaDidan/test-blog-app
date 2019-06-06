import React, { Component } from 'react';
import { connect } from 'react-redux';
import  { fetchComments } from '../../actions';

class CommentsList extends Component {

  componentDidMount() {
    this.props.fetchComments(this.props.postId);
  }

  render() {
    const { comments } = this.props;
    const commentsList = comments.length ? (
            comments.map(comment => {
          return (
            <li key={comment.id} className="collection-item avatar">
              <i className ="material-icons circle">face</i>
              <p className="flow-text grey-text text-darken-3">{comment.body}</p>
            <a href="#!" className="secondary-content"><i className="material-icons">grade</i></a>
            </li>
          )
        }
      )
    ) : (<div>No posts yet</div>  )

    return (
      <div>{commentsList}</div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log('state with comments', state.comments)
  return {
    comments: state.comments.comments,
  }
}

export default connect( mapStateToProps, { fetchComments })(CommentsList);
