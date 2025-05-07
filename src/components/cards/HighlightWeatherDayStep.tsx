import BoxTempHighlightCard from "./BoxTempHighlightCard";

export default function HighlightWeatherDayStep() {
    return (
        <div>



            <div className="bg-white p-4 font-sans">
                <div className="max-w-xs mx-auto rounded-lg border border-gray-200 p-4 space-y-3">
                    <h2 className="text-sm font-medium text-gray-900">3 Days Forecast</h2>
                    <div className="space-y-3">
                        <BoxTempHighlightCard />

                    </div>
                </div>
            </div>
        </div>
    )
}
