import React from 'react';
import Logo from '../Logo';
import { IProps } from './types'
import styles from './WeatherItem.module.scss';
import { convertData } from '../../helpers';

const WeatherItem = ({ props }: IProps):JSX.Element=> {
  const { dt, temp_max, temp_min, weather } = props

  const max = `+${Math.floor(temp_max)} \xB0`
  const min = `+${Math.floor(temp_min)} \xB0`

  return (
    <div className={styles.weatherItem}>
      <div className={styles.weatherItem_date}>{convertData(dt)}</div>
      <div className={styles.weatherItem_logo}>
        <Logo value={weather} />
      </div>
      <div className={styles.weatherItem_tempMax}>{max}</div>
      <div className={styles.weatherItem_tempMin}>{min}</div>
    </div>
  )
}

export default WeatherItem