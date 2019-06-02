import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {  
  
  return (
          <nav className="nav-wrapper blue darken-3">
            <div className="container">
                <Link to="/" className="brand-logo">
                  HappyBlog
                </Link>
              <ul className="right menu">                          
                <li><NavLink to="/" activeClassName="active">Home</NavLink></li>
                <li> <NavLink to='/create'>New Post</NavLink></li>
              </ul>        
          </div>
        </nav>   
  ) 
}

export default Navbar;