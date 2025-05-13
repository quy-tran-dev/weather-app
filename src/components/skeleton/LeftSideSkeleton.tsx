import React from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
export default function LeftSideSkeleton() {
    return (
        <div className="bg-gray-300 rounded-3xl col-span-1 lg:col-span-1 p-2 flex flex-col overflow-hidden justify-between h-full">
            <div className='flex flex-col gap-4 h-full overflow-y-auto custom-scrollbar p-2'>
                <Skeleton width="80%" height={24} />
                {Array.from({ length: 5 }).map((_, index) => ( // Giảm số lượng skeleton items
                    <div key={index} className="z-10 p-2 rounded-2xl bg-[rgba(136,136,136,0.3)] shadow-md relative">
                        <Skeleton width="80%" height={24} />
                        <Skeleton width="60%" height={16} className="mt-1" />
                        <div className="mt-10 text-center">
                            <Skeleton width={100} height={60} className="mx-auto" />
                            <Skeleton width={150} height={24} className="mx-auto mt-2" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
