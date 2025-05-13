import React from 'react'
import Card from '../Card'
import CardContent from '../CardContent'
import { cardItemVariants, cardListVariants } from '../../../lib/animation';
import { motion} from 'framer-motion';
import DayCard from '../DayCard';
export default function WeatherDay() {
  return (
    <motion.div variants={cardItemVariants} className="w-full"> {/* Day Cards */}
      <Card>
        <CardContent className="p-2 sm:p-4">
          <h3 className="font-semibold text-base sm:text-lg mb-2 px-2">Forecast</h3>
          <motion.div
            className="flex p-2 space-x-3 sm:space-x-4 items-center text-black w-full overflow-x-auto custom-scrollbar"
            variants={cardListVariants} // Stagger cho DayCard items
          >
            {[...Array(8)].map((item, index) =>
              <DayCard
                key={index}
                altIcon="Weather icon"
                icon="10d" // Thay bằng icon thực tế
                time={index === 0 ? "Now" : `${10 + index}:00`}
                value={`${25 + index}°`}
                day={new Date(Date.now() + index * 24 * 60 * 60 * 1000).toLocaleDateString('en-US', { day: 'numeric', month: 'short' })}
              />
            )}
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
