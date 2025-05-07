export default function ImageLocationCard() {
    return (
        <div className="relative rounded-xl overflow-hidden shadow-md max-w-[100%]">
            <img alt="Golden Gate Bridge at sunset with clouds, warm orange light" className="w-full h-auto object-cover" height="180" src="https://storage.googleapis.com/a1aa/image/f6549e31-6474-4843-57c1-db26374c9c43.jpg" width="400" />
            <div className="absolute top-3 left-3 text-white font-semibold text-4xl flex items-center gap-2 drop-shadow-lg">
                <i className="fas fa-cloud-sun">
                </i>
                <span>
                    12
                </span>
                <sup className="text-xl">
                    °C
                </sup>
            </div>
            <div className="absolute top-3 right-3 text-white text-xs flex flex-col items-end drop-shadow-lg">
                <span>
                    Monday, 07:43 AM
                </span>
                <div className="flex items-center gap-1 mt-1">
                    <i className="fas fa-cloud-sun text-sm">
                    </i>
                    <span>
                        Partly Cloudy
                    </span>
                </div>
            </div>
        </div>
    )
}
