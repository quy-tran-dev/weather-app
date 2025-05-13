import type { City } from "../city.interface";
import type { Coord } from "../coord.interface";
import type { IconWeather } from "../icon-weather.interface";
import type { MainWeather } from "../main-weather.interface";
import type { Sys } from "../sys.interface";
import type { Wind } from "../wind.interface";

interface WeatherCoord {
    dt : number
    main: MainWeather
    weather: IconWeather[]
    clouds: {
        [key: string]: number | string;
    }
    wind: Wind
    visibility: number
    pop: number
    sys: Sys
}


export interface ResponseWeatherCoord {
   city:City
    // coord:  {
    //     lon: number
    //     lat: number
    // },
   list : WeatherCoord[]
}


//     "coord": {
//       "lon": -0.1257,
//       "lat": 51.5085
//     },
//     "weather": [
//       {
//         "id": 500,
//         "main": "Rain",
//         "description": "light rain",
//         "icon": "10d"
//       }
//     ],
//     "base": "stations",
//     "main": {
//       "temp": 282.76,
//       "feels_like": 282.76,
//       "temp_min": 281.82,
//       "temp_max": 283.29,
//       "pressure": 1008,
//       "humidity": 88,
//       "sea_level": 1008,
//       "grnd_level": 1003
//     },
//     "visibility": 10000,
//     "wind": {
//       "speed": 1.03,
//       "deg": 50
//     },
//     "rain": {
//       "1h": 0.56
//     },
//     "clouds": {
//       "all": 100
//     },
//     "dt": 1745211623,
//     "sys": {
//       "type": 2,
//       "id": 2091269,
//       "country": "GB",
//       "sunrise": 1745211104,
//       "sunset": 1745262375
//     },
//     "timezone": 3600,
//     "id": 2643743,
//     "name": "London",
//     "cod": 200
//   }