import React from 'react'
import Card from '../cards/Card'
import CardHeader from '../cards/CardHeader'
import Skeleton from 'react-loading-skeleton'
import CardContent from '../cards/CardContent'
import DayCardSkeleton from './card/DayCardSkeleton'
import HumidityCardSkeleton from './card/HumidityCardSkeleton'


export default function RightSideSkeleton() {
    return (
        <div className='p-3 sm:p-6 space-y-4 sm:space-y-6 overflow-y-auto h-full custom-scrollbar'>
            <Card>
                <CardHeader> <Skeleton width="70%" height={24} /> </CardHeader>
            </Card>
            <Card>
                <CardContent className="p-4 space-y-2">
                    <Skeleton width="40%" height={20} />
                    <Skeleton height={150} />
                </CardContent>
            </Card>
            <Card className="w-full overflow-hidden">
                <CardContent className="p-4">
                    <div className="flex p-2 space-x-4 sm:space-x-6 items-center w-full overflow-x-auto custom-scrollbar">
                        {[...Array(5)].map((_, index) => <DayCardSkeleton key={index} />)}
                    </div>
                </CardContent>
            </Card>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
                {[...Array(4)].map((_, index) => <HumidityCardSkeleton key={index} />)}
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
                {[...Array(4)].map((_, index) => <HumidityCardSkeleton key={index} />)}
            </div>
        </div>
    )
}
