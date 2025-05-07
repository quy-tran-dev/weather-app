import './App.css'
import CurrentLocationCard from './components/cards/CurrentLocationCard'
import HighlightWeatherDayStep from './components/cards/HighlightWeatherDayStep'
import TodayRainLineChart from './components/charts/rain/TodayRainLineChart'
import TodayRainProcessChart from './components/charts/rain/TodayRainProcessChart'
import TodayHighlightSide from './components/containers/TodayHighlightSide'
import SideBarMain from './components/navs/SideBarMain'
import InputSearch from './components/searching/InputSearch'
function App() {
  return (
      <div className="bg-[#1a1a4a] min-h-screen flex items-center justify-center p-4">
        <div className="max-w-[1000px] w-full bg-white rounded-[30px] shadow-lg flex flex-col md:flex-row p-4 md:p-8 gap-6 md:gap-8">
          {/* <!-- Sidebar --> */}
          <SideBarMain />
          {/* <!-- Main content --> */}
          <main className="flex-1 flex flex-col gap-6">
            {/* <!-- Search and top right icons --> */}
            <InputSearch />

            {/* <!-- Current Location and Weather Card --> */}
            <CurrentLocationCard />

            {/* <!-- Today's Highlights --> */}
            <TodayHighlightSide />
            {/* <!-- Chart and Chance of Rain --> */}
            <section className="flex flex-col md:flex-row gap-6">
              {/* <!-- Chart --> */}
              <TodayRainLineChart />
              {/* <!-- Chance of Rain --> */}
              <TodayRainProcessChart />
            </section>
            {/* <!-- 3 Days Forecast --> */}
            <HighlightWeatherDayStep />
          </main>
        </div>
      </div>
  )
}

export default App
{/* <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" rel="stylesheet"/> */ }





