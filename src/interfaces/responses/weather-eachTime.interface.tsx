import type { IconWeather } from "../icon-weather.interface";
import type { MainWeather } from "../main-weather.interface";
import type { Sys } from "../sys.interface";
import type { Wind } from "../wind.interface";

export interface ResponseWeatherEachTime {
    dt: number;
    main: MainWeather;
    weather: IconWeather[];
    clouds: {
        [key: string]: number | string;
    };
    wind: Wind;
    visibility: number;
    pop: number;
    sys: Sys;
    dt_txt: string;
}

export interface WeatherEachTime {
   dt : number;
   main: MainWeather;
   weather: IconWeather[];
   clouds: {
       [key: string]: number | string;
   };
   wind: Wind;
   visibility: number;
   pop: number;
   sys: Sys;
   dt_txt: string;
}


// {
//     "cod": "200",
//     "message": 0,
//     "cnt": 40,
//     "list": [
//         {
//             "dt": 1745226000,
//             "main": {
//                 "temp": 283.55,
//                 "feels_like": 282.84,
//                 "temp_min": 283.55,
//                 "temp_max": 284.76,
//                 "pressure": 1008,
//                 "sea_level": 1008,
//                 "grnd_level": 1005,
//                 "humidity": 84,
//                 "temp_kf": -1.21
//             },
//             "weather": [
//                 {
//                     "id": 804,
//                     "main": "Clouds",
//                     "description": "overcast clouds",
//                     "icon": "04d"
//                 }
//             ],
//             "clouds": {
//                 "all": 100
//             },
//             "wind": {
//                 "speed": 1.4,
//                 "deg": 185,
//                 "gust": 2.5
//             },
//             "visibility": 10000,
//             "pop": 0,
//             "sys": {
//                 "pod": "d"
//             },
//             "dt_txt": "2025-04-21 09:00:00"
//         },
//         {
//             "dt": 1745236800,
//             "main": {
//                 "temp": 286.46,
//                 "feels_like": 285.49,
//                 "temp_min": 286.46,
//                 "temp_max": 288.22,
//                 "pressure": 1009,
//                 "sea_level": 1009,
//                 "grnd_level": 1005,
//                 "humidity": 63,
//                 "temp_kf": -1.76
//             },
//             "weather": [
//                 {
//                     "id": 804,
//                     "main": "Clouds",
//                     "description": "overcast clouds",
//                     "icon": "04d"
//                 }
//             ],
//             "clouds": {
//                 "all": 100
//             },
//             "wind": {
//                 "speed": 3.39,
//                 "deg": 203,
//                 "gust": 4.95
//             },
//             "visibility": 10000,
//             "pop": 0,
//             "sys": {
//                 "pod": "d"
//             },
//             "dt_txt": "2025-04-21 12:00:00"
//         },
//         {
//             "dt": 1745247600,
//             "main": {
//                 "temp": 287.81,
//                 "feels_like": 287.13,
//                 "temp_min": 287.81,
//                 "temp_max": 287.81,
//                 "pressure": 1009,
//                 "sea_level": 1009,
//                 "grnd_level": 1005,
//                 "humidity": 69,
//                 "temp_kf": 0
//             },
//             "weather": [
//                 {
//                     "id": 500,
//                     "main": "Rain",
//                     "description": "light rain",
//                     "icon": "10d"
//                 }
//             ],
//             "clouds": {
//                 "all": 100
//             },
//             "wind": {
//                 "speed": 4.12,
//                 "deg": 241,
//                 "gust": 5.48
//             },
//             "visibility": 10000,
//             "pop": 1,
//             "rain": {
//                 "3h": 0.96
//             },
//             "sys": {
//                 "pod": "d"
//             },
//             "dt_txt": "2025-04-21 15:00:00"
//         },
//         ...
//     ],
//     "city": {
//         "id": 2643743,
//         "name": "London",
//         "coord": {
//             "lat": 51.5085,
//             "lon": -0.1257
//         },
//         "country": "GB",
//         "population": 1000000,
//         "timezone": 3600,
//         "sunrise": 1745211104,
//         "sunset": 1745262375
//     }
// }