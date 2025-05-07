export default function SideBarMain() {
    return (
        <nav className="flex flex-col bg-main-blue rounded-[30px] w-full gap-y-6 text-white text-xl">
            <div className="flex pt-6 pb-6 justify-center hover:text-white/80 transition-colors duration-300" >
                <a className="flex items-center gap-3" href="#">
                    <i className="fas fa-home text-base">
                    </i>
                    <span>
                        Home
                    </span>
                </a>
            </div>
            <div className="flex pt-6 pb-6 justify-center hover:text-white/80 transition-colors duration-300">
                <a className="flex items-center gap-3 hover:text-white/80" href="#">
                    <i className="fas fa-cloud-sun-rain text-base">
                    </i>
                    <span>
                        Forecast
                    </span>
                </a>
            </div>
            <div className="flex pt-6 pb-6 justify-center hover:text-white/80 transition-colors duration-300">
                <a className="flex items-center gap-3 hover:text-white/80" href="#">
                    <i className="fas fa-map-marker-alt text-base">
                    </i>
                    <span>
                        Locations
                    </span>
                </a>
            </div>
            <div className="flex p-4 justify-center hover:text-white/80 transition-colors duration-300 bg-gray-500 border-l-5 border-white">
                <a className="flex items-center gap-3 rounded-r-[20px] px-4 py-2 text-white " href="#">
                    <i className="fas fa-chart-line text-base">
                    </i>
                    <span>
                        Analytics
                    </span>
                </a>
            </div>
            <div className="flex pt-6 pb-6 justify-center hover:text-white/80 transition-colors duration-300">
                <a className="flex items-center gap-3 hover:text-white/80" href="#">
                    <i className="fas fa-calendar-alt text-base">
                    </i>
                    <span>
                        Calendar
                    </span>
                </a>
            </div>
            <div className="flex pt-6 pb-6 justify-center hover:text-white/80 transition-colors duration-300">
                <a className="flex items-center gap-3 hover:text-white/80" href="#">
                    <i className="fas fa-cog text-base">
                    </i>
                    <span>
                        Settings
                    </span>
                </a>
            </div>
        </nav>
    )
}
