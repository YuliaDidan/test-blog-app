import React, { Component} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPosts } from '../actions/PostActions'; 

class PostList extends Component {  componentDidMount() {    
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
                    <span className="card-title">{post.title}</span>
                    </Link>
                    <div className="card-action grey-text">
                      <div >{post.body}</div>
                      <div className="green-text">Posted by Yulia Didan</div>
                      <div className="green-text">26 May, 10am</div>
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