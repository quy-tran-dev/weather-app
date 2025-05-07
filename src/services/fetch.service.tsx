import { LANGENUM } from "../enums/lang.enum";
import type { ResponseWeatherCoord } from "../interfaces/responses/weather-coord.interface";
import type { ResponseWeatherEachTime } from "../interfaces/responses/weather-eachTime.interface";
import type { ResponseWeatherIdCity } from "../interfaces/responses/weather-idCity.interface";
import type { ResponseWeatherNameCity } from "../interfaces/responses/weather-nameCity.interface";
import type { ResponseWeatherOneCall } from "../interfaces/responses/weather-oneCall.interface";

export class FetchingData {

    private apiUrl_Weather = import.meta.env.API_KEY_WEATHER;
    private apiUrl_Pixabay = import.meta.env.API_KEY_PIXABAY;
    private lang = LANGENUM.EN;

    constructor(

    ) { }

    async getData(url: string) {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    }

    async getWeatherFollowNameCity(): Promise<ResponseWeatherNameCity> {
        // https://api.openweathermap.org/data/2.5/find?q=london&appid={apiKey}&lang=en
        const response = await fetch(`https://api.openweathermap.org/data/2.5/find?q=london&appid={${this.apiUrl_Weather}}&lang=${this.lang}`)
        const data = await response.json();
        return data;
    }


    async getWeatherFollowCoord(lat: number, lon: number): Promise<ResponseWeatherCoord> {
        // https://api.openweathermap.org/data/2.5/weather?lat=51.5085&lon=-0.1257&appid={apiKey}&lang=en
        const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid={${this.apiUrl_Weather}}&lang=${this.lang}`)
        const data = await response.json();
        return data;
    }

    async getWeatherFollowIdCity(id: number): Promise<ResponseWeatherIdCity> {
        // https://api.openweathermap.org/data/2.5/weather?id=2643743&appid={apiKey}&lang=en
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?id=${id}&appid={${this.apiUrl_Weather}}&lang=${this.lang}`)
        const data = await response.json();
        return data;
    }


    async getWeatherFollowOneCall(lat: number, lon: number): Promise<ResponseWeatherOneCall> {
        // https://api.openweathermap.org/data/2.5/onecall?lat=51.507&lon=0.128&unit=metric&appid={apiKey}&lang=en
        const response = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid={${this.apiUrl_Weather}}&lang=${this.lang}`)
        const data = await response.json();
        return data;
    }

    async getWeatherEachTime(lat: number, lon: number): Promise<ResponseWeatherEachTime> {
        // https://api.openweathermap.org/data/2.5/forecast?lat=51.5085&lon=-0.1257&appid={apiKey}&lang=en
        const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid={${this.apiUrl_Weather}}&lang=${this.lang}`)
        const data = await response.json();
        return data;
    }

    async getWeatherDayStep(lat: number, lon: number, dayStep: number = 1): Promise<ResponseWeatherOneCall> {
        // https://api.openweathermap.org/data/2.5/forecast/daily?lat=51.5085&lon=-0.1257&cnt={dayStep: 1⇒16}&appid={apiKey}&lang=en
        const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast/daily?lat=${lat}&lon=${lon}&cnt=${dayStep}&appid={${this.apiUrl_Weather}}&lang=${this.lang}`)
        const data = await response.json();
        return data;
    }

    async getImageInfoChoseCity(page: number = 1, perPage: number = 10): Promise<ResponseWeatherOneCall> {
        // https://pixabay.com/api/?key={apiKey}&q=Ho+Chi+Minh&image_type=photo&page=1&per_page=10
        const response = await fetch(`https://pixabay.com/api/?key=${this.apiUrl_Pixabay}&q=Ho+Chi+Minh&image_type=photo&page=${page}&per_page=${perPage}`)
        const data = await response.json();
        return data;
    }

}