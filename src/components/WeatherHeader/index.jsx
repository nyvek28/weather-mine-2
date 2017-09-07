import React from 'react'
import './styles.scss'

const WeatherHeader = ({ temperture, city, description }) => {
  return (
    <div className="weather-header">
      <div className="temperture">
        <p>{temperture || 0}°</p>
      </div>
      <div className="weather-info">
        <h3>{city ? `Weather in ${city}` : 'No city found'}</h3>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default WeatherHeader
