/* eslint linebreak-style: ["error", "windows"] */
import React from 'react';
import axios from 'axios';

class Weather extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      city: '',
      temperature: '',
      icon: ''
    };

    this.success = this.success.bind(this);
    this.error = this.error.bind(this);
    this.apiHelper = this.apiHelper.bind(this);
  }

  componentDidMount() {
    const options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    };

    navigator.geolocation.getCurrentPosition(this.success, this.error, options);
  }

  success(pos) {
    const latitude = pos.coords.latitude;
    const longitude = pos.coords.longitude;
    this.apiHelper(latitude, longitude).then(res => {
      this.setState({
        city: res.data.name,
        temperature: res.data.main.temp,
        icon: res.data.weather[0].icon
      });
    });
  }

  apiHelper(lat, lon) {
    // Move this to backend later to protect api key
    return axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=f02e9ad38636be6ba2296667fbde251b`);
  }

  error(err) {
    console.log(err);
  }

  render() {
    const {city, temperature, icon} = this.state;
    return (
      <div className="weatherStyle">
        {icon ? <img src={`http://openweathermap.org/img/w/${icon}.png`}/> : ''}
        <span>{Math.round(temperature - 272.15)}&deg;C</span><br/>
        <small>{city}</small>
      </div>
    );
  }
}

export default Weather;
