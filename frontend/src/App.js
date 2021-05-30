import React, {Component} from 'react';
import './App.css';
import Sidebar from './components/sidebar'
import About from './components/about'
import Education from './components/education'
import Experience from './components/experience'
import Home from './components/home'
import Services from './components/services'
import Skills from './components/skills'
import Work from './components/work'

class App extends Component {
  render() {
    return (
      <div id="cololib-page">
        <div id="container-wrap">
        <Sidebar></Sidebar>
        <div id="colorlib-main">
          <Home></Home>
          <About></About>
          <Education></Education>
          <Experience></Experience>
          <Services></Services>
          <Skills></Skills>
          <Work></Work>
        </div>
        </div>
      </div>
    );
  }
}

export default App;
