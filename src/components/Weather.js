import React, { Component } from 'react';

class Weather extends Component {
  render() {
    return (
      <div>
        { this.props.apiData.city && this.props.apiData.country && 
        <p>Location: { this.props.apiData.city }, { this.props.apiData.country } </p> }
        { this.props.apiData.temperature && <p>Temperature: { this.props.apiData.temperature }</p> }
        { this.props.apiData.humidity && <p>Humidity: { this.props.apiData.humidity }</p> }
        { this.props.apiData.description && <p>Conditions: { this.props.apiData.description }</p> }
      </div>
    );
  }
};

export default Weather;