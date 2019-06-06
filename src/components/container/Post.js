import React, { Component } from 'react';
import Comments from '../presentational/Comments';
import { connect } from 'react-redux';
import { deletePost } from '../../actions';

class Post extends Component {

  handleClick = () => {
    this.props.deletePost(this.props.post.id);
    this.props.history.push('/');
  }

  render(){
      const post = this.props.post ? (
            <div className="container">
              <div className="card post-card z-depth-0">
                <div className="card-content " style={{padding: 0}}>
                  <h3 className="blue-text text-darken-4">{this.props.post.title}</h3>
                  <p className="flow-text grey-text text-darken-3">{this.props.post.body}</p>
                  <p className="flow-text indigo-text text-lighten-1">Posted by {this.props.user.name}</p>
                  {/* <p className="flow-text indigo-text text-lighten-1">{this.props.post.date}</p> */}
                </div>
                <div>
                  <Comments postId={this.props.post.id} />
                </div>
                <div className="input-field">
                  <button className="btn pink lighten-1 z-depth-0" onClick={this.handleClick}>Delete Post</button>
                </div>
              </div>
            </div>
    ) : (
      <div className="container center">
        <span className="flow-text">Loading Post</span>
      </div>
    )
    return (
      <div className="container">
        <h4>{ post }</h4>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  console.log('state.posts.posts', state.posts.posts);
  let id = ownProps.match.params.post_id;
  console.log('id', typeof id);
  let post = state.posts.posts.find(elem => {
    console.log('elem', elem);
    return elem.id === +id
  });
  console.log('post', post);
  let user = state.users.users.find(user => user.id === post.userId);
  return {
    post: post,
    user: user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deletePost: (id) => {dispatch(deletePost(id))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post);
