import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css';

export default function DayCardSkeleton() {
    return (
        <div className="flex flex-col items-center space-y-2 p-3 rounded-md w-[80px] md:w-[100px] flex-shrink-0 bg-white shadow">
            <Skeleton width={40} /> {/* Time */}
            <Skeleton circle width={40} height={40} /> {/* Icon area */}
            <Skeleton width={50} /> {/* Value */}
            <Skeleton width={60} /> {/* Day */}
        </div>
    )
}
