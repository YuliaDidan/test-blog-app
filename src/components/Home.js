import React from 'react';
import PostList from './PostList';

const Home = () => {
  return (
    <div className="container">
        <div className="row">
          <div className="col">
            <h2 className="">All the posts for you</h2>
            <PostList />
          </div>          
        </div>
      </div>
  )
}

export default Home;