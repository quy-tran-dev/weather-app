import type { IconWeather } from "./icon-weather.interface"

export interface Hourly {
    dt: number
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
    wind_gust: number
    weather: IconWeather[]
    pop: number
}

// "hourly": [{
//         "dt": 1745215200,
//         "temp": 283.29,
//         "feels_like": 282.66,
//         "pressure": 1008,
//         "humidity": 88,
//         "dew_point": 281.39,
//         "uvi": 0.04,
//         "clouds": 100,
//         "visibility": 10000,
//         "wind_speed": 1.29,
//         "wind_deg": 91,
//         "wind_gust": 2.63,
//         "weather": [
//           {
//             "id": 804,
//             "main": "Clouds",
//             "description": "overcast clouds",
//             "icon": "04d"
//           }
//         ],
//         "pop": 0
//       },