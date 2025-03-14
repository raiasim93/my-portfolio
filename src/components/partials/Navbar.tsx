"use client"
import React, { useState } from 'react';
import { RxHamburgerMenu } from "react-icons/rx";
import Sidebar from './Sidebar';
const Navbar = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
  <>
      <nav className='h-[80px] py-8 px-[12vw] 2xl:px-[16vw] font-normal text-xl flex justify-between items-center  '>
        <div className='font-semibold text-lime-400 text-2xl italic'>raiasim93</div>
        <div className='hidden md:flex gap-x-2 lg:gap-x-2  2xl:gap-x-4'>
          {["about", "work", "services", "contact"].map((item, index)=> (
            <a 
              key={index}
              href=''
              className={`uppercase hover:scale-110 hover:text-zinc-400 transition-all duration-200 px-4 py-2 rounded-b-4xl
                        ${item === "contact" && "bg-lime-400 text-white"}`}
            > 
              {item}
            </a>
          ))}
           
        </div>
        <RxHamburgerMenu onClick={()=> setSidebarOpen(true)} className={`text-4xl md:hidden p-1 hover:bg-zinc-800 rounded-full cursor-pointer ${sidebarOpen ? "hidden": ""}`} />
       
    </nav>
     {sidebarOpen && <Sidebar setSidebarOpen={setSidebarOpen} /> }
  </>

  )
}

export default Navbar