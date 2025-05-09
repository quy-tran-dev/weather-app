import React, { useState, useEffect } from 'react'; // Import useEffect
import Card from '../components/cards/Card';
import CardContent from '../components/cards/CardContent';
import HumidityCard from '../components/cards/weather-status-box/HumidityCard';
import DayCard from '../components/cards/DayCard';
import CardHeader from '../components/cards/CardHeader';

// Import skeleton components
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'; // Import skeleton CSS

// Basic skeleton components to mimic the shape of your cards
// You can customize these further to better match your card layouts
const DayCardSkeleton = () => (
    <div className="flex flex-col items-center space-y-2 p-3 rounded-md w-[80px] md:w-[100px] flex-shrink-0">
        <Skeleton width={40} /> {/* Time */}
        <Skeleton circle width={40} height={40} /> {/* Icon area */}
        <Skeleton width={50} /> {/* Value */}
        <Skeleton width={60} /> {/* Day */}
    </div>
);

const HumidityCardSkeleton = () => (
    <div className="p-4 rounded-lg shadow space-y-2">
        <Skeleton width={100} /> {/* Title/Label */}
        <Skeleton width={80} height={20} /> {/* Value */}
        <Skeleton circle width={30} height={30} /> {/* Optional Icon placeholder */}
    </div>
);


export default function LoadMainLayout() {
    // State to control loading status
    const [isLoading, setIsLoading] = useState<boolean>(true); // Start in loading state

    // State for weather-based colors (likely updated after data loads)
    const [bgWeatherMain, setBgWeatherMain] = useState<string>('bg-main-cloudy-color');
    const [textWeatherMain, setTextWeatherMain] = useState<string>('text-main-cloudy-color');
    const [bgWeatherSecondary, setBgWeatherSecondary] = useState<string>('bg-secondary-cloudy-color');
    const [textWeatherSecondary, setTextWeatherSecondary] = useState<string>('text-secondary-cloudy-color');

    // Function to set colors based on weather status (will be called after data is loaded)
    const getMainColor = (status: string | number) => {
        switch (status) {
            case 'Cloudy':
                setBgWeatherMain('bg-main-cloudy-color');
                setTextWeatherMain('text-main-cloudy-color');
                setBgWeatherSecondary('bg-secondary-cloudy-color');
                setTextWeatherSecondary('text-secondary-cloudy-color');
                break;
            case 'Rainy':
                setBgWeatherMain('bg-main-rainy-color');
                setTextWeatherMain('text-main-rainy-color');
                setBgWeatherSecondary('bg-secondary-rainy-color');
                setTextWeatherSecondary('text-secondary-rainy-color');
                break;
            case 'Sunny':
                setBgWeatherMain('bg-main-sunny-color');
                setTextWeatherMain('text-main-sunny-color');
                setBgWeatherSecondary('bg-secondary-sunny-color');
                setTextWeatherSecondary('text-secondary-sunny-color');
                break;
            case 'Scorching Sun':
                setBgWeatherMain('bg-main-scorching-sun-color');
                setTextWeatherMain('text-main-scorching-sun-color');
                setBgWeatherSecondary('bg-secondary-scorching-sun-color');
                setTextWeatherSecondary('text-secondary-scorching-sun-color');
                break;
            default:
                // Maybe default to cloudy or clear if status is unknown
                setBgWeatherMain('bg-main-cloudy-color');
                setTextWeatherMain('text-main-cloudy-color');
                setBgWeatherSecondary('bg-secondary-cloudy-color');
                setTextWeatherSecondary('text-secondary-cloudy-color');
                break;
        }
    }

    // Simulate data loading
    useEffect(() => {
        // In a real application, you would fetch data here
        // For demonstration, we use a timeout to simulate loading
        const timer = setTimeout(() => {
            setIsLoading(false); // Set loading to false after a delay
            // You would also call getMainColor here based on the fetched data
            // getMainColor(fetchedWeatherStatus);
            getMainColor('Scorching Sun'); // Example: Set color after loading
        }, 3000); // Simulate a 2-second loading time

        return () => clearTimeout(timer); // Cleanup the timer
    }, []); // Empty dependency array means this runs once on mount


    return (
        // Apply main background color dynamically
        <div className={`min-h-screen h-[100vh] ${isLoading ? 'bg-gray-200' : bgWeatherMain} relative flex items-center justify-center p-4 transition-colors duration-500`}>
            {/* Use SkeletonTheme for consistent skeleton styling */}
            <SkeletonTheme baseColor="#e0e0e0" highlightColor="#f5f5f5" borderRadius="0.5rem"> {/* Customize colors and border-radius */}
                {/* Main content container - apply secondary background dynamically */}
                <div className={` ${isLoading ? 'bg-gray-100' : bgWeatherSecondary} h-[95%] w-[95%] rounded-3xl shadow-xl grid grid-cols-1 lg:grid-cols-4 gap-2 overflow-hidden transition-colors duration-500`}>
                    {/* Left Sidebar */}
                    <div className={`${isLoading ? 'bg-gray-300' : bgWeatherSecondary} rounded-3xl relative text-white col-span-2 lg:col-span-1 p-5 flex flex-col justify-between h-full transition-colors duration-500`}>
                        {/* Content inside the sidebar - Conditional rendering */}
                        <div className=''>

                            <div className="z-10 p-2 text-shadow-lg/30 rounded-2xl bg-[rgba(136,136,136,0.3)] shadow-md">
                                {isLoading ? (
                                    <>
                                        <Skeleton width="80%" height={24} /> {/* City/Date header */}
                                        <Skeleton width="60%" height={16} className="mt-1" /> {/* Date */}
                                        <div className="mt-10 text-center">
                                            <Skeleton width={100} height={60} className="mx-auto" /> {/* Temperature */}
                                            <Skeleton width={150} height={24} className="mx-auto mt-2" /> {/* Weather status */}
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        <h2 className="text-xl font-semibold flex items-center gap-2">
                                            Ho Chi Minh City, VN
                                            <img src="https://openweathermap.org/images/flags/vn.png" alt="" />
                                        </h2>
                                        <p className="text-sm">Today 28 Sept.</p>
                                        <div className="mt-10 text-center">
                                            <h1 className="text-6xl font-bold">27°</h1>
                                            <p className="text-lg mt-2">☀️ Sunny</p>
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>
                        {/* Background Image commented out - add conditional render if needed */}
                    </div>

                    {/* Right Content */}
                    {/* Apply background color */}
                    <div className={` ${isLoading ? 'bg-white' : 'bg-white'} relative lg:col-span-3 p-2 col-span-2 rounded-3xl h-full overflow-hidden text-black`}>
                        <div className='p-6 space-y-6 overflow-y-auto h-full
                        [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-gray-300 '>
                            {/* Welcome Header */}
                            <Card>
                                <CardHeader className="flex items-center justify-between">
                                    {isLoading ? (
                                        <Skeleton width="70%" height={24} />
                                    ) : (
                                        <h3 className="font-semibold mb-2 text-2xl">Welcome to Ho Chi Minh City in Viet Nam</h3>
                                    )}
                                </CardHeader>
                            </Card>


                            {/* Upcoming Hours Graph Placeholder */}
                            <Card>
                                <CardContent className="p-4 space-y-2">
                                    {isLoading ? (
                                        <>
                                            <Skeleton width="40%" height={20} /> {/* Header */}
                                            <Skeleton height={150} /> {/* Graph area */}
                                        </>
                                    ) : (
                                        <>
                                            <h3 className="font-semibold mb-2">Upcoming Hours Graph</h3>
                                            <div className="p-15 bg-gray-100 rounded-md flex items-center justify-center text-sm text-gray-500 h-[150px]"> {/* Added fixed height */}
                                                Graph Here (Temp + Rain %)
                                            </div>
                                        </>
                                    )}
                                </CardContent>
                            </Card>

                            {/* Day Cards (Horizontal Scroll) */}
                            {/* Keep the overflow container */}
                            <Card className={"w-full overflow-hidden"}>
                                <CardContent className="p-4">
                                    <div className="flex p-2 space-x-6 items-center text-black w-full overflow-x-auto
                                [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-gray-300 ">
                                        {isLoading ? (
                                            // Render skeleton cards if loading
                                            [...Array(8)].map((_, index) => <DayCardSkeleton key={index} />)
                                        ) : (
                                            // Render actual cards when loaded
                                            [...Array(8)].map((item, index) =>
                                                <DayCard key={index} altIcon="Cloud with rain weather icon" icon="10d" time="Now" value="28°" day={'30/4'} />
                                            )
                                        )}
                                    </div>
                                </CardContent>
                            </Card>


                            {/* More Details (Humidity Cards) */}
                            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                                {isLoading ? (
                                    // Render skeleton humidity cards if loading
                                    [...Array(4)].map((_, index) => <HumidityCardSkeleton key={index} />)
                                ) : (
                                    // Render actual humidity cards when loaded
                                    [...Array(4)].map((item, index) => <HumidityCard value={89} color={bgWeatherSecondary} key={index} />)
                                )}
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                                {isLoading ? (
                                    // Render skeleton humidity cards if loading
                                    [...Array(4)].map((_, index) => <HumidityCardSkeleton key={index} />)
                                ) : (
                                    // Render actual humidity cards when loaded
                                    [...Array(4)].map((item, index) => <HumidityCard value={89} color={bgWeatherSecondary} key={index} />)
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </SkeletonTheme>
        </div>
    );
}





// import React, { useState } from 'react'
// import Card from '../components/cards/Card';
// import CardContent from '../components/cards/CardContent';
// import HumidityCard from '../components/cards/weather-status-box/HumidityCard';
// import DayCard from '../components/cards/DayCard';
// import { Car } from 'lucide-react';
// import CardHeader from '../components/cards/CardHeader';

// export default function LoadMainLayout() {
//     const [bgWeatherMain, setBgWeatherMain] = useState<string>('bg-main-cloudy-color');
//     const [textWeatherMain, setTextWeatherMain] = useState<string>('text-main-cloudy-color');
//     const [bgWeatherSecondary, setBgWeatherSecondary] = useState<string>('bg-secondary-cloudy-color');
//     const [textWeatherSecondary, setTextWeatherSecondary] = useState<string>('text-secondary-cloudy-color');

//     const getMainColor = (status: string | number) => {
//         switch (status) {
//             case 'Cloudy':
//                 setBgWeatherMain('bg-main-cloudy-color');
//                 setTextWeatherMain('text-main-cloudy-color');
//                 setBgWeatherSecondary('bg-secondary-cloudy-color');
//                 setTextWeatherSecondary('text-secondary-cloudy-color');
//                 break;
//             case 'Rainy':
//                 setBgWeatherMain('bg-main-rainy-color');
//                 setTextWeatherMain('text-main-rainy-color');
//                 setBgWeatherSecondary('bg-secondary-rainy-color');
//                 setTextWeatherSecondary('text-secondary-rainy-color');
//                 break;
//             case 'Sunny':
//                 setBgWeatherMain('bg-main-sunny-color');
//                 setTextWeatherMain('text-main-sunny-color');
//                 setBgWeatherSecondary('bg-secondary-sunny-color');
//                 setTextWeatherSecondary('text-secondary-sunny-color');
//                 break;
//             case 'Scorching Sun':
//                 setBgWeatherMain('bg-main-scorching-sun-color');
//                 setTextWeatherMain('text-main-scorching-sun-color');
//                 setBgWeatherSecondary('bg-secondary-scorching-sun-color');
//                 setTextWeatherSecondary('text-secondary-scorching-sun-color');
//                 break;
//             default:
//                 break;
//         }
//     }
//     return (
//         <div className={`min-h-screen h-[90vh] ${bgWeatherMain} relative flex items-center justify-center p-4`}>
//             {/* <div className="absolute inset-x-0 top-0 m-5 h-full rounded-2xl">
//                 <img src='https://cdn.pixabay.com/photo/2024/09/23/17/34/vietnam-9069634_960_720.png'
//                     className="h-[95%] w-full object-cover rounded-2xl"
//                 />
//             </div> */}
//             <div className={` ${bgWeatherSecondary} h-[90%] w-[90%] rounded-3xl shadow-xl grid grid-cols-1 lg:grid-cols-4 gap-2 overflow-hidden
//               `}>
//                 {/* Left Sidebar */}
//                 <div className={`${bgWeatherSecondary} rounded-3xl relative text-white col-span-2 lg:col-span-1 p-6 flex flex-col justify-between h-full`}>
//                     <div className="z-10 p-2 text-shadow-lg/30 rounded-2xl bg-[rgba(136,136,136,0.3)] shadow-md">
//                         <h2 className="text-xl font-semibold flex items-center gap-2">
//                             Ho Chi Minh City, VN
//                             <img src="https://openweathermap.org/images/flags/vn.png" alt="" />
//                         </h2>
//                         <p className="text-sm">Today 28 Sept.</p>
//                         <div className="mt-10 text-center">
//                             <h1 className="text-6xl font-bold">27°</h1>
//                             <p className="text-lg mt-2">☀️ Sunny</p>
//                         </div>
//                     </div>
//                     {/* <div className="absolute inset-x-0 top-0 m-5 h-full rounded-2xl">
//                         <img src='https://cdn.pixabay.com/photo/2021/09/12/08/52/tower-6617723_1280.jpg'
//                             className="h-[95%] w-full object-cover rounded-2xl"
//                         />
//                     </div> */}
//                 </div>

//                 {/* Right Content */}
//                 <div className={`bg-white relative lg:col-span-3 col-span-2 p-6 space-y-6 rounded-3xl text-black`}>
//                     {/* Upcoming Hours Graph Placeholder */}
//                     <Card>
//                         <CardHeader className="flex items-center justify-between">
//                             <h3 className="font-semibold mb-2 text-2xl">Welcome to Ho Chi Minh City in Viet Nam</h3>
//                         </CardHeader>
//                         <CardContent className="p-4">
//                             <h3 className="font-semibold mb-2">Upcoming Hours Graph</h3>
//                             <div className="p-15 bg-gray-100 rounded-md flex items-center justify-center text-sm  text-gray-500">
//                                 Graph Here (Temp + Rain %)
//                             </div>
//                         </CardContent>
//                     </Card>
//                     <Card className={"w-full overflow-hidden"}>
//                         <CardContent className="p-4">
//                             <div className="flex p-2  space-x-6 items-center text-black w-full overflow-x-scroll
//                             [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-gray-300 ">
//                                 {
//                                     [...Array(8)].map((item, index) =>
//                                         <DayCard key={index} altIcon="Cloud with rain weather icon" icon="https://storage.googleapis.com/a1aa/image/c93a45bf-7f6f-400d-25a9-929dc217b4c2.jpg" time="Now" value="28°" day={'30/4'} />
//                                     )
//                                 }
//                             </div>
//                         </CardContent>
//                     </Card>
//                     {/* More Details */}
//                     <div className="grid grid-cols-1 md:grid-cols-4  gap-4">
//                         {
//                             [...Array(4)].map((item, index) => <HumidityCard value={89} color={bgWeatherMain} key={index} />)
//                         }
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }
