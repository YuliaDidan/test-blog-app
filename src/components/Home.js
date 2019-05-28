import React from 'react';
import PostList from './PostList';

const Home = () => {
  return (
    <div className="container">
        <div className="row">
          <div className="col">
            <h3 className="indigo-text text-accent-2">All the posts for you</h3>
            <PostList />
          </div>          
        </div>
      </div>
  )
}

export default Home;