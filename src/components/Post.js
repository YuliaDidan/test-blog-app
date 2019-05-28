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
              <div className="row">
                <div className="col">
                  <div className="card post-card z-depth-0">                       
                    <div className="card-content ">                            
                        <h3 className="blue-text text-darken-4">{this.props.post.title}</h3>                
                        <p className="flow-text grey-text text-darken-3">{this.props.post.body}</p>
                        <p className="flow-text indigo-text text-lighten-1">Posted by {this.props.post.author}</p>
                        <p className="flow-text indigo-text text-lighten-1">{this.props.post.date}</p>
                      </div>
                      <div>
                        <Comments postId={this.props.post.id} />
                      </div>
                      <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0" onClick={this.handleClick}>Delete Post</button>
                      </div>
                    </div>  
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
  // console.log('post.id', post.id);   
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