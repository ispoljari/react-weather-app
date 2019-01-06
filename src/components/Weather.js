import React, { Component } from 'react';

class Weather extends Component {
  render() {
    return (
      <div>
        <p>Location: { this.props.apiData.city }, { this.props.apiData.country } </p>
        <p>Temperature: { this.props.apiData.temperature }</p>
        <p>Humidity: { this.props.apiData.humidity }</p>
        <p>Conditions: { this.props.apiData.description }</p>
      </div>
    );
  }
};

export default Weather;