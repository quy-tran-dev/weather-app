import BoxHighlightCard from '../cards/BoxHighlightCard'

export default function TodayHighlightSide() {
    return (
        <div>
            <section>
                <h3 className="font-semibold text-sm text-gray-900 mb-3">
                    Today's Highlights
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
                    <BoxHighlightCard />
                    <BoxHighlightCard />
                    <BoxHighlightCard />
                    <div className="bg-[#f9f9f9] rounded-xl p-3 text-center text-xs text-gray-600 font-sans">
                        <p className="mb-1">
                            Sunrise &amp; Sunset
                        </p>
                        <div className="flex justify-center items-center gap-3 text-gray-900 font-semibold text-sm">
                            <div className="flex items-center gap-1">
                                <i className="fas fa-arrow-up text-purple-500">
                                </i>
                                <span>
                                    6:18 am
                                </span>
                            </div>
                            <div className="flex items-center gap-1">
                                <i className="fas fa-arrow-down text-purple-500">
                                </i>
                                <span>
                                    7:27 pm
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
