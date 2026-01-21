
import { useState } from "react";
import { TfiMenu } from "react-icons/tfi";
import logo from "./assets/icon3.png";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [menu, setMenu] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-stone-900 text-white text z-50 shadow-2xl">
      <div className="flex justify-between sm:justify-end items-center px-10 h-16">
        
       
        <Link to="/">
          <img src={logo} alt="Logo" className=" sm:hidden w-[60px] sm:h-[50px]" />
        </Link>

        
        <nav>
          <ul className="hidden sm:flex gap-6">
            <Link to="/createC"><li className="text-white">Home</li></Link>
            <Link to="./"><li className="text-white">Product</li></Link>
            <Link to="#"><li className="text-white">About</li></Link>
          </ul>
        </nav>

       
        <button onClick={() => setMenu(!menu)} className="sm:hidden">
          <TfiMenu size={20} />
        </button>
      </div>

      {menu && (
        <ul className="sm:hidden flex flex-col gap-6 bg-amber-50 text-black py-6 items-center">
            
          <li><Link to="/createC" onClick={()=>setMenu(false)}>Home</Link></li>
            <li><Link to="./" onClick={()=>setMenu(false)}>Product</Link></li>
            <li><Link to="#" onClick={()=>setMenu(false)}>About</Link></li>
        </ul>
      )}
    </header>
  );
}
