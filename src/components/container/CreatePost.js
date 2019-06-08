import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Select } from 'react-materialize';
import moment from 'moment';
import { addPost } from '../../actions';


// const getRandomInt = (min, max) => {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }

export class CreatePost extends Component {
  state = {
    date: moment().format('MMMM Do YYYY, h:mm:ss a'),
    // author: '',
    title: '',
    body: '',
    // userId: getRandomInt(1, 10),
    userId: Number(''),
  }

  // handleChange = (e) => {
  //   this.setState({
  //     [e.target.id]: e.target.value,
  //   })
  // }

  onChangeUserId = (e) => {
    this.setState({
        userId: +e.target.value,
      })
  }

  onChangeTitle = (e) => {
    this.setState({
        title: e.target.value,
      })
  }

  onChangeBody = (e) => {
    this.setState({
        body: e.target.value,
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
            {/* <div className="input-field">
              <label htmlFor="title">Author</label>
              <input type="text" id="author" onChange={this.handleChange}/>
            </div> */}
            <Select id="userId" value={this.state.userId} onChange={this.onChangeUserId}>
              <option className="grey-text text-darken-3"  value="" disabled>
                Choose your UserName
              </option>
              <option value="1">
                Leanne Graham
              </option>
              <option  value="2">
                Ervin Howell
              </option>
              <option  value="3">
                Clementine Bauch
              </option>
              <option  value="4">
                Patricia Lebsack
              </option>
              <option  value="5">
                Chelsey Dietrich
              </option>
              <option  value="6">
                Mrs. Dennis Schulist
              </option>
              <option  value="8">
                Kurtis Weissnat
              </option>
              <option  value="9">
                Nicholas Runolfsdottir V
              </option>
              <option  value="10">
                Clementina DuBuque
              </option>
            </Select>
            <div className="input-field">
              <label htmlFor="title">Title</label>
              <input type="text" id="title" value={this.state.title} onChange={this.onChangeTitle}/>
            </div>
            <div className="input-field">
              <label htmlFor="body">Content</label>
              <textarea id="body" className="materialize-textarea" value={this.state.body} onChange={this.onChangeBody}></textarea>
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
