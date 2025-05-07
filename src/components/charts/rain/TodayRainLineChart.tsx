export default function TodayRainLineChart() {
    return (
        <div className="flex-1 bg-[#f9f9f9] rounded-xl p-4">
            <div className="flex gap-6 text-xs font-sans text-gray-600 mb-2">
                <button aria-current="true" className="font-semibold border-b-2 border-purple-500 pb-1 text-gray-900">
                    Today
                </button>
                <button className="hover:text-gray-900 transition-colors duration-300">
                    Week
                </button>
            </div>
            <div className="overflow-x-auto no-scrollbar">
                <svg aria-label="Line chart showing temperature from 6 am to 3 am" className="min-w-[320px]" fill="none" height="100" role="img" width="100%" xmlns="http://www.w3.org/2000/svg">
                    <polyline fill="none" points="20,80 60,70 100,60 140,50 180,40 220,50 260,70 300,80" stroke="#7c3aed" stroke-width="2">
                    </polyline>
                    <circle cx="20" cy="80" fill="#7c3aed" r="4">
                    </circle>
                    <circle cx="60" cy="70" fill="#7c3aed" r="4">
                    </circle>
                    <circle cx="100" cy="60" fill="#7c3aed" r="4">
                    </circle>
                    <circle cx="140" cy="50" fill="#7c3aed" r="4">
                    </circle>
                    <circle cx="180" cy="40" fill="#7c3aed" r="4">
                    </circle>
                    <circle cx="220" cy="50" fill="#7c3aed" r="4">
                    </circle>
                    <circle cx="260" cy="70" fill="#7c3aed" r="4">
                    </circle>
                    <circle cx="300" cy="80" fill="#7c3aed" r="4">
                    </circle>
                    <text fill="#999" font-size="10" x="20" y="95">
                        6 am
                    </text>
                    <text fill="#999" font-size="10" x="60" y="95">
                        9 am
                    </text>
                    <text fill="#999" font-size="10" x="100" y="95">
                        12 pm
                    </text>
                    <text fill="#999" font-size="10" x="140" y="95">
                        03 pm
                    </text>
                    <text fill="#999" font-size="10" x="180" y="95">
                        06 pm
                    </text>
                    <text fill="#999" font-size="10" x="220" y="95">
                        09 pm
                    </text>
                    <text fill="#999" font-size="10" x="260" y="95">
                        12 am
                    </text>
                    <text fill="#999" font-size="10" x="300" y="95">
                        03 am
                    </text>
                </svg>
            </div>
        </div>
    )
}
