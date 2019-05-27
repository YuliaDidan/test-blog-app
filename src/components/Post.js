import React, { Component } from 'react';
import Comments from './Comments'
import { connect } from 'react-redux';
import { deletePost } from '../actions/PostActions';

class Post extends Component {
  handleClick = () => {
    this.props.deletePost(this.props.post.id);
    this.props.history.push('/');
  }
  
  render(){   
      const post = this.props.post ? (
      <div className="card z-depth-0">                       
          <div className="card-content grey-text text-darken-3">                            
              <h2>{this.props.post.title}</h2>                
              <p>{this.props.post.body}</p>
              <p>Posted by Yulia Didan</p>
              <p>24 May, 9am</p>
            </div>
            <div>
              <Comments />
            </div>
            <div className="input-field">
              <button className="btn pink lighten-1 z-depth-0" onClick={this.handleClick}>Delete Post</button>
            </div>
          </div>         
    ) : (
      <div className="row">
        <div className="column">Loading Post</div>
      </div>
    )
    return (
      <div className="ui container">
        <h4>{ post }</h4>
      </div>
    )
  } 
}

const mapStateToProps = (state, ownProps) => {   
  let id = ownProps.match.params.post_id; 
  let post = state.posts.find(elem => elem.id === +id);
  console.log('post', post) 
  return {
    post: post,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deletePost: (id) => {dispatch(deletePost(id))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post);