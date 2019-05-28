import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addComment } from '../../actions/PostActions';

export class CommentsFom extends Component {
  state = {    
    body: '',
    postId: '',
  }

  handleChange = (e) => {
    this.setState({
      body: e.target.value,
      postId: this.props.postId,
    })    
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addComment(this.state);
    this.setState({body: '', postId: ''});    
  }

  render() {        
    return (             
          <form onSubmit={this.handleSubmit} className="white">              
              <div className="input-field">
                <i className="material-icons prefix">mode_edit</i>              
                <textarea id="icon_prefix2" className="materialize-textarea" onChange={this.handleChange}></textarea>
                <label htmlFor="icon_prefix2">Your comment</label>
              </div>
              <div className="input-field">
                <button className="btn pink lighten-1 z-depth-0">Add comment</button>
              </div>
          </form>              
    )
  }
}

export default connect(null, { addComment } )(CommentsFom)