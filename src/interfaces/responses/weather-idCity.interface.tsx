import type { Coord } from "../coord.interface";
import type { MainWeather } from "../main-weather.interface";
import type { Sys } from "../sys.interface";
import type { Wind } from "../wind.interface";

export interface ResponseWeatherIdCity {
    id: number;
    cod: string;
    name: string;
    coord: Coord;
    main: MainWeather;
    dt: number;
    wind: Wind;
    sys: Sys;
    rain: {
        [key: string]: number | string;
    }
    clouds: {
        [key: string]: number | string;
    },
    base: string,
    visibility: number,
    timezone: number

}


// {
//     "coord": {
//       "lon": -0.1257,
//       "lat": 51.5085
//     },
//     "weather": [
//       {
//         "id": 804,
//         "main": "Clouds",
//         "description": "overcast clouds",
//         "icon": "04d"
//       }
//     ],
//     "base": "stations",
//     "main": {
//       "temp": 279.12,
//       "feels_like": 278.15,
//       "temp_min": 277.07,
//       "temp_max": 280.01,
//       "pressure": 1024,
//       "humidity": 90,
//       "sea_level": 1024,
//       "grnd_level": 1020
//     },
//     "visibility": 10000,
//     "wind": {
//       "speed": 1.54,
//       "deg": 0
//     },
//     "clouds": {
//       "all": 95
//     },
//     "dt": 1746594925,
//     "sys": {
//       "type": 2,
//       "id": 2075535,
//       "country": "GB",
//       "sunrise": 1746591680,
//       "sunset": 1746646364
//     },
//     "timezone": 3600,
//     "id": 2643743,
//     "name": "London",
//     "cod": 200
//   }