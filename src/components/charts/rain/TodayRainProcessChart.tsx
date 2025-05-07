export default function TodayRainProcessChart() {
    return (
        <div className="w-full md:w-64 bg-[#f9f9f9] rounded-xl p-4 flex flex-col gap-4 text-xs font-sans text-gray-600">
            <div className="flex justify-between items-center">
                <h3 className="font-semibold text-gray-900 text-sm">
                    Chance of Rain
                </h3>
                <button aria-label="Settings" className="text-gray-400 hover:text-gray-600 transition-colors duration-300">
                    <i className="fas fa-sliders-h">
                    </i>
                </button>
            </div>
            <div className="flex flex-col gap-3">
                <div className="flex items-center gap-2">
                    <span className="w-10 text-right text-gray-500 text-xs">
                        09 am
                    </span>
                    <div className="h-2 rounded-full bg-purple-200 w-24">
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <span className="w-10 text-right text-gray-500 text-xs">
                        12 pm
                    </span>
                    <div className="h-2 rounded-full bg-purple-300 w-40">
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <span className="w-10 text-right text-gray-500 text-xs">
                        03 pm
                    </span>
                    <div className="h-2 rounded-full bg-purple-400 w-32">
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <span className="w-10 text-right text-gray-500 text-xs">
                        06 pm
                    </span>
                    <div className="h-2 rounded-full bg-purple-700 w-48">
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <span className="w-10 text-right text-gray-500 text-xs">
                        09 pm
                    </span>
                    <div className="h-2 rounded-full bg-purple-200 w-20">
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <span className="w-10 text-right text-gray-500 text-xs">
                        12 am
                    </span>
                    <div className="h-2 rounded-full bg-purple-200 w-8">
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <span className="w-10 text-right text-gray-500 text-xs">
                        03 am
                    </span>
                    <div className="h-2 rounded-full bg-purple-200 w-12">
                    </div>
                </div>
            </div>
            <div className="flex justify-between text-gray-500 text-[10px] font-sans mt-2">
                <span>
                    Sunny
                </span>
                <span>
                    Rainy
                </span>
                <span>
                    Heavy Rain
                </span>
            </div>
        </div>
    )
}
