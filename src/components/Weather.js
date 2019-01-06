import React from 'react';

const Weather = props => (
    <div className="weather__info">
      { 
        props.apiData.city && props.apiData.country && 
        <p className="weather__key">
          Location: 
          <span className="weather__value"> { props.apiData.city }, { props.apiData.country } </span>
        </p> 
      }
      { 
        props.apiData.temperature && 
        <p className="weather__key">
          Temperature: 
          <span className="weather__value"> { props.apiData.temperature } °C</span>
          </p> 
      }
      { 
        props.apiData.humidity && 
        <p className="weather__key">
          Humidity: 
          <span className="weather__value"> { props.apiData.humidity }%</span>
          </p> 
      }
      { 
        props.apiData.description && 
        <p className="weather__key">
          Conditions: 
          <span className="weather__value"> { props.apiData.description }</span>
          </p> 
      }
      { 
        props.apiData.error && 
        <p className="weather__key">
          Error: 
          <span className="weather__value"> { props.apiData.error }</span>
          </p> 
      }
    </div>
);

export default Weather;