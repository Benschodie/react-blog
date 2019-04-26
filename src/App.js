import React, {Component} from 'react';
import './App.css';
import Navigation from './Navigation/Navigation'
import { Route } from 'react-router-dom';
import Blog from './Blog/Blog';
import Home from "./Home/Home";
import About from "./About/About";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Route exact path="/" render = { () => <Home /> } />
        <Route exact path="/blog" render={() => <Blog />} />
        <Route exact path="/about" render={() => <About />} />
      </div>
    );
  } 
}

export default App;
