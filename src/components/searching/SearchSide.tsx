import React, { use, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion';
import { sidebarVariants } from '../../lib/animation';
import InputSearch from '../searching/InputSearch';
import InfoCityCard from '../cards/InfoCityCard';
import type { ResponseWeatherCoord } from '../../interfaces/responses/weather-coord.interface';
import { ConvertStringToSlug } from '../../utils/hanlde-string.util';
import { weatherConfig } from '../../lib/weather-config';

export default function SearchSide({ bgWeatherSecondary, statusWeather, currentCity }: { bgWeatherSecondary: string, statusWeather: string | null, currentCity: ResponseWeatherCoord | null }) {
    const [keyWeather, setKeyWeather] = React.useState<{ [key: string]: string }>(
        {
            en: 'Day Cloudy sky',
            vi: 'Bầu trời có mây ban ngày',
            img: "https://cdn.pixabay.com/photo/2018/07/02/22/18/sunflower-3512656_1280.jpg"
        }
    );
    const getImg = (status: string) => {
        const slugifiedStatus = ConvertStringToSlug(status);
        let config;
        console.log('status: ' + status + ' slugifiedStatus: ' + slugifiedStatus);

        if (Object.prototype.hasOwnProperty.call(weatherConfig.color_status, slugifiedStatus)) {
            config = weatherConfig.color_status[slugifiedStatus];
        } else {
            const cloudyStatus = ConvertStringToSlug("cloudy");
            if (Object.prototype.hasOwnProperty.call(weatherConfig.color_status, cloudyStatus)) {
                config = weatherConfig.color_status[cloudyStatus];
            } else {
                console.error("Error: 'cloudy' status configuration not found.");
                return;
            }
        }

        if (config) {
            setKeyWeather(config.key);
        }
    };

    useEffect(() => {
        getImg(statusWeather || 'https://cdn.pixabay.com/photo/2018/07/02/22/18/sunflower-3512656_1280.jpg');
    }, [statusWeather]);

    return (
        <motion.div
            className={`${bgWeatherSecondary}  rounded-2xl relative text-white w-full h-full p-4 overflow-hidden flex flex-col justify-between`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
        >
            <div className='flex flex-col mt-2 gap-4 h-full overflow-y-auto custom-scrollbar [&::-webkit-scrollbar]:hidden'>
                <div className='z-10 p-3 sm:p-4 text-shadow-lg/30 flex items-center rounded-2xl bg-[rgba(255,255,255,0.1)] backdrop-blur-sm'>
                    <InputSearch />
                </div>
               
            </div>
            <div
                className="absolute inset-x-0 top-0 m-2 mt-0 h-full rounded-2xl p-[2px] py-2"
                style={{ opacity: 0.7 }}
            >
                <img src={keyWeather.img}
                    alt={keyWeather.en}
                    className="h-full w-full object-cover rounded-xl"
                />
            </div>
        </motion.div>
    );
}