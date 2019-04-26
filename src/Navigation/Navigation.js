import React, { Component } from 'react';
import './Navigation.css';
import { NavLink } from 'react-router-dom';


class Navigation extends Component {
    render() {
        return (
            <div className="Navigation">
                <NavLink exact to="/">Home</NavLink>
                <NavLink exact to="/blog">Blog</NavLink>
                <NavLink exact to="/about">About</NavLink>
            </div>
        );
    }
}

export default Navigation;