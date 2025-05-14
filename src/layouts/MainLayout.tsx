import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

import { weatherConfig } from '../lib/weather-config';
import LeftSideBar from '../components/navs/LeftSideBar';
import LeftSideSkeleton from '../components/skeleton/LeftSideSkeleton';

import RightSide from '../components/navs/RightSide';
import RightSideSkeleton from '../components/skeleton/RightSideSkeleton';
import { ConvertStringToSlug } from '../utils/hanlde-string.util';
import { FetchingData } from '../services/fetch.service';
import { setCookie } from 'nookies';
import type { ResponseWeatherCoord } from '../interfaces/responses/weather-coord.interface';

import { Menu, SearchIcon } from 'lucide-react';
import { getLeftSideVariants } from '../lib/animation';
import DynamicPopup from '../components/popups/DynamicPopup';
import SearchSide from '../components/searching/SearchSide';

const DEFAULT_LATITUDE = 10.762622;
const DEFAULT_LONGITUDE = 106.660172;
export default function MainLayout() {

    const [loadingInitial, setLoadingInitial] = useState<boolean>(true);


    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const openPopup = () => setIsPopupOpen(true);
    const closePopup = () => setIsPopupOpen(false);


    const [bgWeatherMain, setBgWeatherMain] = useState<string>(weatherConfig.color_status.cloudy.bg_main);
    const [rgbaWeatherMain, setRgbaWeatherMain] = useState<string>(weatherConfig.color_status.cloudy.rgba_bg_main);
    const [textWeatherMain, setTextWeatherMain] = useState<string>(weatherConfig.color_status.cloudy.text_main);
    const [bgWeatherSecondary, setBgWeatherSecondary] = useState<string>(weatherConfig.color_status.cloudy.bg_secondary);
    const [textWeatherSecondary, setTextWeatherSecondary] = useState<string>(weatherConfig.color_status.cloudy.text_secondary);

    const [currentLat, setCurrentLat] = useState<number | null>(null);
    const [currentLon, setCurrentLon] = useState<number | null>(null);
    const [currentCity, setCurrentCity] = useState<ResponseWeatherCoord | null>(null);
    const [statusWeather, setStatusWeather] = useState<string | null>(null);


    const fetchingDataService = new FetchingData();

    const getColor = (status: string) => {
        const slugifiedStatus = ConvertStringToSlug(status);
        let config;
        // console.log('status: ' + status + ' slugifiedStatus: ' + slugifiedStatus);

        if (Object.prototype.hasOwnProperty.call(weatherConfig.color_status, slugifiedStatus)) {
            config = weatherConfig.color_status[slugifiedStatus];
        } else {
            const cloudyStatus = ConvertStringToSlug("cloudy");
            if (Object.prototype.hasOwnProperty.call(weatherConfig.color_status, cloudyStatus)) {
                config = weatherConfig.color_status[cloudyStatus];
            } else {
                console.error("Error: 'cloudy' status configuration not found.");
                return;
            }
        }

        if (config) {
            setStatusWeather(slugifiedStatus);
            setBgWeatherMain(config.bg_main);
            setRgbaWeatherMain(config.rgba_bg_main);
            setTextWeatherMain(config.text_main);
            setBgWeatherSecondary(config.bg_secondary);
            setTextWeatherSecondary(config.text_secondary);
        }
    };

    const fetchWeatherData = async (lat: number, lon: number) => {
        try {
            const weatherData = await fetchingDataService.getWeatherFollowCoord(lat, lon);
            console.log('Dữ liệu thời tiết cập nhật:', weatherData);
            setCookie(null, 'weatherData', JSON.stringify(weatherData), {
                path: '/',
                maxAge: 3600,
            });
            if (weatherData) {
                setCurrentCity(weatherData);
            }
            if (weatherData?.list[0].weather?.[0]?.main) {
                getColor(weatherData.list[0].weather[0].main);
            } else {
                getColor('Cloudy');
            }
        } catch (error) {
            console.error('Lỗi khi gọi service thời tiết:', error);
            getColor('Cloudy');
        } finally {
            setLoadingInitial(false);
        }
    };

    const toggleLeftSideBar = () => {
        openPopup();
    };

    useEffect(() => {
        const getInitialLocation = async () => {
            let initialLat = DEFAULT_LATITUDE;
            let initialLon = DEFAULT_LONGITUDE;

            if (navigator.geolocation) {
                try {
                    const position = await new Promise<GeolocationPosition>((resolve, reject) => {
                        navigator.geolocation.getCurrentPosition(
                            (pos) => resolve(pos),
                            (err) => {
                                console.error('Lỗi khi lấy vị trí ban đầu:', err);
                                reject(err);
                            }
                        );
                    });
                    initialLat = position.coords.latitude;
                    initialLon = position.coords.longitude;
                    setCurrentLat(initialLat);
                    setCurrentLon(initialLon);
                    fetchWeatherData(initialLat, initialLon); // Gọi API lần đầu với vị trí lấy được
                } catch (error) {
                    console.error('Không lấy được vị trí ban đầu, sử dụng mặc định.');
                    fetchWeatherData(initialLat, initialLon); // Gọi API với vị trí mặc định
                }
            } else {
                console.error('Trình duyệt không hỗ trợ Geolocation.');
                fetchWeatherData(initialLat, initialLon); // Gọi API với vị trí mặc định
            }
        };

        getInitialLocation();
    }, []); // Chỉ chạy một lần sau khi component mount

    useEffect(() => {
        if (currentLat !== null && currentLon !== null) {
            fetchWeatherData(currentLat, currentLon);
        }
    }, [currentLat, currentLon]);


    const handleRandom = () => {
        const randomStatus = ["Thunderstorm", "Drizzle", "Rain", "Snow", "Mist", "Smoke", "Haze", "Dust", "Fog", "Sand", "Ash", "Squall", "Tornado", "Clear", "Clouds"][Math.floor(Math.random() * 15)];
        const randomLatLon = [
            [12.9716, 77.5946], // New Delhi
            [28.7041, 77.1025], // New York
            [19.0760, 72.8777], // Mumbai
            [22.5726, 88.3639], // Kolkata
            [23.0225, 72.5714], // Pune
            [51.509865, -0.118092], // London
            [-33.8688, 151.2093], // Sydney
            [10.7626, 106.6602], //VN
        ][Math.floor(Math.random() * 8)];

        setCurrentLat(randomLatLon[0]);
        setCurrentLon(randomLatLon[1]);
        getColor(randomStatus);
        // console.log(`Random status: ${randomStatus}: ${bgWeatherMain}`);
    };

    return (
        <motion.div
            className={`min-h-screen h-[100vh] ${loadingInitial ? 'bg-gray-200' : bgWeatherMain} relative flex items-center justify-center p-2 sm:p-4 transition-colors duration-500`}
            animate={{ backgroundColor: loadingInitial ? 'rgb(229, 231, 235)' : rgbaWeatherMain }}
            transition={{ duration: 0.3 }}
        >
            <button
                className='absolute top-4 right-4 bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors duration-300'
                onClick={handleRandom}
            >
                Random
            </button>
            <SkeletonTheme baseColor="#e0e0e0" highlightColor="#f5f5f5" borderRadius="0.5rem">
                <div
                    className={`h-[95%] w-[95%] rounded-3xl shadow-xl grid grid-cols-1 lg:grid-cols-4 gap-2 overflow-hidden 
                            ${loadingInitial ? 'bg-gray-100' : bgWeatherSecondary} transition-colors duration-500`}
                >
                    {/* Left Sidebar */}
                    <DynamicPopup
                        isOpen={isPopupOpen}
                        onClose={closePopup}
                        direction="bottom-top" // Hoặc "top-bottom", "left-right", "right-left"
                    >
                        <motion.div
                            variants={{
                                open: { y: 0 },
                                closed: { y: '-100%' },
                            }}
                            initial="closed"
                            animate={isPopupOpen ? "open" : "closed"}
                            transition={{ duration: 0.3 }}
                            className="flex w-full h-full  z-20 overflow-y-auto custom-scrollbar" // Sử dụng position: fixed để không ảnh hưởng đến grid trực tiếp
                        >
                            <SearchSide bgWeatherSecondary={bgWeatherSecondary} statusWeather={statusWeather} currentCity={currentCity} />
                        </motion.div>
                    </DynamicPopup>
                    {/* Right Content */}
                    <motion.div
                        className={`relative col-span-1 lg:col-span-4 p-0 sm:p-2 top-0 rounded-3xl h-full overflow-hidden text-black ${loadingInitial ? 'bg-white' : 'bg-white'} transition-all duration-500 `}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                    >

                        {loadingInitial ? (
                            <RightSideSkeleton />
                        ) : (
                            <RightSide bgWeatherSecondary={bgWeatherMain} currentCity={currentCity} />
                        )}
                    </motion.div>
                </div>
            </SkeletonTheme>
            {!loadingInitial && !isPopupOpen && (
                <button
                    onClick={toggleLeftSideBar}
                    className={`absolute bottom-4 right-4 ${textWeatherMain} cursor-pointer bg-white p-2 rounded-md shadow-md z-20 hover:bg-gray-700 transition-colors duration-300`}
                >
                    {/* Bạn có thể thay thế bằng icon menu */}
                    <SearchIcon className='hover:scale-110' />
                </button>
            )}
        </motion.div>
    );
}

// const getColor = (status: string) => {
//     status = ConvertStringToSlug(status);
//     for (const key in weatherConfig.color_status) {
//         if (Object.prototype.hasOwnProperty.call(weatherConfig.color_status, key)) {
//             const keyLang = ConvertStringToSlug(weatherConfig.color_status[key].key[weatherConfig.lang]);
//             console.log('--------');
//             console.log('key: ' + key + ' status: ' + ConvertStringToSlug(status) + ' key[lang]: ' + weatherConfig.color_status[key].key[weatherConfig.lang] + ' key[lang].toLowerCase(): ' + keyLang);
//             console.log('--------' + (keyLang === status.toLowerCase()) + '-----');
//             console.log('--------');

//             if (keyLang === status.toLowerCase()) {
//                 setBgWeatherMain(weatherConfig.color_status[key].bg_main);
//                 setTextWeatherMain(weatherConfig.color_status[key].text_main);
//                 setBgWeatherSecondary(weatherConfig.color_status[key].bg_secondary);
//                 setTextWeatherSecondary(weatherConfig.color_status[key].text_secondary);
//                 return; // Exit the getColor function after finding a match
//             }
//         }
//     }
// };