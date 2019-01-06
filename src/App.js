import React, { Component } from 'react';
import Titles from './components/Titles';
import Form from './components/Form';
import Weather from './components/Weather';
import './App.css';

const API_KEY = '730350ee1e4612d1b79e8805dea7d388';

class App extends Component {
  getWeather = async () => {
    const apiCall = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=${API_KEY}&units=metric`);
    const apiData = await apiCall.json();
    console.log(apiData);
  }

  render() {
    return (
      <div>
        <Titles />
        <Form getWeather={this.getWeather}/>
        <Weather />
      </div>
    );
  }
};

export default App;