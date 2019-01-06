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
    if (data) {
      if (parseInt(data.cod, 10) === 200) {
        this.setState({
          apiData: {
            country: data.sys.country,
            city: data.name,
            temperature: data.main.temp,
            humidity: data.main.humidity,
            description: data.weather[0].description,
            error: undefined
          }
        });
      } 
      
      if (parseInt(data.cod, 10) !== 200) {
        this.setState({
          apiData: {
            country: undefined,
            city: undefined,
            temperature: undefined,
            humidity: undefined,
            description: undefined,
            error: data.message
          }
        });
      }
    }
  }

  render() {
    return (
      <div className="wrapper">
        <div className="main">
          <div className="container">
            <div className="row">
              <div className="col-xs-5 title-container">
                <Titles />
              </div>
              <div className="col-xs-7 form-container">
                <Form returnApiResponse = {data => this.updateData(data)}/>
                <Weather apiData = {this.state.apiData}/>
              </div>
            </div> 
          </div>
        </div>
      </div>
    );
  }
};

export default App;