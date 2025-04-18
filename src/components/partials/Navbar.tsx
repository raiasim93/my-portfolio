"use client"
import React, { useState } from 'react';
import { RxHamburgerMenu } from "react-icons/rx";
import Sidebar from './Sidebar';
const Navbar = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
  <>
      <nav className='
                     bg-zinc-950 text-white
                      h-[80px] py-8 px-[6vw] 2xl:px-[16vw] font-normal text-xl flex justify-between items-center  '>
        <div className='font-extrabold text-xl lg:text-4xl '>raiasim93.</div>
        <div className='hidden lg:flex gap-x-2 lg:gap-x-2  2xl:gap-x-4 tracking-wider'>
          {["About", "Experience", "Resume"].map((item, index)=> (
            <a 
              key={index}
              href=''
              className={`hover:scale-115 hover:white transition-all duration-300 px-4 py-2 rounded-2xl
                          hover:underline hover:underline-offset-8 decoration-lime-400 hover:font-bold`}
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