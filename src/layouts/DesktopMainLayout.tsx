import { useState } from "react";
import HumidityCard from "../components/cards/weather-status-box/HumidityCard";
import Card from "../components/cards/Card";
import CardContent from "../components/cards/CardContent";

import weatherImage from '../assets/weather-image.png';
import MiniGauge from "../components/progress/MiniGaugeBox";

export default function DesktopMainLayout() {
    const [bgWeatherMain, setBgWeatherMain] = useState<string>('bg-main-cloudy-color');
    const [textWeatherMain, setTextWeatherMain] = useState<string>('text-main-cloudy-color');
    const [bgWeatherSecondary, setBgWeatherSecondary] = useState<string>('bg-secondary-cloudy-color');
    const [textWeatherSecondary, setTextWeatherSecondary] = useState<string>('text-secondary-cloudy-color');

    const getMainColor = (status: string | number) => {
        switch (status) {
            case 'Cloudy':
                setBgWeatherMain('bg-main-cloudy-color');
                setTextWeatherMain('text-main-cloudy-color');
                setBgWeatherSecondary('bg-secondary-cloudy-color');
                setTextWeatherSecondary('text-secondary-cloudy-color');
                break;
            case 'Rainy':
                setBgWeatherMain('bg-main-rainy-color');
                setTextWeatherMain('text-main-rainy-color');
                setBgWeatherSecondary('bg-secondary-rainy-color');
                setTextWeatherSecondary('text-secondary-rainy-color');
                break;
            case 'Sunny':
                setBgWeatherMain('bg-main-sunny-color');
                setTextWeatherMain('text-main-sunny-color');
                setBgWeatherSecondary('bg-secondary-sunny-color');
                setTextWeatherSecondary('text-secondary-sunny-color');
                break;
            case 'Scorching Sun':
                setBgWeatherMain('bg-main-scorching-sun-color');
                setTextWeatherMain('text-main-scorching-sun-color');
                setBgWeatherSecondary('bg-secondary-scorching-sun-color');
                setTextWeatherSecondary('text-secondary-scorching-sun-color');
                break;
            default:
                break;
        }
    }

    return (
        <div className={`min-h-screen h-[90vh] ${bgWeatherMain} relative flex items-center justify-center p-4`}>
            <div className="absolute inset-x-0 top-0 m-5 h-full rounded-2xl">
                <img src='https://cdn.pixabay.com/photo/2024/09/23/17/34/vietnam-9069634_960_720.png'
                    className="h-[95%] w-full object-cover rounded-2xl"
                />
            </div>
            <div className={` ${bgWeatherSecondary} h-[90%] w-[90%] rounded-3xl shadow-xl grid grid-cols-1 lg:grid-cols-4 gap-2 overflow-hidden 
              `}>
                {/* Left Sidebar */}
                <div className={`${bgWeatherSecondary} rounded-3xl relative text-white col-span-2 lg:col-span-1 p-6 flex flex-col justify-between h-full`}>
                    <div className="z-10 p-2 text-shadow-lg/30 rounded-2xl bg-[rgba(136,136,136,0.3)] shadow-md">
                        <h2 className="text-xl font-semibold flex items-center gap-2">
                            Ho Chi Minh City, VN
                            <img src="https://openweathermap.org/images/flags/vn.png" alt="" />
                        </h2>
                        <p className="text-sm">Today 28 Sept.</p>
                        <div className="mt-10 text-center">
                            <h1 className="text-6xl font-bold">27°</h1>
                            <p className="text-lg mt-2">☀️ Sunny</p>
                        </div>
                    </div>
                    <div className="absolute inset-x-0 top-0 m-5 h-full rounded-2xl">
                        <img src='https://cdn.pixabay.com/photo/2021/09/12/08/52/tower-6617723_1280.jpg'
                            className="h-[95%] w-full object-cover rounded-2xl"
                        />
                    </div>
                </div>

                {/* Right Content */}
                <div className={`bg-white relative lg:col-span-3 col-span-2 p-6 space-y-6 rounded-3xl `}>
                    <div>
                        <h2 className="text-xl font-bold">Welcome back Isabella!</h2>
                        <p className="text-sm text-gray-600">Check out today’s weather information</p>
                    </div>

                    {/* Upcoming Hours Graph Placeholder */}
                    <Card>
                        <CardContent className="p-4">
                            <h3 className="font-semibold mb-2">Upcoming Hours</h3>
                            <div className="h-24 bg-gray-100 rounded-md flex items-center justify-center text-sm text-gray-500">
                                Graph Here (Temp + Rain %)
                            </div>
                        </CardContent>
                    </Card>

                    {/* More Details */}
                    <div className="grid grid-cols-1 md:grid-cols-2  gap-4">

                        <HumidityCard value={89} color={bgWeatherMain} />


                        <MiniGauge value={8} />
                    </div>
                </div>
            </div>
        </div>
    );
}
