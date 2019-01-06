import React, { Component } from 'react';
import Titles from './components/Titles';
import Form from './components/Form';
import Weather from './components/Weather';
import './App.css';

class App extends Component {
  displayData = data => {
    console.log(data);
  }

  render() {
    return (
      <div>
        <Titles />
        <Form returnApiResponse = {(data) => this.displayData(data)}/>
        <Weather />
      </div>
    );
  }
};

export default App;