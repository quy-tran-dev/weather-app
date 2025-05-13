import { useState, useEffect } from 'react';


import { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

import { weatherConfig } from '../lib/weather-config';
import LeftSideBar from '../components/navs/LeftSideBar';
import LeftSideSkeleton from '../components/skeleton/LeftSideSkeleton';

import RightSide from '../components/navs/RightSide';
import RightSideSkeleton from '../components/skeleton/RightSideSkeleton';


export default function MainLayout() {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [bgWeatherMain, setBgWeatherMain] = useState<string>(weatherConfig.color_status.cloudy.bg_main);
    const [textWeatherMain, setTextWeatherMain] = useState<string>(weatherConfig.color_status.cloudy.text_main);
    const [bgWeatherSecondary, setBgWeatherSecondary] = useState<string>(weatherConfig.color_status.cloudy.bg_secondary);
    const [textWeatherSecondary, setTextWeatherSecondary] = useState<string>(weatherConfig.color_status.cloudy.text_secondary);

    const getMainColor = (status: string) => {
        Object.keys(weatherConfig.color_status).map((key) => {
            if (weatherConfig.color_status[key].key[weatherConfig.lang].toLocaleLowerCase() == status.toLocaleLowerCase()) {
                setBgWeatherMain(weatherConfig.color_status[key].bg_main);
                setTextWeatherMain(weatherConfig.color_status[key].text_main);
                setBgWeatherSecondary(weatherConfig.color_status[key].bg_secondary);
                setTextWeatherSecondary(weatherConfig.color_status[key].text_secondary);
            } else {
                setBgWeatherMain(weatherConfig.color_status.cloudy.bg_main);
                setTextWeatherMain(weatherConfig.color_status.cloudy.text_main);
                setBgWeatherSecondary(weatherConfig.color_status.cloudy.bg_secondary);
                setTextWeatherSecondary(weatherConfig.color_status.cloudy.text_secondary);
            }
        })
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
            getMainColor('Cloudy'); // Ví dụ: đặt màu sau khi tải
        }, 2000); // Giảm thời gian tải mô phỏng
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={`min-h-screen h-[100vh] ${isLoading ? 'bg-gray-200' : bgWeatherMain} relative flex items-center justify-center p-2 sm:p-4 transition-colors duration-500`}>
            <SkeletonTheme baseColor="#e0e0e0" highlightColor="#f5f5f5" borderRadius="0.5rem">
                <div className={`h-[95%] w-[95%] rounded-3xl shadow-xl grid grid-cols-1 lg:grid-cols-4 gap-2 overflow-hidden 
                                 ${isLoading ? 'bg-gray-100' : bgWeatherSecondary} transition-colors duration-500`}>
                    {/* Left Sidebar */}
                    {isLoading ? (
                        <LeftSideSkeleton />
                    ) : (
                        <LeftSideBar bgWeatherSecondary={bgWeatherSecondary} />
                    )}

                    {/* Right Content */}
                    {/* Thay đổi col-span-2 thành col-span-1 cho màn hình nhỏ hơn lg */}
                    <div className={`relative col-span-1 lg:col-span-3 p-0 sm:p-2 rounded-3xl h-full overflow-hidden text-black 
                                     ${isLoading ? 'bg-white' : 'bg-white'}`}>
                        {isLoading ? (
                            <RightSideSkeleton />
                        ) : (
                            <RightSide bgWeatherSecondary={bgWeatherSecondary} />
                        )}
                    </div>
                </div>
            </SkeletonTheme>
        </div>
    );
}