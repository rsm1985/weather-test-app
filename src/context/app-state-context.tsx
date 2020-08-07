import React from 'react';
import { AppState } from '../types';

export const AppStateContext = React.createContext<AppState>(
  {
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
    toggleAppState: (newState: AppState) => {},
  }
);