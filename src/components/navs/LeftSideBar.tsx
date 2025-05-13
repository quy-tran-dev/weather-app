import React from 'react'
import { motion, AnimatePresence } from 'framer-motion';
import { sidebarVariants } from '../../lib/animation';
import InputSearch from '../searching/InputSearch';
import InfoCityCard from '../cards/InfoCityCard';

export default function LeftSideBar({ bgWeatherSecondary }:{bgWeatherSecondary: string}) {
    return (
        <motion.div
            className={`${bgWeatherSecondary} rounded-3xl relative text-white col-span-1 lg:col-span-1 p-2 overflow-hidden flex flex-col justify-between h-full`}
            variants={sidebarVariants}
            initial="hidden"
            animate="visible"
        >
            <div className='z-10 p-3 sm:p-4 text-shadow-lg/30 flex items-center rounded-2xl bg-[rgba(255,255,255,0.1)] backdrop-blur-sm'>
                <InputSearch />
            </div>
            <div className='flex flex-col mt-2 gap-4 h-full overflow-y-auto custom-scrollbar [&::-webkit-scrollbar]:hidden'>
                {
                    Array.from({ length: 5 }).map((_, index) => (
                       <InfoCityCard key={index} />
                    ))
                }

                {/* Có thể thêm các item khác vào đây với animation tương tự nếu cần */}
            </div>
            <motion.div
                className="absolute inset-x-0 top-0 m-2 mt-0 h-full rounded-2xl " // Đảm bảo z-index thấp hơn
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1, duration: 0.7 }}
            >
                <img src='https://cdn.pixabay.com/photo/2018/07/02/22/18/sunflower-3512656_1280.jpg'
                    alt="Sunflower background"
                    className="h-full w-full object-cover rounded-4xl py-5 px-2" // Giảm opacity để nội dung dễ đọc hơn
                />
            </motion.div>
        </motion.div>
    )
}
