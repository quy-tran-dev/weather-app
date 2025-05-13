import SideBarMain from "../components/navs/SideBarMain";

export default function MainLayout() { //destop
    return (
        <div className="flex flex-row h-screen w-screen">
            <div className="bg-main-blue min-w-[20%] min-h-[100%]"></div>
            <div className="bg-main-pupple flex-1 min-h-[100%]"></div>

            <div className="absolute z-10 flex justify-center items-center top-0 h-screen w-screen rounded-xl">

                <div className="h-[90%] w-[90%] bg-gradient-main rounded-[48px] flex justify-center items-center">
                    <div className=" w-[calc(100%-16px)] h-[calc(100%-16px)] bg-white rounded-[48px] flex flex-row">
                    <div className="bg-main-blue w-[calc(15vw-8px)] min-h-[100%] rounded-l-[44px] flex flex-row items-center">
                        <SideBarMain />
                    </div>
                    <div className="bg-white flex-1 min-h-[100%] rounded-r-[44px]">

                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

//mobile

//tablet
