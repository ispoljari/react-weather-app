import React, { Component } from 'react';

class Weather extends Component {
  render() {
    return (
      <div>
        {this.props.apiData.name}
      </div>
    );
  }
};

export default Weather;