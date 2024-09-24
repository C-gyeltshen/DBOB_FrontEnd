import { IoMenu } from "react-icons/io5";
import { LuPhoneCall } from "react-icons/lu";
import { GiNetworkBars } from "react-icons/gi";
import { IoBatteryHalf } from "react-icons/io5";
import { FaRegBell } from "react-icons/fa";
import { RiShutDownLine } from "react-icons/ri";

export default function HomePage(){
    return (
        <main className="w-screen h-screen bg-blue-300 flex justify-center items-center">
            <div className="w-96 h-[44rem] bg-white rounded-3xl shadow-lg overflow-hidden">
                {/*initial lay out*/}
                <div className="w-full h-10 bg-gray-200 flex items-center justify-between px-4">
                    <div className="flex items-center space-x-1 w-3/12  mx-auto">
                        <p className="pl-7">12:00</p>
                    </div>
                    <div className="text-black text-sm w-6/12 h-full bg-black rounded-b-3xl"><p>camera</p></div>
                    <div className="flex items-center space-x-1 w-3/12  pl-7">
                        <div><GiNetworkBars style={{ fontSize: "1em" }}></GiNetworkBars></div>
                        <div><p>5G</p></div>
                        <div> <IoBatteryHalf/></div>
                    </div>  
                </div>
                <div className="w-full h-3"></div>
                {/* menu bar */}
                <div className="w-full h-12 flex">
                    <div className="h-full w-1/4 flex">
                        <div className="h-full w-2/3">
                            <button className="pl-4"><IoMenu style={{ fontSize: "2em" }} /></button>   
                        </div>
                        <div className="h-full w-1/3"></div>
                    </div>
                    <div className="h-full w-2/4"></div>
                    <div className="h-full w-1/4 flex">
                        <div className="h-full w-1/2">
                            <button><FaRegBell style={{ fontSize: "2em" }} /></button>
                        </div>
                        <div className="h-full w-1/2">
                            <button><RiShutDownLine style={{ fontSize: "2em" }} /></button>
                        </div>
                    </div>
                </div>
                {/* owner profile */}
                <div className="w-full h-20 flex ml-4 flex-row  ">
                    <div className="w-11/12	h-11/12 rounded-2xl flex">
                        <div className="h-full w-3/12 bg-orange-200 rounded-full"></div>
                        <div className="h-full w-8/12 flex flex-col">
                            <div className="w-full h-1/3"></div>
                            <div className="w-full h-1/3">
                            <h1 className="pl-6 text-2xl">user1</h1>
                            </div>
                            <div className="w-full h-1/3"></div>
                        </div>
                    </div>
                </div>
                {/* card holder */}
                <div className="h-10"></div>
                <div className="w-full h-3/5">
                    <div className=""></div>
                </div>
            </div>
        </main>
    )
}