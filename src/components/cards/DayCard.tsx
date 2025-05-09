export default function DayCard({ time, icon, altIcon, day, value }: { time: string, icon: string, altIcon: string, day?: string | null, value: string }) {
    return (
        <div className="flex flex-col gap-1 my-3 items-center shadow-lg rounded-xl px-10 py-8 min-w-[130px] ">
            <span className="text-xl font-semibold mb-1">
                {time}
            </span>
            {
                day && (
                    <span className="text-lg text-gray-400 mb-1">
                        {day}
                    </span>
                )
            }
            <span className="text-3xl font-semibold leading-none py-1">
                {value}
            </span>
            <img alt={altIcon} className="mt-1" height="24" src={icon} width="24" />
        </div>
    )
}
