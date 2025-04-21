"use client"
import React, { useState } from 'react';
import { FaLinkedin, FaFilePdf, FaGithub } from "react-icons/fa";
import dayjs from 'dayjs';

const FooterSection = () => {
  const today = dayjs().format('YYYY-MM-DD')

  const handleSectionClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const target = event.target;
    if (
      target instanceof Element &&
      (target.closest('svg') || target.closest('.no-mailto'))
    ) {
      return;
    }
    window.location.href = 'mailto:asimrai89@gmail.com';
  }

  const [hovered, setHovered] = useState(false);
  return (
    <section
      className='py-8 px-[6vw] 2xl:px-[16vw] flex flex-col gap-y-8 lg:gap-y-32 justify-center items-center min-h-[50vh] lg:min-h-[60vh] bg-black cursor-pointer'>
      <div className={`relative h-20 overflow-hidden text-4xl lg:text-6xl tracking-wider font-extrabold w-full flex justify-center items-center`}
        onClick={handleSectionClick}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}>
        <span className={`absolute inset w-full duration-500 transition-all ease-in-out uppercase flex justify-center items-center ${hovered ? '-translate-x-full opacity-0' : 'translate-x-0 opacity-100'}`}>
          Let&apos;s Chat
        </span>
        <span className={`absolute inset w-full duration-500 transition-all ease-in-out flex justify-center items-center  ${hovered ? 'translate-x-0 opacity-100' : '-translate-x-0 opacity-0'}`}>
          Click to Chat
        </span>

      </div>
      <div className='w-full lg:flex lg:flex-row flex flex-col-reverse gap-y-4 justify-between items-center text-lg lg:text-xl font-semibold '>
        
          <div>
            Last updated: {today}
          </div>
          <div className='flex gap-x-4'>
            <div className='p-4 rounded-full bg-zinc-800 hover:scale-125 hover:bg-zinc-700 hover:transform hover:duration-100'>  <FaFilePdf className='text-lg lg:text-2xl' /> </div>
            <div className='p-4 rounded-full bg-zinc-800 hover:scale-125 hover:bg-zinc-700 hover:transform hover:duration-100'>  <FaLinkedin className='text-lg lg:text-2xl' /> </div>
            <div className='p-4 rounded-full bg-zinc-800 hover:scale-125 hover:bg-zinc-700 hover:transform hover:duration-100'>  <FaGithub className='text-lg lg:text-2xl' /> </div>
           
          </div>
        


      </div>
    </section>
  )
}

export default FooterSection