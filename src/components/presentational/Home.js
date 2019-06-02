import React from 'react';
import PostList from '../container/PostList';

const Home = () => {
  return (
    <div className="container">
      <h3 className="indigo-text text-accent-2 center">All the posts for you</h3>
      <PostList />
      </div>
  )
}

export default Home;
