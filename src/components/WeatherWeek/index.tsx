import React, { useContext, useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import axios from '../../axios';
import { AppStateContext } from '../../context/app-state-context';
import { useIsMount } from '../Share/useIsMount';
import WeatherItem from '../WeatherItem';

import styles from './WeatherWeek.module.scss';

export function WeatherWweek() {
  const state = useContext(AppStateContext);
  const isMount = useIsMount();

  const { toggleAppState, dataDaily } = state;
  const [ isDailyClick, setIsDailyClick ] = useState<boolean>(false);

  useEffect(() => {
    !isMount && getDailyForecast()
  }, [isDailyClick]);


  const getDailyForecast = () => {
    axios.getDailyForecast('/onecall', { lat: '55.7558', lon: '37.6173', exclude: 'hourly' })
    .then((res) => {
      const dataDailyArray = res.data.daily.map(el => {
        return {
          weather: el.weather[0].main,
          temp_max: el.temp.max,
          temp_min: el.temp.min,
          dt: el.dt
        }
      })
      dataDailyArray.splice(0, 1)
      toggleAppState({...state, dataDaily: [...dataDailyArray]});
    })
  }

  const map = (): JSX.Element[] => {
    return dataDaily.map((el, index) => {
      return <WeatherItem props={el}  key={index} />
    })
  }

  return ( 
    <div className={styles.wrapper}>
      <div className={styles.title}>Weather test app</div>
      <button className={styles.btn}
        onClick={() => setIsDailyClick(!isDailyClick)}
      >
        Get 7days forecast in Moscow
      </button>
      <div className={styles.link}>
        <Link to="/current">Get today's forecast</Link>
      </div>
      {dataDaily.length ? <div className={styles.container}>{map()}</div> : <div className={styles.container}></div>}
    </div>
  )
}