import React, { Component } from 'react';
const API_KEY = '730350ee1e4612d1b79e8805dea7d388';

class Form extends Component {
  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    this.clearInputFields(e);

    const apiCall = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);

    if (apiCall) {
      const apiData = await apiCall.json();
      console.log(apiData);
      this.props.returnApiResponse(apiData); // return data to the app component
    }
  }

  clearInputFields(e) {
    e.target.elements.city.value = '';
    e.target.elements.country.value = '';
  }

  render() {
    return (
      <form onSubmit={this.getWeather}>
        <input type="text" name="city" placeholder="City..." required/>
        <input type="text" name="country" placeholder="Country..." required/>
        <button type="submit">Get Weather</button>
      </form>
    )
  }
}

export default Form;