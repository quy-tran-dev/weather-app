import type { Current } from "../current.interface"
import type { Daily } from "../daily.interface"
import type { Hourly } from "../hourly.interface"
import type { Minutely } from "../minutely.interface"

export interface ResponseWeatherOneCall {
    lat: number
    lon: number
    timezone: string
    timezone_offset: number
    current: Current
    daily: Daily[]
    minutely: Minutely[]
    hourly: Hourly[]
}



// {
//     "lat": 51.507,
//     "lon": 0.128,
//     "timezone": "Europe/London",
//     "timezone_offset": 3600,
//     "current": {
//       "dt": 1745217327,
//       "sunrise": 1745211044,
//       "sunset": 1745262314,
//       "temp": 283.38,
//       "feels_like": 282.73,
//       "pressure": 1008,
//       "humidity": 87,
//       "dew_point": 281.31,
//       "uvi": 0.15,
//       "clouds": 100,
//       "visibility": 10000,
//       "wind_speed": 0,
//       "wind_deg": 0,
//       "weather": [
//         {
//           "id": 804,
//           "main": "Clouds",
//           "description": "overcast clouds",
//           "icon": "04d"
//         }
//       ]
//     },
//     "minutely": [ {
//         "dt": 1745217360,
//         "precipitation": 0
//       },
//       {
//         "dt": 1745217420,
//         "precipitation": 0
//       },...
//     ],
//     "hourly": [{
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
//       {
//         "dt": 1745218800,
//         "temp": 283.38,
//         "feels_like": 282.73,
//         "pressure": 1008,
//         "humidity": 87,
//         "dew_point": 281.31,
//         "uvi": 0.15,
//         "clouds": 100,
//         "visibility": 10000,
//         "wind_speed": 1.92,
//         "wind_deg": 100,
//         "wind_gust": 3.2,
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
//     ...
// ],
//     "daily": [
//       {
//         "dt": 1745233200,
//         "sunrise": 1745211044,
//         "sunset": 1745262314,
//         "moonrise": 1745203140,
//         "moonset": 1745231460,
//         "moon_phase": 0.75,
//         "temp": {
//           "day": 286.4,
//           "min": 282.82,
//           "max": 288.97,
//           "night": 283.33,
//           "eve": 286.73,
//           "morn": 283.11
//         },
//         "feels_like": {
//           "day": 285.53,
//           "night": 282.75,
//           "eve": 286.26,
//           "morn": 283.11
//         },
//         "pressure": 1009,
//         "humidity": 67,
//         "dew_point": 280.41,
//         "wind_speed": 4.93,
//         "wind_deg": 215,
//         "wind_gust": 7.76,
//         "weather": [
//           {
//             "id": 500,
//             "main": "Rain",
//             "description": "light rain",
//             "icon": "10d"
//           }
//         ],
//         "clouds": 99,
//         "pop": 1,
//         "rain": 1.8,
//         "uvi": 3.14
//       },
//       {
//         "dt": 1745319600,
//         "sunrise": 1745297320,
//         "sunset": 1745348815,
//         "moonrise": 1745290800,
//         "moonset": 1745322900,
//         "moon_phase": 0.8,
//         "temp": {
//           "day": 287.55,
//           "min": 280.44,
//           "max": 289.54,
//           "night": 282.51,
//           "eve": 287.32,
//           "morn": 280.44
//         },
//         "feels_like": {
//           "day": 286.38,
//           "night": 280.95,
//           "eve": 286.25,
//           "morn": 278.96
//         },
//         "pressure": 1017,
//         "humidity": 51,
//         "dew_point": 277.45,
//         "wind_speed": 4.57,
//         "wind_deg": 209,
//         "wind_gust": 9.18,
//         "weather": [
//           {
//             "id": 804,
//             "main": "Clouds",
//             "description": "overcast clouds",
//             "icon": "04d"
//           }
//         ],
//         "clouds": 100,
//         "pop": 0,
//         "uvi": 4.71
//       },
//       ...
//     ]
//   }
