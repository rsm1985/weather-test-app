import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from '../../axios';
import { AppStateContext } from '../../context/app-state-context';
import { useIsMount } from '../Share/useIsMount';
import Logo from '../Logo';
import { convertData } from '../../helpers';
import styles from './CurrentWeather.module.scss';

export function CurrentWeather() {
  const state = useContext(AppStateContext);
  const isMount = useIsMount();

  const { toggleAppState, dataCurrent } = state;
  const [ isCurrentClick, setIsCurrentClick ] = useState<boolean>(false);

  useEffect(() => {
    !isMount && getCurrentWeather()
  }, [isCurrentClick]);

  const getCurrentWeather = () => {
    axios.getCurrentWeather('/weather', {q: 'moscow'})
      .then((res) => {
        toggleAppState({...state, dataCurrent: {
          ...dataCurrent, 
          name: res.data.name, 
          weather: res.data.weather[0].main,
          temp: res.data.main.temp,
          temp_max: res.data.main.temp_max,
          temp_min: res.data.main.temp_min,
          humidity: res.data.main.humidity,
          dt: res.data.dt
        }});
      })
  }

  const getContainer = () => {
    return (
      <div className={styles.container}>
        <div className={styles.leftContainer}>
          <div className={styles.leftContainer_city}>{dataCurrent.name}</div>
          <div className={styles.leftContainer_date}>{convertData(dataCurrent.dt)}</div>
          <div className={styles.leftContainer_logo}>
            <Logo value={dataCurrent.weather} />
          </div>
        </div>
        <div className={styles.rightContainer}>
          <div className={styles.rightContainer_tempMax}>{`+${dataCurrent.temp_max} \xB0`}</div>
          <div className={styles.rightContainer_tempMin}>{`+${dataCurrent.temp_min} \xB0`}</div>
          <div className={styles.rightContainer_humidity}>{`Humidity ${dataCurrent.humidity}%`}</div>
        </div>
      </div>
    )
  }

  return ( 
    <div className={styles.wrapper}>
      <div className={styles.title}>Weather test app</div>
      <button className={styles.btn}
        onClick={() => setIsCurrentClick(!isCurrentClick)}
      >
        Get today's forecast
      </button>
      <div className={styles.link}><Link to="/week">Get 7days forecast in Moscow</Link></div>
      {dataCurrent.name ? getContainer() : <div className={styles.mock}></div>}
    </div>
  )
}