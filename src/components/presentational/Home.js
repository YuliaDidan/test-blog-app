import React from 'react';
import PostList from '../container/PostList';

const Home = () => {
  return (
    <div className="container">
        <div className="row">
          <div className="col">
            <h3 className="indigo-text text-accent-2 center">All the posts for you</h3>            
          </div>
          <div className="col">
            <PostList />           
          </div>          
        </div>
      </div>
  )
}

export default Home;