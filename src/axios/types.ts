// current weather data

interface Weather {
  main: string
}

interface MainTemp {
  temp: number,
  temp_max: number,
  temp_min: number,
  humidity: number
}

export interface ServerCurrentData {
  name: string,
  weather: Weather[],
  main: MainTemp,
  dt: number
}


export interface ServerCurrentResponse {
  data: ServerCurrentData
}



// daily weather data

interface MainDailyTemp {
  max: number,
  min: number
}

export interface ServerDailyData {
  weather: Weather[],
  temp: MainDailyTemp,
  dt: number
}

export interface ServerDailyData {
  daily: ServerDailyData[]
}

export interface ServerDailyResponse {
  data: ServerDailyData
}