import { useState } from "react";
import { TfiMenu } from "react-icons/tfi";
export default function Navbar() {
    const [menu,setMenu]=useState(true);

    return (<>
        <header>
            <div className="w-full fixed top-0 right-0 left-0 flex justify-between items-center px-10 h-16 bg-stone-900 text-white">


                <div>
                    <p className="text-lg font-semibold">Product</p>
                </div>

                <nav>
                     <ul className="hidden sm:flex gap-6">
                        <li>Home</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                    
                    
                </nav>
                <ul className={menu?"hidden":"flex-col gap-6 bg-amber-50 text-black w-full justify-center"}>
                        <li>Home</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                <button onClick={()=>setMenu(!menu)}className="sm:hidden">
                    <TfiMenu />
                </button>

            </div>
        </header>

    </>)
}