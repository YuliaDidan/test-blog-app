import React, { Component} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPosts } from '../actions/PostActions';

class PostList extends Component {  
  
  componentDidMount() {    
    this.props.fetchPosts();
  }

  render() {    
    const { posts } = this.props;
    const postList = posts.length ? (
      posts.map(post => {
        return (            
              <div className="card z-depth-0" key={post.id}>                             
                <div className="card-content">                  
                    <Link to={'/' + post.id}>
                    <h4 className="blue-text text-darken-4">{post.title}</h4>
                    </Link>
                    <div className="card-action grey-text">
                      <div >{post.body}</div>
                      <div className="indigo-text text-lighten-1">Posted by {post.author}</div>
                      <div className="indigo-text text-lighten-1">{post.date} </div>
                    </div>                                     
                  </div>
              </div>                                   
          )
        })
      ) : (        
          <div>No posts yet</div>       
      )
    return (
      <div>
        {postList} 
      </div>
    )      
  }  
}

const mapStateToProps = (state) => {   
  return {
    posts: state.posts,
  }
}

export default connect(mapStateToProps, { fetchPosts } )(PostList);