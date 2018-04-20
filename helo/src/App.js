import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './component/nav/Nav';
import routes from './routes';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Nav/>  
          {routes}
      </div>
    );
  }
}

export default App;
