import React from 'react'
import Card from '../Card'
import CardContent from '../CardContent'
import SemiCircularProgress from "../../progress/SemiCircularProgress";

export default function WindCard() {
  return (
    <Card>
      <CardContent className="p-4 text-center text-black">
        <div className="flex items-center justify-between mx-auto mb-2 ">
          <p className="font-semibold text-xl">wind</p>
          <div className="bg-blue-300 p-2 rounded-xl"></div>
        </div>
        <div className="mt-2 flex justify-center w-full">
          <SemiCircularProgress progress={50} />
        </div>
      </CardContent>
    </Card>
  )
}
