import React, { Component } from 'react'
import { connect } from 'react-redux'

import { WeatherHeader, WeatherForm } from './../../components'
import { fetchWeather, setZipCode } from './../../actions/weatherActions'
import './styles.scss'

@connect(store => store.weather)
class WeatherFinder extends Component {
  handleOnFetchWeather = () => {
    const { dispatch, zip } = this.props
    dispatch(fetchWeather(zip))
  }

  handleOnType = (e) => {
    const { dispatch } = this.props
    dispatch(setZipCode(e.target.value))
  }

  render () {
    const { isFetching, zip, temperture, city, description, isZipInvalid } = this.props
    return (
      <div className="weather-finder">
        <WeatherHeader
          temperture={temperture}
          city={city}
          description={description}
        />
        <WeatherForm
          zip={zip}
          isFetching={isFetching}
          onType={this.handleOnType}
          onFetchWeather={this.handleOnFetchWeather}
          isZipInvalid={isZipInvalid}
        />
      </div>
    )
  }
}

export default WeatherFinder
