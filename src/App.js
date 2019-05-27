import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './components/Home';
import CreateBlog from './components/CreateBlog';
import Post from './components/Post';



function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
          <Switch>        
            <Route exact path='/' component={Home} />
            <Route path='/create' component={CreateBlog} />
            <Route path='/:post_id' component={Post} /> 
          </Switch>                       
      </div>
    </BrowserRouter>    
  );
}

export default App;
