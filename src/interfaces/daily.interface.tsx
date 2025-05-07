import type { FeelsLike } from "./feels-like.interface";
import type { IconWeather } from "./icon-weather.interface";
import type { Temp } from "./temp.interface";

export interface Daily {
    dt: number;
    sunrise: number;
    sunset: number;
    moonrise: number;
    moonset: number;
    moon_phase: number;
    temp: Temp;
    feels_like: FeelsLike;
    pressure: number;
    humidity: number;
    dew_point: number;
    wind_speed: number;
    wind_deg: number;
    wind_gust: number;
    weather: IconWeather[];
    clouds: number;
    pop: number;
    rain: number;
    uvi: number;                        
}


// "daily": [
//     {
//         "dt": 1745233200,
//         "sunrise": 1745211044,
//         "sunset": 1745262314,
//         "moonrise": 1745203140,
//         "moonset": 1745231460,
//         "moon_phase": 0.75,
//         "temp": {
//             "day": 286.4,
//             "min": 282.82,
//             "max": 288.97,
//             "night": 283.33,
//             "eve": 286.73,
//             "morn": 283.11
//         },
//         "feels_like": {
//             "day": 285.53,
//             "night": 282.75,
//             "eve": 286.26,
//             "morn": 283.11
//         },
//         "pressure": 1009,
//         "humidity": 67,
//         "dew_point": 280.41,
//         "wind_speed": 4.93,
//         "wind_deg": 215,
//         "wind_gust": 7.76,
//         "weather": [
//             {
//                 "id": 500,
//                 "main": "Rain",
//                 "description": "light rain",
//                 "icon": "10d"
//             }
//         ],
//         "clouds": 99,
//         "pop": 1,
//         "rain": 1.8,
//         "uvi": 3.14
//     },