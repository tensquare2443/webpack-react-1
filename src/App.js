import React, {Component} from 'react';

import TopNav from './components/top-nav';
import Main from './components/main';

import changeSection from './functions/change-section.js';

import './App.css';
import './bootstrap/bootstrap.min.css';
// import './bootstrap/jquery-3.2.1.slim.min.js';
// import './bootstrap/popper.min.js';
// import './bootstrap/bootstrap.min.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      section: 'I'
    };
    this.changeSection = changeSection.bind(this)
  }

  // changeSection (e) {
  //   const section = e.currentTarget.innerText;
  //
  //   this.setState({section});
  // };

  render() {
    return(
      <div className="container">
        <TopNav changeSection={this.changeSection} section={this.state.section}/>
        <Main section={this.state.section}/>
      </div>
    );
  }
};

export default App;
