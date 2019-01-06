import React from 'react';

const Weather = props => (
    <div>
      { props.apiData.city && props.apiData.country && 
      <p>Location: { props.apiData.city }, { props.apiData.country } </p> }
      { props.apiData.temperature && <p>Temperature: { props.apiData.temperature }</p> }
      { props.apiData.humidity && <p>Humidity: { props.apiData.humidity }</p> }
      { props.apiData.description && <p>Conditions: { props.apiData.description }</p> }
      { props.apiData.error && <p>Error: { props.apiData.error }</p> }
    </div>
);

export default Weather;