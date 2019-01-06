import React, { Component } from 'react';
import Titles from './components/Titles';
import Form from './components/Form';
import Weather from './components/Weather';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apiData: ''
    }
  }

  updateData = data => {
    this.setState({
      apiData: data
    })
  }

  render() {
    return (
      <div>
        <Titles />
        <Form returnApiResponse = {data => this.updateData(data)}/>
        <Weather apiData = {this.state.apiData}/>
      </div>
    );
  }
};

export default App;