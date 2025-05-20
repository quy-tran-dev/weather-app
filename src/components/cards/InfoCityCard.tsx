import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import type { ResponseWeatherCoord } from '../../interfaces/responses/weather-coord.interface';
import { formatDMY } from '../../utils/date-format.util';
import { FetchingData } from '../../services/fetch.service';
import { parseCookies, setCookie, destroyCookie } from 'nookies';
import type { ImageInfoCity } from '../../interfaces/image-infoCity.interface';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export default function InfoCityCard({
  side = false,
  infoCity,
  nameCity = "Ho Chi Minh",
}: {
  side?: boolean;
  infoCity?: ResponseWeatherCoord | null;
  nameCity: string | undefined;
}) {
  const fetchingDataService = new FetchingData();
  const [loading, setLoading] = useState(true);
  const [images, setImages] = useState<string[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  const getImageDimensions = (imageUrl: string): Promise<{ width: number; height: number }> => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => resolve({ width: img.naturalWidth, height: img.naturalHeight });
      img.onerror = () => reject(new Error('Failed to load image'));
      img.src = imageUrl;
    });
  };

  useEffect(() => {
    const loadData = async (cityNameForFetch: string) => {
      setLoading(true);
      try {
        const imgCityData = await fetchingDataService.getImageInfoChoseCity(cityNameForFetch);
        console.log('Dữ liệu hình ảnh thành phố:', imgCityData);

        setCookie(null, cityNameForFetch, JSON.stringify(imgCityData), {
          path: '/',
          maxAge: 3600,
        });

        const imageUrls = imgCityData?.hits.map((item: ImageInfoCity) => item.largeImageURL) || [];
        const validImages = await Promise.all(
          imageUrls.map(async (url) => {
            try {
              const { width, height } = await getImageDimensions(url);
              return width > 800 && height > 800 && width > height ? url : null;
            } catch {
              return null;
            }
          })
        );

        const filteredImages = validImages.filter((url): url is string => url !== null).slice(0, 4);
        if (filteredImages.length > 0) {
          setImages(filteredImages);
        } else if (infoCity?.city.country) {
          destroyCookie(null, cityNameForFetch);
          await loadData('country ' + infoCity.city.country);
        }
      } catch (error) {
        console.error('Lỗi khi gọi service ảnh thành phố:', error);
        if (infoCity?.city.country) {
          destroyCookie(null, cityNameForFetch);
          await loadData('country ' + infoCity.city.country);
        }
      } finally {
        setLoading(false);
      }
    };

    const checkAndLoadData = async () => {
      const cookies = parseCookies(null);
      const cachedData = cookies[nameCity || "Ho Chi Minh"];

      if (cachedData) {
        try {
          const parsedData = JSON.parse(cachedData);
          const imageUrls = parsedData?.hits.map((item: ImageInfoCity) => item.largeImageURL) || [];
          const validImages = await Promise.all(
            imageUrls.map(async (url:string) => {
              try {
                const { width, height } = await getImageDimensions(url);
                return width > 800 && height > 800 && width > height ? url : null;
              } catch {
                return null;
              }
            })
          );

          const filteredImages = validImages.filter((url): url is string => url !== null).slice(0, 4);
          if (filteredImages.length > 0) {
            setImages(filteredImages);
            setLoading(false);
            return;
          }
        } catch (error) {
          console.error('Lỗi khi parse cookie:', error);
          destroyCookie(null, nameCity || "Ho Chi Minh");
        }
      }

      await loadData(nameCity || "Ho Chi Minh");
    };

    checkAndLoadData();
  }, [nameCity, infoCity?.city.country]);

  return (
    <div className="relative h-full w-full overflow-hidden">
      <motion.div
        ref={containerRef}
        className="flex p-4 gap-6 h-full overflow-x-auto scroll-smooth scrollbar-hide [&::-webkit-scrollbar]:hidden"
        initial={{ x: 0 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5 }}
      >
        {loading || !infoCity ? (
          Array.from({ length: 4 }).map((_, index) => (
            <div key={index} className="min-w-[300px] w-full flex-shrink-0">
              <Skeleton height={200} className="w-full rounded-2xl" />
              <div className="mt-4">
                <Skeleton width={150} height={24} />
                <Skeleton width={80} height={18} className="mt-2" />
              </div>
            </div>
          ))
        ) : (
          images.map((image, index) => (
            <motion.div
              key={index}
              className={`min-w-[300px] w-full flex-shrink-0 p-4 sm:p-6 text-shadow-lg/30 rounded-2xl bg-[rgba(255,255,255,0.1)] backdrop-blur-sm shadow-md relative ${side ? 'h-full' : 'hover:cursor-pointer hover:scale-[102%]'} transition-all duration-300`}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <div className="relative p-3 sm:p-4 min-h-[400px] h-full ">
                <motion.div
                  className="absolute inset-0 rounded-2xl opacity-75 z-[-1]"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: side ? 1 : 0.85 }}
                  transition={{ delay: 0.1, duration: 0.7 }}
                >
                  <img
                    src={image}
                    alt={`${nameCity}-slide-${index}`}
                    className="h-full w-full object-cover rounded-2xl"
                  />
                </motion.div>
                {side ? (
                  <div className="flex items-center gap-2">
                    <div className="flex items-center">
                      <img
                        src={`https://openweathermap.org/img/wn/${infoCity.list[0].weather[0].icon}@2x.png`}
                        alt={infoCity.list[0].weather[0].description}
                        width={90}
                        height={90}
                        className=""
                      />
                    </div>
                    <h2 className="text-lg sm:text-xl font-semibold flex items-center gap-2">
                      {infoCity.city.name}, {infoCity.city.country?.toLocaleUpperCase()}
                      <img
                        src={`https://openweathermap.org/images/flags/${infoCity.city.country?.toLowerCase()}.png`}
                        alt={`${infoCity.city.country?.toLocaleLowerCase()} Flag`}
                        className="w-5 h-auto"
                      />
                    </h2>
                  </div>
                ) : (
                  <>
                    <h2 className="text-lg sm:text-xl font-semibold flex items-center gap-2">
                      {infoCity.city.name}, {infoCity.city.country?.toLocaleUpperCase()}
                      <img
                        src={`https://openweathermap.org/images/flags/${infoCity.city.country?.toLowerCase()}.png`}
                        alt={`${infoCity.city.country?.toLocaleLowerCase()} Flag`}
                        className="w-5 h-auto"
                      />
                    </h2>
                    <p className="text-xs sm:text-sm">{infoCity.list[0].dt && formatDMY(infoCity.list[0].dt)}.</p>
                    <div className="mt-6 sm:mt-10 text-center">
                      <h1 className="text-5xl sm:text-6xl font-bold">{Math.round(infoCity.list[0].main.temp - 273.15)}°</h1>
                      <p className="text-base sm:text-lg mt-2">
                        <img
                          src={`https://openweathermap.org/img/wn/${infoCity.list[0].weather[0].icon}@2x.png`}
                          alt={infoCity.list[0].weather[0].description}
                          className="w-5 h-auto"
                        />{' '}
                        {infoCity.list[0].weather[0].main}
                      </p>
                    </div>
                  </>
                )}
              </div>
            </motion.div>
          ))
        )}
      </motion.div>
    </div>
  );
}
// import React, { useEffect } from 'react';
// import { motion } from 'framer-motion';
// import type { ResponseWeatherCoord } from '../../interfaces/responses/weather-coord.interface';
// import { formatDMY } from '../../utils/date-format.util';
// import { FetchingData } from '../../services/fetch.service';
// import { setCookie } from 'nookies';
// import type { ImageInfoCity } from '../../interfaces/image-infoCity.interface';
// import Skeleton from 'react-loading-skeleton';
// import 'react-loading-skeleton/dist/skeleton.css';

// export default function InfoCityCard({ side = false, infoCity, nameCity = "Ho Chi Minh" }: { side?: boolean, infoCity?: ResponseWeatherCoord | null, nameCity: string | undefined }) {
//     const fetchingDataService = new FetchingData();
//     const [loading, setLoading] = React.useState(true);
//     const [imgCity, setImgCity] = React.useState<string | null>(null);

//     useEffect(() => {
//         console.log('key use search (prop): ', nameCity);
//         console.log('key props: ', nameCity);
//         console.log('----------------');

//         const fetchData = async (cityNameForFetch: string) => {
//             setLoading(true);
//             try {
//                 const imgCityData = await fetchingDataService.getImageInfoChoseCity(cityNameForFetch);
//                 console.log('Dữ liệu hình ảnh thành phố:', imgCityData);
//                 setCookie(null, 'CityImg', JSON.stringify(imgCityData), {
//                     path: '/',
//                     maxAge: 3600,
//                 });
//                 const filterImgCity = imgCityData?.hits.filter((item: ImageInfoCity) => {
//                     return item.imageWidth > 1000 && item.imageHeight > 1000 && item.imageWidth > item.imageHeight;
//                 });
//                 if (filterImgCity.length === 0) {
//                     console.log('filterImgCity', filterImgCity);
//                     // Không cần set state cityName nữa, gọi lại fetchData với country
//                     if (infoCity?.city.country) {
//                         fetchData('country ' + infoCity.city.country);
//                     }
//                     return;
//                 }
//                 setImgCity(filterImgCity?.[0]?.largeImageURL);
//             } catch (error) {
//                 console.error('Lỗi khi gọi service ảnh thành phố:', error);
//                 // Không cần set state cityName nữa, gọi lại fetchData với country
//                 if (infoCity?.city.country) {
//                     fetchData('country ' + infoCity.city.country);
//                 }
//             } finally {
//                 setLoading(false);
//             }
//         };

//         // Gọi fetchData trực tiếp với prop nameCity
//         fetchData(nameCity || "Ho Chi Minh"); // Sử dụng fallback nếu nameCity là undefined

//     }, [nameCity, infoCity?.city.country]);

//     return (
//         <motion.div
//             className={`z-10 p-3 sm:p-4 text-shadow-lg/30 rounded-2xl bg-[rgba(255,255,255,0.1)] backdrop-blur-sm shadow-md relative ${side ?  "h-full w-full": ""}`}
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.2, duration: 0.5 }}
//         >
//             <div className={`relative p-3 sm:p-4 ${side ? 'min-h-[400px] h-full' : ' hover:cursor-pointer hover:scale-[102%]'} transition-all duration-300`}>
//                 {loading || !infoCity ? (
//                     // Hiển thị skeleton khi đang tải hoặc không có dữ liệu thời tiết
//                     <>
//                         <div className="flex items-center gap-2">
//                             <Skeleton circle width={90} height={90} />
//                             <div>
//                                 <Skeleton width={150} height={24} />
//                                 <Skeleton width={80} height={18} />
//                             </div>
//                         </div>
//                         <div className="mt-6 sm:mt-10 text-center">
//                             <Skeleton width={100} height={60} />
//                             <Skeleton width={120} height={20} className="mt-2" />
//                         </div>
//                     </>
//                 ) : (
//                     // Hiển thị nội dung thực khi đã tải xong dữ liệu
//                     <>
//                         {side ? (
//                             <div className="flex items-center gap-2">
//                                 <div className=" flex items-center">
//                                     <img src={`https://openweathermap.org/img/wn/${infoCity?.list[0].weather[0].icon}@2x.png`} alt={infoCity?.list[0].weather[0].description} width={90} height={90} className="" />
//                                 </div>
//                                 <h2 className="text-lg sm:text-xl font-semibold flex items-center gap-2">
//                                     {infoCity?.city.name}, {infoCity?.city.country?.toLocaleUpperCase()}
//                                     <img src={`https://openweathermap.org/images/flags/${infoCity?.city.country?.toLowerCase()}.png`} alt={`${infoCity?.city.country?.toLocaleLowerCase()} Flag`} className="w-5 h-auto" />
//                                 </h2>
//                             </div>
//                         ) : (
//                             <>
//                                 <h2 className="text-lg sm:text-xl font-semibold flex items-center gap-2">
//                                     {infoCity?.city.name}, {infoCity?.city.country?.toLocaleUpperCase()}
//                                     <img src={`https://openweathermap.org/images/flags/${infoCity?.city.country?.toLowerCase()}.png`} alt={`${infoCity?.city.country?.toLocaleLowerCase()} Flag`} className="w-5 h-auto" />
//                                 </h2>
//                                 <p className="text-xs sm:text-sm">{infoCity!.list[0].dt && formatDMY(infoCity!.list[0].dt)}.</p>
//                                 <div className="mt-6 sm:mt-10 text-center">
//                                     <h1 className="text-5xl sm:text-6xl font-bold">{Math.round(infoCity!.list[0].main.temp - 273.15)}°</h1>
//                                     <p className="text-base sm:text-lg mt-2">
//                                         <img src={`https://openweathermap.org/img/wn/${infoCity?.list[0].weather[0].icon}@2x.png`} alt={infoCity?.list[0].weather[0].description} className="w-5 h-auto" /> {infoCity?.list[0].weather[0].main}
//                                     </p>
//                                 </div>
//                             </>
//                         )}
//                     </>
//                 )}

//                 <motion.div
//                     className="absolute inset-x-0 top-0 h-full rounded-2xl opacity-75 z-[-1]"
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: side ? 1 : 0.85 }}
//                     transition={{ delay: 0.1, duration: 0.7 }}
//                 >
//                     {loading || !imgCity ? (
//                         // Skeleton cho ảnh nền
//                         <Skeleton className="h-full w-full object-cover rounded-2xl" />
//                     ) : (
//                         // Hiển thị ảnh nền thực
//                         <img
//                             src={imgCity || 'https://cdn.pixabay.com/photo/2016/04/23/19/03/ho-chi-minh-city-1348092_640.jpg'} // Sử dụng imgCity hoặc ảnh mặc định
//                             alt={nameCity}
//                             className="h-full w-full object-cover rounded-2xl"
//                         />
//                     )}
//                 </motion.div>
//             </div>
//         </motion.div>
//     );
// }