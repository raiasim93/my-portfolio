"use client"
import React, { useState } from 'react';
import { RxHamburgerMenu } from "react-icons/rx";
import Sidebar from './Sidebar';
const Navbar = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
  <>
      <nav className='
                     bg-black
                      h-[80px] py-8 px-[6vw] 2xl:px-[16vw] font-normal text-xl flex justify-between items-center  '>
        <div className='font-medium italic text-2xl tracking-widest'>raiasim93.</div>
        <div className='hidden lg:flex gap-x-2 lg:gap-x-2  2xl:gap-x-4 tracking-wider'>
          {["About", "Experience", "Resume", "Contact"].map((item, index)=> (
            <a 
              key={index}
              href=''
              className={` hover:scale-110 hover:white transition-all duration-200 px-4 py-2 rounded-2xl
                        ${item === "Contact" && "bg-lime-500 text-white"}`}
            > 
              {item}
            </a>
          ))}
           
        </div>
        <RxHamburgerMenu onClick={()=> setSidebarOpen(true)} className={` text-4xl lg:hidden p-1 hover:bg-zinc-800 transition-300 ease-in-out rounded-full cursor-pointer ${sidebarOpen ? "hidden": ""}`} />
       
    </nav>
     {sidebarOpen && <Sidebar setSidebarOpen={setSidebarOpen} /> }
  </>

  )
}

export default Navbar