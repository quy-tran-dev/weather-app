import type { IWeatherConfig } from "../interfaces/weatherConfig.interface";

export const weatherConfig: IWeatherConfig = {
    apiUrl_Weather: 'https://api.openweathermap.org/data/2.5',
    apiUrl_Pixabay: 'https://pixabay.com/api/',
    lang: 'en',
    color_status: {
        'cloudy': {
            bg_main: 'bg-main-cloudy-color',
            text_main: 'text-main-cloudy-color',
            bg_secondary: 'bg-secondary-cloudy-color',
            text_secondary: 'text-secondary-cloudy-color',
            rgba_bg_main: 'rgba(181, 216, 254, 1)',
            rgba_text_main: 'rgba(34, 58, 92, 1)',
            rgba_bg_secondary: 'rgba(83, 160, 245, 1)',
            rgba_text_secondary: 'rgba(74, 112, 139, 1)',
            key: {
                'en': 'Cloudy',
                'vi': 'Nhiều mây'
            }
        },
        'rainy': {
            bg_main: 'bg-main-rainy-color',
            text_main: 'text-main-rainy-color',
            bg_secondary: 'bg-secondary-rainy-color',
            text_secondary: 'text-secondary-rainy-color',
            rgba_bg_main: 'rgba(34, 58, 92, 1)',
            rgba_text_main: 'rgba(34, 58, 92, 1)',
            rgba_bg_secondary: 'rgba(74, 112, 139, 1)',
            rgba_text_secondary: 'rgba(74, 112, 139, 1)',
            key: {
                'en': 'Rainy',
                'vi': 'Mưa'
            }
        },
        'sunny': {
            bg_main: 'bg-main-sunny-color',
            text_main: 'text-main-sunny-color',
            bg_secondary: 'bg-secondary-sunny-color',
            text_secondary: 'text-secondary-sunny-color',
            rgba_bg_main: 'rgba(249, 239, 154, 1)',
            rgba_text_main: 'rgba(249, 239, 154, 1)',
            rgba_bg_secondary: 'rgba(244, 206, 84, 1)',
            rgba_text_secondary: 'rgba(244, 206, 84, 1)',
            key: {
                'en': 'Sunny',
                'vi': 'Ngày nắng'
            }
        },
        'scorching-sun': {
            bg_main: 'bg-main-scorching-sun-color',
            text_main: 'text-main-scorching-sun-color',
            bg_secondary: 'bg-secondary-scorching-sun-color',
            text_secondary: 'text-secondary-scorching-sun-color',
            rgba_bg_main: 'rgba(249, 239, 154, 1)',
            rgba_text_main: 'rgba(249, 239, 154, 1)',
            rgba_bg_secondary: 'rgba(244, 206, 84, 1)',
            rgba_text_secondary: 'rgba(244, 206, 84, 1)',
            key: {
                'en': 'Scorching Sun',
                'vi': 'Ngày nắng to'
            }
        }

    }
}

//   case 'Cloudy':
//                 setBgWeatherMain('bg-main-cloudy-color');
//                 setTextWeatherMain('text-main-cloudy-color');
//                 setBgWeatherSecondary('bg-secondary-cloudy-color');
//                 setTextWeatherSecondary('text-secondary-cloudy-color');
//                 break;
//             case 'Rainy':
//                 setBgWeatherMain('bg-main-rainy-color');
//                 setTextWeatherMain('text-main-rainy-color');
//                 setBgWeatherSecondary('bg-secondary-rainy-color');
//                 setTextWeatherSecondary('text-secondary-rainy-color');
//                 break;
//             case 'Sunny':
//                 setBgWeatherMain('bg-main-sunny-color');
//                 setTextWeatherMain('text-main-sunny-color');
//                 setBgWeatherSecondary('bg-secondary-sunny-color');
//                 setTextWeatherSecondary('text-secondary-sunny-color');
//                 break;
//             case 'Scorching Sun':
//                 setBgWeatherMain('bg-main-scorching-sun-color');
//                 setTextWeatherMain('text-main-scorching-sun-color');
//                 setBgWeatherSecondary('bg-secondary-scorching-sun-color');
// //                 setTextWeatherSecondary('text-secondary-scorching-sun-color');
// switch (tailwindClass) {
//             case 'text-blue-500': return 'rgba(59, 130, 246, 1)';
//             case 'text-green-500': return 'rgba(22, 163, 74, 1)';
//             case 'text-red-500': return 'rgba(220, 38, 38, 1)';
//             case 'text-yellow-500': return 'rgba(252, 211, 77, 1)';
//             case 'text-gray-700': return 'rgba(55, 65, 81, 1)';
//             case 'text-gray-500': return 'rgba(107, 114, 128, 1 )';
//             case 'text-main-cloudy-color': return 'rgba(181, 216, 254, 1)';
//             case 'text-main-rainy-color': return 'rgba(34, 58, 92, 1)';
//             case 'text-main-sunny-color': return 'rgba(249, 239, 154, 1)';
//             case 'text-main-scorching-sun-color': return 'rgba(255, 191, 97, 1)';
//             // Added for text color example
//             default: return 'rgba(0, 0, 0, 1)'; // Default to black
//         }