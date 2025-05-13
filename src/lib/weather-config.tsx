import { img } from "framer-motion/client";
import type { IWeatherConfig } from "../interfaces/weatherConfig.interface";

export const weatherConfig: IWeatherConfig = {
    color_status: {
        'thunderstorm': {
            bg_main: 'bg-main-thunderstorm-color',
            text_main: 'text-main-thunderstorm-color',
            bg_secondary: 'bg-secondary-thunderstorm-color',
            text_secondary: 'text-secondary-thunderstorm-color',
            rgba_bg_main: 'rgba(92, 107, 192, 1)',
            rgba_text_main: 'rgba(255, 255, 255, 1)',
            rgba_bg_secondary: 'rgba(159, 168, 218, 1)',
            rgba_text_secondary: 'rgba(0, 0, 0, 1)',
            key: {
                en: 'Thunderstorm lightning',
                vi: 'Sấm sét trong giông bão',
                img: 'https://images.unsplash.com/photo-1696351808576-e882b848b93e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fFRodW5kZXJzdG9ybSUyMGxpZ2h0bmluZ3xlbnwwfHwwfHx8MA%3D%3D'
            }
        },
        'drizzle': {
            bg_main: 'bg-main-drizzle-color',
            text_main: 'text-main-drizzle-color',
            bg_secondary: 'bg-secondary-drizzle-color',
            text_secondary: 'text-secondary-drizzle-color',
            rgba_bg_main: 'rgba(129, 212, 250, 1)',
            rgba_text_main: 'rgba(0, 0, 0, 1)',
            rgba_bg_secondary: 'rgba(179, 229, 252, 1)',
            rgba_text_secondary: 'rgba(0, 0, 0, 1)',
            key: {
                en: 'Day Drizzle light rain',
                vi: 'Mưa phùn nhẹ ban ngày',
                img: "https://images.unsplash.com/photo-1670208432302-80c0added5a8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fERheSUyMERyaXp6bGUlMjBsaWdodCUyMHJhaW58ZW58MHx8MHx8fDA%3D"
            }
        },
        'rain': {
            bg_main: 'bg-main-rain-color',
            text_main: 'text-main-rain-color',
            bg_secondary: 'bg-secondary-rain-color',
            text_secondary: 'text-secondary-rain-color',
            rgba_bg_main: 'rgba(34, 58, 92, 1)',
            rgba_text_main: 'rgba(255, 255, 255, 1)',
            rgba_bg_secondary: 'rgba(74, 112, 139, 1)',
            rgba_text_secondary: 'rgba(255, 255, 255, 1)',
            key: {
                en: 'Day Rain umbrella',
                vi: 'Ô dưới trời mưa ban ngày',
                img: "https://images.unsplash.com/photo-1553096537-82ab4c0ae230?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fERheSUyMFJhaW4lMjB1bWJyZWxsYXxlbnwwfHwwfHx8MA%3D%3D"
            }
        },
        'snow': {
            bg_main: 'bg-main-snow-color',
            text_main: 'text-main-snow-color',
            bg_secondary: 'bg-secondary-snow-color',
            text_secondary: 'text-secondary-snow-color',
            rgba_bg_main: 'rgba(224, 242, 247, 1)',
            rgba_text_main: 'rgba(0, 0, 0, 1)',
            rgba_bg_secondary: 'rgba(178, 235, 242, 1)',
            rgba_text_secondary: 'rgba(0, 0, 0, 1)',
            key: {
                en: 'Day Snow snowflake',
                vi: 'Tuyết rơi ban ngày',
                img: "https://images.unsplash.com/photo-1705989277853-e146af1d029a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8RGF5JTIwU25vdyUyMHNub3dmbGFrZXxlbnwwfHwwfHx8MA%3D%3D"
            }
        },
        'mist': {
            bg_main: 'bg-main-mist-color',
            text_main: 'text-main-mist-color',
            bg_secondary: 'bg-secondary-mist-color',
            text_secondary: 'text-secondary-mist-color',
            rgba_bg_main: 'rgba(207, 216, 220, 1)',
            rgba_text_main: 'rgba(0, 0, 0, 1)',
            rgba_bg_secondary: 'rgba(236, 239, 241, 1)',
            rgba_text_secondary: 'rgba(0, 0, 0, 1)',
            key: {
                en: 'Day Mist fog',
                vi: 'Sương mù ban ngày',
                img: "https://images.unsplash.com/photo-1648910078497-6ff8c21a3254?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8UyVDNiVCMCVDNiVBMW5nJTIwbSVDMyVCOSUyMGJhbiUyMG5nJUMzJUEweXxlbnwwfHwwfHx8MA%3D%3D"
            }
        },
        'smoke': {
            bg_main: 'bg-main-smoke-color',
            text_main: 'text-main-smoke-color',
            bg_secondary: 'bg-secondary-smoke-color',
            text_secondary: 'text-secondary-smoke-color',
            rgba_bg_main: 'rgba(117, 117, 117, 1)',
            rgba_text_main: 'rgba(255, 255, 255, 1)',
            rgba_bg_secondary: 'rgba(189, 189, 189, 1)',
            rgba_text_secondary: 'rgba(0, 0, 0, 1)',
            key: {
                en: 'Day Smoke haze',
                vi: 'Khói mù ban ngày',
                img: "https://images.unsplash.com/photo-1626124449756-c530963a988b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fERheSUyMFNtb2tlJTIwaGF6ZXxlbnwwfHwwfHx8MA%3D%3D"
            }
        },
        'haze': {
            bg_main: 'bg-main-haze-color',
            text_main: 'text-main-haze-color',
            bg_secondary: 'bg-secondary-haze-color',
            text_secondary: 'text-secondary-haze-color',
            rgba_bg_main: 'rgba(188, 170, 164, 1)',
            rgba_text_main: 'rgba(0, 0, 0, 1)',
            rgba_bg_secondary: 'rgba(215, 204, 200, 1)',
            rgba_text_secondary: 'rgba(0, 0, 0, 1)',
            key: {
                en: 'Day Haze air',
                vi: 'Không khí mờ ảo ban ngày',
                img: 'https://media.istockphoto.com/id/2193707340/photo/hong-kong-china-with-a-traditional-junk-boat.webp?a=1&b=1&s=612x612&w=0&k=20&c=RzOTK0hxoF_QGAjsI4Mm6KMfh_QUom02H6KMyrkz9Ps='
            }
        },
        'dust': {
            bg_main: 'bg-main-dust-color',
            text_main: 'text-main-dust-color',
            bg_secondary: 'bg-secondary-dust-color',
            text_secondary: 'text-secondary-dust-color',
            rgba_bg_main: 'rgba(161, 136, 127, 1)',
            rgba_text_main: 'rgba(255, 255, 255, 1)',
            rgba_bg_secondary: 'rgba(210, 203, 176, 1)',
            rgba_text_secondary: 'rgba(0, 0, 0, 1)',
            key: {
                en: 'Day Dust particles',
                vi: 'Bụi trong không khí ban ngày',
                img: "https://images.unsplash.com/photo-1674109830188-86a960afe6a5?q=80&w=2014&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
        },
        'fog': {
            bg_main: 'bg-main-fog-color',
            text_main: 'text-main-fog-color',
            bg_secondary: 'bg-secondary-fog-color',
            text_secondary: 'text-secondary-fog-color',
            rgba_bg_main: 'rgba(144, 164, 174, 1)',
            rgba_text_main: 'rgba(255, 255, 255, 1)',
            rgba_bg_secondary: 'rgba(176, 190, 197, 1)',
            rgba_text_secondary: 'rgba(0, 0, 0, 1)',
            key: {
                en: 'Day Fog thick',
                vi: 'Sương mù dày đặc ban ngày',
                img: "https://images.unsplash.com/photo-1578850554668-5a104d52742f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8RGF5JTIwRm9nJTIwdGhpY2t8ZW58MHx8MHx8fDA%3D"
            }
        },
        'sand': {
            bg_main: 'bg-main-sand-color',
            text_main: 'text-main-sand-color',
            bg_secondary: 'bg-secondary-sand-color',
            text_secondary: 'text-secondary-sand-color',
            rgba_bg_main: 'rgba(240, 230, 140, 1)',
            rgba_text_main: 'rgba(0, 0, 0, 1)',
            rgba_bg_secondary: 'rgba(255, 248, 220, 1)',
            rgba_text_secondary: 'rgba(0, 0, 0, 1)',
            key: {
                en: 'Day Sand dunes',
                vi: 'Cồn cát ban ngày',
                img: "https://cdn.pixabay.com/photo/2017/02/08/15/22/namibia-2049203_640.jpg"
            }
        },
        'ash': {
            bg_main: 'bg-main-ash-color',
            text_main: 'text-main-ash-color',
            bg_secondary: 'bg-secondary-ash-color',
            text_secondary: 'text-secondary-ash-color',
            rgba_bg_main: 'rgba(97, 97, 97, 1)',
            rgba_text_main: 'rgba(255, 255, 255, 1)',
            rgba_bg_secondary: 'rgba(158, 158, 158, 1)',
            rgba_text_secondary: 'rgba(255, 255, 255, 1)',
            key: {
                en: 'Day Ash sky',
                vi: 'Bầu trời tro bụi ban ngày',
                img: "https://cdn.pixabay.com/photo/2024/01/04/21/54/volcano-8488486_1280.jpg"
            }
        },
        'squall': {
            bg_main: 'bg-main-squall-color',
            text_main: 'text-main-squall-color',
            bg_secondary: 'bg-secondary-squall-color',
            text_secondary: 'text-secondary-squall-color',
            rgba_bg_main: 'rgba(69, 90, 100, 1)',
            rgba_text_main: 'rgba(255, 255, 255, 1)',
            rgba_bg_secondary: 'rgba(96, 125, 139, 1)',
            rgba_text_secondary: 'rgba(255, 255, 255, 1)',
            key: {
                en: 'Day Squall wind',
                vi: 'Gió giật mạnh ban ngày',
                img: "https://cdn.pixabay.com/photo/2019/01/26/18/41/trees-3956743_640.jpg"
            }
        },
        'tornado': {
            bg_main: 'bg-main-tornado-color',
            text_main: 'text-main-tornado-color',
            bg_secondary: 'bg-secondary-tornado-color',
            text_secondary: 'text-secondary-tornado-color',
            rgba_bg_main: 'rgba(33, 33, 33, 1)',
            rgba_text_main: 'rgba(255, 255, 255, 1)',
            rgba_bg_secondary: 'rgba(66, 66, 66, 1)',
            rgba_text_secondary: 'rgba(255, 255, 255, 1)',
            key: {
                en: 'Day Tornado twister',
                vi: 'Lốc xoáy ban ngày',
                img: 'https://cdn.pixabay.com/photo/2024/05/07/21/46/ai-generated-8746887_640.png'
            }
        },
        'clear': {
            bg_main: 'bg-main-clear-color',
            text_main: 'text-main-clear-color',
            bg_secondary: 'bg-secondary-clear-color',
            text_secondary: 'text-secondary-clear-color',
            rgba_bg_main: 'rgba(253, 216, 53, 1)',
            rgba_text_main: 'rgba(0, 0, 0, 1)',
            rgba_bg_secondary: 'rgba(255, 245, 157, 1)',
            rgba_text_secondary: 'rgba(0, 0, 0, 1)',
            key: {
                en: 'Day Clear sunflower',
                vi: 'Hoa hướng dương dưới trời trong xanh ban ngày',
                img: "https://cdn.pixabay.com/photo/2018/07/02/22/18/sunflower-3512656_1280.jpg"
            }
        },
        'clouds': {
            bg_main: 'bg-main-clouds-color',
            text_main: 'text-main-clouds-color',
            bg_secondary: 'bg-secondary-clouds-color',
            text_secondary: 'text-secondary-clouds-color',
            rgba_bg_main: 'rgba(181, 216, 254, 1)',
            rgba_text_main: 'rgba(0, 0, 0, 1)',
            rgba_bg_secondary: 'rgba(225, 245, 254, 1)',
            rgba_text_secondary: 'rgba(0, 0, 0, 1)',
            key: {
                en: 'Day Clouds sky',
                vi: 'Bầu trời nhiều mây ban ngày',
                img: "https://cdn.pixabay.com/photo/2020/01/08/18/50/clouds-4750959_640.jpg"
            }
        },
        'cloudy': { // Giữ lại 'cloudy' cho fallback hoặc trạng thái chung
            bg_main: 'bg-main-cloudy-color',
            text_main: 'text-main-cloudy-color',
            bg_secondary: 'bg-secondary-cloudy-color',
            text_secondary: 'text-secondary-cloudy-color',
            rgba_bg_main: 'rgba(181, 216, 254, 1)',
            rgba_text_main: 'rgba(34, 58, 92, 1)',
            rgba_bg_secondary: 'rgba(83, 160, 245, 1)',
            rgba_text_secondary: 'rgba(74, 112, 139, 1)',
            key: {
                en: 'Day Cloudy sky',
                vi: 'Bầu trời có mây ban ngày',
                img: "https://cdn.pixabay.com/photo/2020/01/08/18/50/clouds-4750959_640.jpg"

            }
        },
        'rainy': { // Giữ lại 'rainy' nếu bạn vẫn muốn sử dụng nó
            bg_main: 'bg-main-rainy-color',
            text_main: 'text-main-rainy-color',
            bg_secondary: 'bg-secondary-rainy-color',
            text_secondary: 'text-secondary-rainy-color',
            rgba_bg_main: 'rgba(34, 58, 92, 1)',
            rgba_text_main: 'rgba(255, 255, 255, 1)',
            rgba_bg_secondary: 'rgba(74, 112, 139, 1)',
            rgba_text_secondary: 'rgba(255, 255, 255, 1)',
            key: {
                en: 'Day Rainy drops',
                vi: 'Những giọt mưa ban ngày',
                img: "https://cdn.pixabay.com/photo/2015/05/31/12/08/drops-791416_640.jpg"
            }
        },
        'sunny': { // Giữ lại 'sunny'
            bg_main: 'bg-main-sunny-color',
            text_main: 'text-main-sunny-color',
            bg_secondary: 'bg-secondary-sunny-color',
            text_secondary: 'text-secondary-sunny-color',
            rgba_bg_main: 'rgba(249, 239, 154, 1)',
            rgba_text_main: 'rgba(0, 0, 0, 1)',
            rgba_bg_secondary: 'rgba(244, 206, 84, 1)',
            rgba_text_secondary: 'rgba(0, 0, 0, 1)',
            key: {
                en: 'Day Sunny bright',
                vi: 'Trời nắng chói chang ban ngày',
                img: "https://cdn.pixabay.com/photo/2020/07/28/04/27/flowers-5443922_640.jpg"
            }
        },
        'scorching-sun': { // Giữ lại 'scorching-sun'
            bg_main: 'bg-main-scorching-sun-color',
            text_main: 'text-main-scorching-sun-color',
            bg_secondary: 'bg-secondary-scorching-sun-color',
            text_secondary: 'text-secondary-scorching-sun-color',
            rgba_bg_main: 'rgba(255, 191, 97, 1)',
            rgba_text_main: 'rgba(255, 255, 255, 1)',
            rgba_bg_secondary: 'rgba(253, 165, 55, 1)',
            rgba_text_secondary: 'rgba(255, 255, 255, 1)',
            key: {
                en: 'Day Scorching sun heat',
                vi: 'Nắng nóng gay gắt ban ngày',
                img: "https://cdn.pixabay.com/photo/2023/03/27/09/23/sunset-7880263_640.jpg"
            }

        },
        'cloudys': { // Sửa lại key cho đúng với 'clouds' nếu bạn muốn nó tương ứng
            bg_main: 'bg-main-clouds-color',
            text_main: 'text-main-clouds-color',
            bg_secondary: 'bg-secondary-clouds-color',
            text_secondary: 'text-secondary-clouds-color',
            rgba_bg_main: 'rgba(181, 216, 254, 1)',
            rgba_text_main: 'rgba(0, 0, 0, 1)',
            rgba_bg_secondary: 'rgba(225, 245, 254, 1)',
            rgba_text_secondary: 'rgba(0, 0, 0, 1)',
            key: {
                en: 'Day Cloudy sky',
                vi: 'Bầu trời có mây ban ngày',
                img: "https://cdn.pixabay.com/photo/2020/01/08/18/50/clouds-4750959_640.jpg"
            }
        },
    },
};
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