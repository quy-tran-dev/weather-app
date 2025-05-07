import ImageLocationCard from './ImageLocationCard'

export default function CurrentLocationCard() {
    return (
        <div>
            <section className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                    <p className="text-xs text-gray-600 mb-1">
                        Current Location
                    </p>
                    <h2 className="font-semibold text-sm text-gray-900 mb-2">
                        Los Angeles, CA, USA
                    </h2>
                    <ImageLocationCard />
                </div>

            </section>
        </div>
    )
}
