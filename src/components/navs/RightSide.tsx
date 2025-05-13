import React, { use } from 'react'
import { motion } from 'framer-motion';
import { cardItemVariants, rightContentVariants } from '../../lib/animation';
import Card from '../cards/Card';
import CardHeader from '../cards/CardHeader';
import InfoCityCard from '../cards/InfoCityCard';
import WeatherDay from '../cards/weather-status-side/WeatherDay';
import MoreDetails from '../cards/weather-status-side/MoreDetails';
import type { ResponseWeatherCoord } from '../../interfaces/responses/weather-coord.interface';

export default function RightSide({ bgWeatherSecondary, currentCity, }: { bgWeatherSecondary: string, currentCity: ResponseWeatherCoord | null }) {



    return (
        <motion.div
            className='p-3 sm:p-6 space-y-4 sm:space-y-6 overflow-y-auto h-full custom-scrollbar'
            variants={rightContentVariants} // Áp dụng variant cho toàn bộ right content
            initial="hidden"
            animate="visible"
        >
            <motion.div variants={cardItemVariants} className="text-gray-200"> {/* Upcoming Hours Graph */}
                <InfoCityCard side={true} infoCity={currentCity} nameCity={currentCity?.city.name} />
            </motion.div>
            <WeatherDay />
            <MoreDetails bgWeatherSecondary={bgWeatherSecondary} />
        </motion.div>
    )
}
