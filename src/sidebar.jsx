import logo from "./assets/icon3.png";
import { IoIosHome, } from "react-icons/io";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { FcAbout } from "react-icons/fc";
import { Link } from "react-router-dom";
import { useState } from "react";
import { ArrowLeftRight } from 'lucide-react';


export default function Sidebar() {
    const [expanded, setExpanded] = useState(true)
    return (
        <div className="fixed hidden sm:flex z-50 h-screen">
            <aside>

                <nav className="h-full flex flex-col bg-white border-r shadow-lg">
                    
                        <div className="p-4 pb-2 border-b border-black/10 flex items-center">
                            <img src={logo} alt="Logo" className={expanded?"w-10 h-10":"w-0 h-w"} />
                            <span className={expanded?"w-10 h-10 text-bold font-bold text-black p-2 ":"w-0 h-w"}>Dcot</span>
                           <button onClick={() => setExpanded(!expanded)} className="p-2"><ArrowLeftRight /></button> 
                        </div>
                       
                       



                    <ul className="flex-1 p-3 space-y-1">

                        <Link to="/createC" ><li className="flex items-center gap-3 rounded-md px-3 py-2  hover:bg-gray-100  text-black cursor-pointer no-underline">
                            <IoIosHome className="text-xl" />
                            <span className={expanded?"text-sm font-medium":"hidden overflow-hidden"}>Home</span>
                        </li></Link>

                        <Link to="./"><li className="flex items-center gap-3 rounded-md px-3 py-2 hover:bg-gray-100 text-black cursor-pointer">
                            <MdOutlineProductionQuantityLimits className="text-xl" />
                            <span className={expanded?"text-sm font-medium":"hidden overflow-hidden"}>Product</span>
                        </li></Link>

                        <li className="flex items-center gap-3 rounded-md px-3 py-2  hover:bg-gray-100 text-black cursor-pointer">
                            <FcAbout className="text-xl" />
                            <span className={expanded?"text-sm font-medium":"hidden overflow-hidden"}>About</span>
                        </li>

                    </ul>


                    <div className={expanded?"flex border-t h-12 border-black/10 p-1":"hidden overflow-hidden"}>
                        <img src={logo} className="w-10 h-10 rounded-md p-1"></img>
                        <div className= "flex justify-center items-center overflow-y-hidden text-black">
                            <div className="leading-4">
                                <h4 className="text-sm font-semibold">Rahul Nikam</h4>
                                <span className="text-xs text-gray-600">rahul@gmail.com</span>
                            </div>
                        </div>

                    </div>
                </nav>
            </aside>
        </div>
    );
}
