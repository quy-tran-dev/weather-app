import React from 'react'
import HumidityCard from '../weather-status-box/HumidityCard'
import { motion } from 'framer-motion';
import { cardItemVariants, cardListVariants } from '../../../lib/animation';
export default function MoreDetails({ bgWeatherSecondary }: { bgWeatherSecondary: string }) {
    return (
        <> {/* More Details (Humidity Cards) - Grouped for staggered animation */}
            <motion.div variants={cardItemVariants}>
                <h3 className="font-semibold text-base sm:text-lg mb-2 mt-4 px-1">More Details</h3>
            </motion.div>
            <motion.div
                className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4"
                variants={cardListVariants} // Stagger cho group này
            >
                {[...Array(4)].map((item, index) => (
                    <HumidityCard key={`humidity1-${index}`} value={70 + index * 5} color={bgWeatherSecondary} />
                ))}
            </motion.div>
            <motion.div
                className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4"
                variants={cardListVariants} // Stagger cho group này
            >
                {[...Array(4)].map((item, index) => (
                    <HumidityCard key={`humidity2-${index}`} value={70 + index * 5} color={bgWeatherSecondary} />
                ))}
            </motion.div>
        </>
    )
}
