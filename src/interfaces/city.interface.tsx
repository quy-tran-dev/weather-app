import type { Coord } from "./coord.interface";

export interface City {
    id: number;
    name: string;
    coord: Coord;
    country: string;
    population: number;
    timezone: number;
    sunrise: number;
    sunset: number;
}



// "city": {
//     "id": 2643743,
//     "name": "London",
//     "coord": {
//         "lat": 51.5085,
//         "lon": -0.1257
//     },
//     "country": "GB",
//     "population": 1000000,
//     "timezone": 3600,
//     "sunrise": 1745211104,
//     "sunset": 1745262375
// }