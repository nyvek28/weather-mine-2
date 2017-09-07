import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux'

import store from './store'
import { WeatherFinder } from './containers'
import './App.scss'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="app">
          <WeatherFinder />
        </div>
      </Provider>
    )
  }
}

export default App
