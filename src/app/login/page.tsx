import Image from "next/image";
import { IoMenu } from "react-icons/io5";
import { LuPhoneCall } from "react-icons/lu";
import { GiNetworkBars } from "react-icons/gi";
import { IoBatteryHalf } from "react-icons/io5";
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"




export default function Home() {
  return (
    <div className="w-screen h-screen bg-blue-400 flex justify-center items-center">
      <div className="w-96 h-[44rem] bg-white rounded-3xl shadow-lg overflow-hidden">
        {/* Top Bar */}
        <div className="w-full h-10 bg-gray-200 flex items-center justify-between px-4">
          <div className="flex items-center space-x-1 w-3/12  mx-auto">
            <p className="pl-7">12:00</p>
          </div>
          <div className="text-black text-sm w-6/12 h-full  bg-black rounded-b-3xl"><p>camera</p></div>
          <div className="flex items-center space-x-1 w-3/12  pl-7">
            <div><GiNetworkBars style={{ fontSize: "1em" }}></GiNetworkBars></div>
            <div><p>5G</p></div>
            <div> <IoBatteryHalf/></div>
          </div>  
        </div>
        {/* Camera Header */}
        <div className="w-full h-2 flex items-center justify-center text-white"></div>
        {/* Icon Row */}
        <div className="w-full h-20 flex items-center justify-between px-6">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <IoMenu style={{ fontSize: "2em" }} />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>My Menu</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Billing</DropdownMenuItem>
              <DropdownMenuItem>Team</DropdownMenuItem>
              <DropdownMenuItem>Subscription</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <div></div>
          <LuPhoneCall style={{ fontSize: "2em" }} />
        </div>
        <div className="w-full h-24 flex">
          <div className="w-3/12	h-full"></div>
          <div className="w-6/12 h-full flex flex-col">
            <div className="w-full h-1/5"></div>
            <div className="w-full h-3/5 flex">
              <div className="w-2/5 h-full">
                <h1 className="text-6xl pl-8 font-serif text-sky-700">D</h1>
              </div>
              <div className="w-3/5 h-full">
                <h1 className="text-6xl">BOB</h1>
              </div>
            </div>
            <div className="w-full h-1/5"><p className="font-mono">Mobile Banking</p></div>
          </div>
          <div className="w-3/12 h-full"></div>
        </div>
        <div className="w-full h-20"></div>
        <div className="w-full h-16">
          <div className="w-64 h-5/6 m-auto">
            <Input type="text" placeholder="Account Number" className="pt-3"/>
          </div>
          <div className="w-64 h-1/6 m-auto">
            <Input type="text" placeholder="M-Pin"/>
          </div>
        </div>
        <div className="w-full h-16">
          <div className="w-full h-5/6"></div>
          <div className="w-full h-1/6"></div>
          <div className="wi"></div>
        </div>
        <div className="w-32 h-10 m-auto">
          <Button>Submit</Button>
        </div>
        <div className="h-24 w-full m-auto"></div>
        <div className="w-full h-10 flex">
          <div className="w-1/2 h-full">
            <h1 className="pl-16">Not regesrered?</h1>
          </div>
          <div className="w-1/2 h-full">
            {/* <h1 className="text-blue-500">Sign Up</h1> */}
            <button className="text-blue-500 font-bold">Sign Up</button>
          </div>
        </div>
        
      </div>
    </div>
  );
}


