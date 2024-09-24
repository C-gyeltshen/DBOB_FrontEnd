import { IoMenu } from "react-icons/io5";
import { GiNetworkBars } from "react-icons/gi";
import { IoBatteryHalf } from "react-icons/io5";
import { FaRegBell } from "react-icons/fa";
import { RiShutDownLine } from "react-icons/ri";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


export default function RegisterPage() {
    return (
        <main className="w-screen h-screen bg-blue-300 flex justify-center items-center">
            {/* phone layout */}
            <div className="w-96 h-[44rem] bg-white rounded-3xl shadow-lg overflow-hidden">
                {/* initial layout */}
                <div className="w-full h-10 bg-gray-200 flex items-center justify-between px-4">
                    <div className="flex items-center space-x-1 w-3/12 mx-auto">
                        <p className="pl-7">12:00</p>
                    </div>
                    <div className="text-black text-sm w-6/12 h-full bg-black rounded-b-3xl flex items-center justify-center">
                        <p>Camera</p>
                    </div>
                    <div className="flex items-center space-x-1 w-3/12 pl-7">
                        <div><GiNetworkBars style={{ fontSize: "1em" }} /></div>
                        <div><p>5G</p></div>
                        <div><IoBatteryHalf /></div>
                    </div>
                </div>
                <div className="w-full h-3"></div>
                {/* menu bar */}
                <div className="w-full h-12 flex justify-between items-center px-4">
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
                    <div className="flex items-center space-x-4">
                        <button><FaRegBell style={{ fontSize: "2em" }} /></button>
                        <DropdownMenu>
                            <DropdownMenuTrigger>
                                <button><RiShutDownLine style={{ fontSize: "2em" }} /></button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                                <DropdownMenuLabel>My Menu</DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem>Log Out</DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </div>
                {/* space div */}
                <div className="h-14"></div>
                {/* form layout */}
                <div className="flex flex-col w-11/12 h-3/5 items-center m-auto rounded-md justify-center space-y-4 px-4 bg-blue-300">
                    <div className="w-full h-2/6 flex">
                        <div className="h-full w-36 p-2">
                            <Avatar className="w-20 h-20">
                                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" className="w-20 h-20"/>
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                            <h1>user name</h1>
                        </div>
                        <div className="h-full w-64  pt-1">
                            <Accordion type="single" collapsible>
                                <AccordionItem value="item-1">
                                    <AccordionTrigger>
                                        <p>
                                            Your Account Number
                                        </p>
                                    </AccordionTrigger>
                                    <AccordionContent>
                                        <p>
                                            204549222
                                        </p>
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-2">
                                    <AccordionTrigger>
                                        <p> Balance </p>
                                    </AccordionTrigger>
                                    <AccordionContent>
                                        <p>NU. 500,000.00</p>
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </div>
                    </div>
                    <div className="w-full h-4/6 bg-blue-200 rounded-md">
                        
                    </div>
                </div>
            </div>
        </main>
    );
}
