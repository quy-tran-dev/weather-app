import React from 'react'
import { motion, AnimatePresence } from 'framer-motion';

export default function InfoCityCard() {
    return (
        <motion.div
            className="z-10 p-3 sm:p-4 text-shadow-lg/30 rounded-2xl bg-[rgba(255,255,255,0.1)] backdrop-blur-sm shadow-md relative" // Nền có hiệu ứng blur nhẹ
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
        >
            <div className='relative p-3 sm:p-4 hover:cursor-pointer hover:scale-105 transition-all duration-300'>
                <h2 className="text-lg sm:text-xl font-semibold flex items-center gap-2">
                    Ho Chi Minh City, VN
                    <img src="https://openweathermap.org/images/flags/vn.png" alt="Vietnam Flag" className="w-5 h-auto" />
                </h2>
                <p className="text-xs sm:text-sm">Today {new Date().toLocaleDateString('en-US', { day: 'numeric', month: 'short' })}.</p>
                <div className="mt-6 sm:mt-10 text-center">
                    <h1 className="text-5xl sm:text-6xl font-bold">27°</h1>
                    <p className="text-base sm:text-lg mt-2">☀️ Sunny</p>
                </div>
                <div className="absolute inset-x-0 top-0 h-full rounded-2xl opacity-75 z-[-1]">
                    <img src='https://cdn.pixabay.com/photo/2016/04/23/19/03/ho-chi-minh-city-1348092_640.jpg'
                        alt="Ho Chi Minh City"
                        className="h-full w-full object-cover rounded-2xl"
                    />
                </div>
            </div>
        </motion.div>
    )
}
