import React, { Component } from 'react';

class Form extends Component {
  executeForm = (e) => {
    e.preventDefault();
    this.props.getWeather();
  }

  render() {
    return (
      <form onSubmit={this.executeForm}>
        <input type="text" name="city" placeholder="City..."/>
        <input type="text" name="country" placeholder="Country..."/>
        <button type="submit">Get Weather</button>
      </form>
    )
  }
}

export default Form;