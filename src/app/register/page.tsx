"use client";

import { IoMenu } from "react-icons/io5";
import { GiNetworkBars } from "react-icons/gi";
import { IoBatteryHalf } from "react-icons/io5";
import { FaRegBell } from "react-icons/fa";
import { RiShutDownLine } from "react-icons/ri";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useRouter } from 'next/navigation';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


export default function RegisterPage() {

    const router = useRouter();

    const [formData, setFormData] = useState({
        email: '',
        CID_number: '',
        phoneNumber: '',
        hashPassword_mPin: '',
        hashPassword_tPin: '',
        user_name:'',
    });

    const handleSubmit = async (event) => {

        event.preventDefault();
        
        try {
            const response = await fetch('http://localhost:8080/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            console.log("request send")

            if (response.ok) {

                console.log("its working")
                const data = await response.json();
                const { token } = data
                console.log("the token is",token)

                localStorage.removeItem("accessToken");
                console.log("accessToken removed")

                localStorage.setItem('accessToken',token);
                console.log("saved")

                router.push('/user');

            } else {
                console.error('User Registeration failed');
            }
            

        } catch (error) {
            console.error('Error:', error);
        }
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

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
                    <button className="pl-4"><IoMenu style={{ fontSize: "2em" }} /></button>
                    <div className="flex items-center space-x-4">
                        <button><FaRegBell style={{ fontSize: "2em" }} /></button>
                        <button><RiShutDownLine style={{ fontSize: "2em" }} /></button>

                        {/* <DropdownMenu>
                            <DropdownMenuTrigger>
                                <button><RiShutDownLine style={{ fontSize: "2em" }} /></button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                                <DropdownMenuLabel>Switch</DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem>Log Out</DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu> */}
                    </div>
                </div>
                {/* space div */}
                <div className="h-14"></div>
                {/* form layout */}
                <div className="flex flex-col w-full h-3/5 items-center justify-center space-y-4 px-4">
                    <h1 className="font-mono text-2xl text-center drop-shadow-md ">Provide all the details asked below</h1>
                    <Input 
                        type="text" 
                        placeholder="User Name" 
                        name="user_name" 
                        value={formData.user_name} 
                        onChange={handleInputChange} 
                        className="w-full" 
                    />
                    <Input 
                        type="email" 
                        placeholder="Email
                        " 
                        name="email" 
                        value={formData.email} 
                        onChange={handleInputChange} 
                        className="w-full" 
                    />
                    <Input 
                        type="text" 
                        placeholder="CID Number" 
                        name="CID_number" 
                        value={formData.CID_number} 
                        onChange={handleInputChange} 
                        className="w-full" 
                    />
                    <Input 
                        type="text" 
                        placeholder="Phone Number" 
                        name="phoneNumber" 
                        value={formData.phoneNumber} 
                        onChange={handleInputChange} 
                        className="w-full" 
                    />
                    <Input 
                        type="password" 
                        placeholder="M-Pin" 
                        name="hashPassword_mPin" 
                        value={formData.hashPassword_mPin} 
                        onChange={handleInputChange} 
                        className="w-full" 
                    />
                    <Input 
                        type="password" 
                        placeholder="T-Pin" 
                        name="hashPassword_tPin" 
                        value={formData.hashPassword_tPin} 
                        onChange={handleInputChange} 
                        className="w-full" 
                    />
                    <Button className="w-full" onClick={handleSubmit}>Register</Button>
                </div>
            </div>
        </main>
    );
}
