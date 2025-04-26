"use client"
import React, { useState, useRef, useEffect } from 'react';
import { IconMenu3, IconX } from '@tabler/icons-react';
import { RiStarSLine } from "react-icons/ri";
import Sidebar from './Sidebar';
import gsap from 'gsap';

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const starRef = useRef(null);
  useEffect(()=> {
    if(starRef.current){
      gsap.to(starRef.current, {
        scale: 1.6,
        duration: 1.6,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut"
      })
    }
  }, [])
  return (
    <>
      <nav className='
                   bg-black text-white
                      h-[80px] py-8 px-[6vw] 2xl:px-[16vw] font-normal text-xl flex justify-between items-center  '>
        <div className='flex gap-x-[2px] items-center'>
          <div className='font-medium  text-2xl tracking-widest'>raiasim93 </div>
          {/* <div className='hidden lg:flex gap-x-2 lg:gap-x-2  2xl:gap-x-4 tracking-wider'>
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
            
          </div> */}
          <div ref={starRef}> 
            <RiStarSLine className='text-2xl text-lime-500' />
          </div>
        </div>
        
        <div className='text-white p-2 rounded-full hover:bg-zinc-700  cursor-pointer duration-200 transition-all'
              onClick={()=> setSidebarOpen(!sidebarOpen)} >
               {sidebarOpen ? 
               <IconX className='w-8 h-8 hover:scale-95'/> 
               : <IconMenu3 className='w-8 h-8 hover:scale-95'/>}
        </div>
      </nav>
      {sidebarOpen && <Sidebar setSidebarOpen={setSidebarOpen} />}
    </>

  )
}

export default Navbar