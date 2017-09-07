import React from 'react'
import './styles.scss'

const WeatherForm = ({ zip, isFetching, onFetchWeather, onType, isZipInvalid }) => {
  return (
    <div className="weather-form">
      <div>
        <p>ZIP CODE</p>
        <input value={zip} onChange={onType} className={isZipInvalid && 'invalid-zip'}/>
      </div>
      <button onClick={onFetchWeather}>{isFetching ? '...' : 'Submit'}</button>
    </div>
  )
}

export default WeatherForm
