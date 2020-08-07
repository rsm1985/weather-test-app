interface DataDailyItem {
  dt: number,
  weather: string,
  temp_max: number,
  temp_min: number,
}

export type AppState = {
  dataCurrent: {
    name: string,
    weather: string,
    temp: number,
    temp_max: number,
    temp_min: number,
    humidity: number,
    dt: number
  }
  dataDaily: DataDailyItem[],
  toggleAppState: (newState: AppState) => AppState | void;
}