import axios from 'axios'

export const fetchWeather = (zip = 78729) => {
  return {
    type: "FETCH_WEATHER",
    payload: axios.get(`http://api.openweathermap.org/data/2.5/weather?appid=b1f9075afcb92b7cd9b494ede3b6b182&zip=${zip}`)
  }
}

export const setZipCode = (zip) => {
  return {
    type: "SET_ZIP_CODE",
    payload: zip
  }
}
