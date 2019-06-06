import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Navbar from './components/presentational/Navbar';
import Home from './components/presentational/Home';
import CreatePost from './components/container/CreatePost';
import Post from './components/container/Post';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/create' component={CreatePost} />
            <Route path='/:post_id' component={Post} />
          </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
