import axios from 'axios';
import { ServerCurrentResponse, ServerDailyResponse } from './types'

const API_ID = '06d3e5d39e723445f6f1c3f5a68a428f'

const axiosInstance = axios.create({
  baseURL: 'http://api.openweathermap.org/data/2.5/'
});

class Api {
  getCurrentWeather(url: string, param: { q: string }): Promise<ServerCurrentResponse> {
    const paramsList = {
      ...param,
      appid: API_ID,
      units: 'metric'
    }
    return axiosInstance.get(url, { params: paramsList })
  }
  getDailyForecast(url: string, param: {lat: string, lon: string, exclude: string}): Promise<ServerDailyResponse> {
    const paramsList = {
      ...param,
      appid: API_ID,
      units: 'metric'
    }
    return axiosInstance.get(url, {params: paramsList})
  }
}


const api = new Api();

export default api;