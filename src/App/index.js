import React, { Component } from 'react';
import './app.css';
import Routes from './routes'
import CMS from './services/CMS'

class App extends Component {
  render() {
    CMS.Profile.then((data) => {
      console.log(data)
    })

    return (
      <Routes></Routes>
    );
  }
}

export default App;
