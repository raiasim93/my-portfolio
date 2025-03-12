"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import { RxHamburgerMenu } from "react-icons/rx";
import Sidebar from './Sidebar';
const Navbar = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
  <>
      <nav className='h-[80px] py-8 px-[8vw] 2xl:px-[12vw] font-normal text-xl flex justify-between items-center'>
        <div className='font-semibold text-2xl italic cursor-pointer'>raiasim93</div>
        <div className='hidden text-lg md:flex gap-x-4 2xl:gap-x-8'>
            <a href="" className='uppercase px-4 py-2 rounded-4xl hover:bg-zinc-900 hover:ring-1 hover:ring-zinc-500 duration-500'>About</a>
            <a href="" className='uppercase px-4 py-2 rounded-4xl hover:bg-zinc-900 hover:ring-1 hover:ring-zinc-500 duration-300'>Work</a>
            <a href="" className='uppercase px-4 py-2 rounded-4xl hover:bg-zinc-900 hover:ring-1 hover:ring-zinc-500 duration-300'>Services</a>
            <a href="" className='uppercase px-4 py-2 rounded-4xl hover:bg-zinc-900 hover:ring-1 hover:ring-zinc-500 duration-300'>Contact</a>
        </div>
        <RxHamburgerMenu onClick={()=> setSidebarOpen(true)} className={`text-4xl md:hidden p-1 hover:bg-zinc-800 transition-300 ease-in-out rounded-full cursor-pointer ${sidebarOpen ? "hidden": ""}`} />
       
    </nav>
     {sidebarOpen && <Sidebar setSidebarOpen={setSidebarOpen} /> }
  </>

  )
}

export default Navbar