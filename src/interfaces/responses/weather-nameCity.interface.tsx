import type { Coord } from "../coord.interface"
import type { MainWeather } from "../main-weather.interface"
import type { Sys } from "../sys.interface"
import type { Wind } from "../wind.interface"

export interface ResponseWeatherNameCity {
    count: number,
    message: string,
    cod: string,
    list: WeatherNameCity[]
}


export interface WeatherNameCity {
    id: number,
    name: string,
    coord: Coord,
    main: MainWeather,
    dt: number,
    wind: Wind,
    sys: Sys,
    rain: {
        [key: string]: number|string
    },
    clouds: {
        [key: string]: number|string
    }
}

// {
//     "message": "accurate",
//     "cod": "200",
//     "count": 5,
//     "list": [
//         {
//             "id": 2643743,
//             "name": "London",
//             "coord": {
//                 "lat": 51.5085,
//                 "lon": -0.1257
//             },
//             "main": {
//                 "temp": 282.76,
//                 "feels_like": 282.76,
//                 "temp_min": 281.82,
//                 "temp_max": 283.29,
//                 "pressure": 1008,
//                 "humidity": 88,
//                 "sea_level": 1008,
//                 "grnd_level": 1003
//             },
//             "dt": 1745212157,
//             "wind": {
//                 "speed": 1.03,
//                 "deg": 50
//             },
//             "sys": {
//                 "country": "GB"
//             },
//             "rain": {
//                 "1h": 0.1
//             },
//             "snow": null,
//             "clouds": {
//                 "all": 100
//             },
//             "weather": [
//                 {
//                     "id": 804,
//                     "main": "Clouds",
//                     "description": "overcast clouds",
//                     "icon": "04d"
//                 }
//             ]
//         },
//         ...
//     ]
// }