import React from 'react';
const API_KEY = '730350ee1e4612d1b79e8805dea7d388';

const Form = props => {
  const getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    clearInputFields(e);

    const apiCall = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);

    if (apiCall) {
      const apiData = await apiCall.json();
      props.returnApiResponse(apiData); // return data to the app component
    }
  }

  function clearInputFields(e) {
    e.target.elements.city.value = '';
    e.target.elements.country.value = '';
  }

  return (
    <form onSubmit={getWeather}>
      <input type="text" name="city" placeholder="City..." required/>
      <input type="text" name="country" placeholder="Country..." required/>
      <button type="submit">Get Weather</button>
    </form>
  )
}

export default Form;