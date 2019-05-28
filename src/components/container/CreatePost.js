import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addPost } from '../../actions/PostActions';
import moment from 'moment';


export class CreatePost extends Component {
  state = {
    date: moment().format('MMMM Do YYYY, h:mm:ss a'),
    author: '',
    title: '',
    body: '',  
    
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addPost(this.state);
    this.props.history.push('/');
  }

  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="grey-text text-darken-3">New Blog</h5>
            <div className="input-field">
              <label htmlFor="title">Author</label>
              <input type="text" id="author" onChange={this.handleChange}/>
            </div>
            <div className="input-field">
              <label htmlFor="title">Title</label>
              <input type="text" id="title" onChange={this.handleChange}/>
            </div>
            <div className="input-field">
              <label htmlFor="body">Content</label>
              <textarea id="body" className="materialize-textarea" onChange={this.handleChange}></textarea>              
            </div>
            <div className="input-field">
              <button className="btn pink lighten-1 z-depth-0">Create</button>
            </div>
        </form>        
      </div>
    )
  }
}

export default connect(null, { addPost } )(CreatePost)