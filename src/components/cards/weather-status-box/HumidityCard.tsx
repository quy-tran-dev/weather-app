import { Droplets } from 'lucide-react'
import Card from '../Card'
import CardContent from '../CardContent'

export default function HumidityCard({ value , color  }: { value: number; color: string }) {
  return (
    <Card>
      <CardContent className="p-4 text-center text-black">
        <div className="flex items-center justify-between mx-auto mb-2 ">
          <p className="font-semibold text-xl">Humidity</p>
          <div className="bg-blue-300 p-2 rounded-xl"><Droplets className="text-white" /></div>
        </div>
        <p className="font-medium ">
          <span className="text-2xl font-semibold">{value}%</span> bad
        </p>
        <div className="mt-2 flex justify-center w-full">
          <div className="w-[80%] bg-gray-200 rounded-full h-2.5 ">
            <div className={`${color} h-2.5 rounded-full w-[${value}%]`}></div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
