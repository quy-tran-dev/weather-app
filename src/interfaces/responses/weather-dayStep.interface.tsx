import type { City } from "../city.interface";
import type { IconWeather } from "../icon-weather.interface";
import type { Temp } from "../temp.interface";

export interface ResponseWeatherDayStep {   
    city: City,
    cod: string,
    message: number,
    cnt: number,
    list: WeatherDayStep[]
}

export interface WeatherDayStep {
    dt: number,
    sunrise: number,
    sunset: number,
    temp: Temp,
    pressure: number,
    humidity: number,
    weather: IconWeather[],
    speed: number,
    deg: number
}




// {
//     "city": {
//         "id": 2643743,
//         "name": "London",
//         "coord": {
//             "lon": -0.1257,
//             "lat": 51.5085
//         },
//         "country": "GB",
//         "population": 1000000,
//         "timezone": 3600
//     },
//     "cod": "200",
//     "message": 0.9722459,
//     "cnt": 10,
//     "list": [
//         {
//             "dt": 1745233200,
//             "sunrise": 1745211104,
//             "sunset": 1745262375,
//             "temp": {
//                 "day": 286.34,
//                 "min": 282.77,
//                 "max": 288.65,
//                 "night": 282.87,
//                 "eve": 286.78,
//                 "morn": 283.05
//             },
//             "feels_like": {
//                 "day": 285.41,
//                 "night": 281.32,
//                 "eve": 286.29,
//                 "morn": 283.05
//             },
//             "pressure": 1009,
//             "humidity": 65,
//             "weather": [
//                 {
//                     "id": 500,
//                     "main": "Rain",
//                     "description": "light rain",
//                     "icon": "10d"
//                 }
//             ],
//             "speed": 4.18,
//             "deg": 274,
//             "gust": 8.14,
//             "clouds": 100,
//             "pop": 1,
//             "rain": 1.71
//         },
//         {
//             "dt": 1745319600,
//             "sunrise": 1745297381,
//             "sunset": 1745348876,
//             "temp": {
//                 "day": 287.34,
//                 "min": 280.11,
//                 "max": 289.41,
//                 "night": 282.79,
//                 "eve": 287.72,
//                 "morn": 280.11
//             },
//             "feels_like": {
//                 "day": 286.17,
//                 "night": 281.1,
//                 "eve": 286.49,
//                 "morn": 278.71
//             },
//             "pressure": 1017,
//             "humidity": 52,
//             "weather": [
//                 {
//                     "id": 804,
//                     "main": "Clouds",
//                     "description": "overcast clouds",
//                     "icon": "04d"
//                 }
//             ],
//             "speed": 4.48,
//             "deg": 206,
//             "gust": 9.19,
//             "clouds": 100,
//             "pop": 0
//         },
//        ...
//     ]
// }