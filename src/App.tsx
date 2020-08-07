import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";


import styles from './App.module.scss';
import { CurrentWeather } from './components/CurrentWeather/';
import { WeatherWweek } from './components/WeatherWeek';
import { AppStateContext } from './context/app-state-context';
import { AppState } from './types';

const initialState: AppState = {
  dataCurrent: {
    name: '',
    weather: '',
    temp: 0,
    temp_max: 0,
    temp_min: 0,
    humidity: 0,
    dt: 0
  },
  dataDaily: [],
  toggleAppState: (state = initialState) => state
}

function App() {
  const [appState, setAppState] = useState(initialState)
  const state = {
    ...appState,
    toggleAppState: setAppState
  }
  return (
    <div className={styles.app}>
      <AppStateContext.Provider value={state}>
        <Router>
          <Switch>
            <Route exact path="/">
              <Redirect to="/current" />
            </Route>
            <Route path="/current" component={CurrentWeather} />
            <Route path="/week" component={WeatherWweek} />
          </Switch>
        </Router>
      </AppStateContext.Provider>
    </div>
  );
}

export default App;