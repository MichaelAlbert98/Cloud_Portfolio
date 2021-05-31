import React, {Component} from 'react';
import './App.css';
import Sidebar from './components/sidebar'
import About from './components/about'
import Experience from './components/experience'
import Home from './components/home'
import Skills from './components/skills'

class App extends Component {
  render() {
    return (
      <div id="cololib-page">
        <div id="container-wrap">
        <Sidebar></Sidebar>
        <div id="colorlib-main">
          <Home></Home>
          <About></About>
          <Experience></Experience>
          <Skills></Skills>
        </div>
        </div>
      </div>
    );
  }
}

export default App;
