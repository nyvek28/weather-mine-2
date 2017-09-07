import { convertKelvinToFahrenheit } from './../utils'

export default (state = {
  city: 'Austin',
  temperture: 82,
  description: 'Overcast and windy',
  zip: 78729
}, action) => {
  switch (action.type) {
    case "FETCH_WEATHER_PENDING":
      return {
        ...state,
        isFetching: true
      }
      break;
    case "FETCH_WEATHER_FULFILLED":
      const { name, weather, main } = action.payload.data
      return {
        ...state,
        isFetching: false,
        city: name,
        temperture: convertKelvinToFahrenheit(main.temp),
        description: weather[0].description,
        isZipInvalid: false
      }
      break;
    case "FETCH_WEATHER_REJECTED":
      return {
        ...state,
        isZipInvalid: true,
        isFetching: false
      }
      break;
    case "SET_ZIP_CODE":
      return {
        ...state,
        zip: action.payload
      }
      break;
  }
  return state
}
