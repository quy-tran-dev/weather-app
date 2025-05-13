import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css';

export default function HumidityCardSkeleton() {
  return (
     <div className="p-4 rounded-lg shadow space-y-2 bg-white">
            <Skeleton width={100} /> {/* Title/Label */}
            <Skeleton width={80} height={20} /> {/* Value */}
            <Skeleton circle width={30} height={30} /> {/* Optional Icon placeholder */}
        </div>
  )
}
