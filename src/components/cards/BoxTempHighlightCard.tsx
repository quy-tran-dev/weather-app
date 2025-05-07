export default function BoxTempHighlightCard() {
    return (
        <div className="flex flex-row gap-x-2 items-center justify-between">
            <div
                className="flex items-center justify-center bg-purple-400 rounded-md px-4 py-2 text-white text-xs font-semibold w-36"
            >
                <i className="fas fa-arrow-up mr-1"></i>
                <span>26°</span>
                <span className="ml-2">↓ 11°</span>
            </div>

            <div
                className="flex items-center justify-between bg-gray-100 rounded-md px-4 py-2 text-xs text-gray-700 font-semibold"
            >
                <div className="flex items-center space-x-2">
                    <img
                        src="https://placehold.co/20x20/png?text=☁"
                        alt="Cloud icon representing cloudy weather"
                        className="w-5 h-5"
                    />
                    <div>
                        <p>Tuesday</p>
                        <p className="text-xs font-normal">Cloudy</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
