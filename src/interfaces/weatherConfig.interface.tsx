
export interface IWeatherColorStatus {
    [key: string]: {
        bg_main: string,
        text_main: string,
        bg_secondary: string,
        text_secondary: string,
        rgba_bg_main: string,
        rgba_text_main: string,
        rgba_bg_secondary: string,
        rgba_text_secondary: string,
        key: {
            [key: string]: string
        }
    }
}

export interface IWeatherConfig {
   
    color_status: IWeatherColorStatus
}

//  apiUrl_Weather: 'https://api.openweathermap.org/data/2.5',
//     apiUrl_Pixabay: 'https://pixabay.com/api/',
//     lang: 'en',
//     color_status: {
//         'cloudy': {
//             bg_main: 'bg-main-cloudy-color',
//             text_main: 'text-main-cloudy-color',
//             bg_secondary: 'bg-secondary-cloudy-color',
//             text_secondary: 'text-secondary-cloudy-color',
//             rgba_bg_main: 'rgba(181, 216, 254, 1)',
//             rgba_text_main: 'rgba(34, 58, 92, 1)',
//             rgba_bg_secondary: 'rgba(83, 160, 245, 1)',
//             rgba_text_secondary: 'rgba(74, 112, 139, 1)',
//             key: {
//                 'en': 'Cloudy',
//                 'vi': 'Nhiều mây'
//             }
//         },