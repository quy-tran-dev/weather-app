import type { IconWeather } from "./icon-weather.interface"

export interface Current {
    dt: number
    sunrise: number
    sunset: number
    temp: number
    feels_like: number
    pressure: number
    humidity: number
    dew_point: number
    uvi: number
    clouds: number
    visibility: number
    wind_speed: number
    wind_deg: number
    weather: IconWeather[]
}


// "current": {
//   "dt": 1745217327,
//   "sunrise": 1745211044,
//   "sunset": 1745262314,
//   "temp": 283.38,
//   "feels_like": 282.73,
//   "pressure": 1008,
//   "humidity": 87,
//   "dew_point": 281.31,
//   "uvi": 0.15,
//   "clouds": 100,
//   "visibility": 10000,
//   "wind_speed": 0,
//   "wind_deg": 0,
//   "weather": [
// {
//   "id": 804,
//   "main": "Clouds",
//   "description": "overcast clouds",
//   "icon": "04d"
// }
//   ]
// },