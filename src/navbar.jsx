
import { useContext, useState } from "react";
import { TfiMenu } from "react-icons/tfi";
import logo from "./assets/icon3.png";
import { NavLink } from "react-router-dom";
import { ProductContext } from "./App";

export default function Navbar() {
  const [menu, setMenu] = useState(false);
  const value = [{
    to: "/createC",
    name: "Home"
  }, {
    to: "/",
    name: "Products"
  },
  {
    to: "#",
    name: "About"
  }]
  const { demo, setDemo } =
    useContext(ProductContext);


  return (
    <header className="fixed top-0 left-0 w-full bg-stone-900 text-white text z-50 shadow-2xl">
      <div className="flex justify-between sm:justify-end items-center px-10 h-16">


        <NavLink to="/">
          <img src={logo} alt="Logo" className=" sm:hidden w-[60px] sm:h-[50px]" />
        </NavLink>
        <div className="p-2 hidden sm:block">
          <input
            id="search"
            type="text"
            value={demo.value}
            onChange={(event) =>
              setDemo({ ...demo, value: event.target.value })
            }
            className="block rounded-md bg-white/5 px-3 mt-2 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
            placeholder="Search Product..."
          />
        </div>


        <nav className="hidden sm:flex gap-6">
          {value.map((value, i) => {
            return(
            <ul key={i} >
              <NavLink to={value.to}><li className="text-white">{value.name}</li></NavLink>
            </ul>
          )})}
        </nav>


        <button onClick={() => setMenu(!menu)} className="sm:hidden">
          <TfiMenu size={20} />
        </button>
      </div>
{/* 
      {menu && 
        <nav>{
          value.map((value, i) => {
           return(
            <ul key={i}>

              <NavLink to={value.to}><li className="text-white">{value.name}</li></NavLink>
            </ul>
          )})}}

          </nav> */}
 
    </header>
  );
}
