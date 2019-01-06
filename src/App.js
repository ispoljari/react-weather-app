import React, { Component } from 'react';
import Titles from './components/Titles';
import Form from './components/Form';
import Weather from './components/Weather';
import './App.css';

class App extends Component {
  state = {
    apiData: {
      country: undefined,
      city: undefined,
      temperature: undefined,
      humidity: undefined,
      description: undefined,
      error: undefined
    }
  }

  updateData = data => {
    this.setState({
      apiData: {
        country: data.sys.country,
        city: data.name,
        temperature: data.main.temp,
        humidity: data.main.humidity,
        description: data.weather[0].description
      }
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