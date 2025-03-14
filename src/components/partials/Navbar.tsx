"use client"
import React, { useState } from 'react';
import { RxHamburgerMenu } from "react-icons/rx";
import Sidebar from './Sidebar';
const Navbar = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
  <>
      <nav className='h-[80px] py-8 px-[8vw] 2xl:px-[12vw] font-normal text-xl flex justify-between items-center'>
        <div className='font-semibold text-2xl italic'>raiasim93</div>
        <div className='hidden md:flex gap-x-4 2xl:gap-x-8'>
          {["about", "work", "services", "contact"].map((item, index)=> (
            <a 
              key={index}
              href=''
              className='uppercase hover:scale-110 hover:text-zinc-400 transition-all duration-200'
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