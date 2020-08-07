import React from 'react';
import { IProps } from './types';
import rainy from '../../assets/rainy.svg';
import cloudy from '../../assets/cloudy.svg';
import sun from '../../assets/sun.svg';
import strong_rain from '../../assets/strong_rain.svg';
import storm from '../../assets/storm.svg';
import snowy from '../../assets/snowy.svg';
import foog from '../../assets/foog.svg';

 const Logo = (props: IProps) => {
   
  console.log("props.value", props.value);

  const getSource = () => {
    if(props.value === 'Clouds') {
      return <img src={cloudy} width='50' height='50' alt="logo" />
    } else if (props.value === 'Clear') {
      return <img src={sun} width='50' height='50' alt="logo" />
    } else if (props.value === 'Rain') {
      return <img src={strong_rain} width='50' height='50' alt="logo" />
    } else if (props.value === 'Drizzle') {
      return <img src={rainy} width='50' height='50' alt="logo" />
    } else if (props.value === 'Thunderstorm') {
      return <img src={storm} width='50' height='50' alt="logo" />
    } else if (props.value === 'Snow') {
      return <img src={snowy} width='50' height='50' alt="logo" />
    } else if (props.value === 'Mist' || 'Smoke' || 'Haze' || 'Dust' || 'Fog' || 'Sand' || 'Dust' || 'Ash' || 'Squall' || 'Tornado') {
      return <img src={foog} width='50' height='50' alt="logo" />
    } else {
      return <img src={sun} width='50' height='50' alt="logo" />
    }
  }

  return (
    <div>{getSource()}</div>
  )
}

export default Logo;