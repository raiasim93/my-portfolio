"use client"
import React, { useState } from 'react';
import { FaLinkedin, FaFilePdf, FaGithub } from "react-icons/fa";
import dayjs from 'dayjs';


const FooterSection = () => {
  const today = dayjs().format('YYYY-MM-DD');
  const [hovered, setHovered] = useState(false);
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
 
  

  return (
    <section
      className='min-h-[60vh] px-[6vw] 2xl:px-[16vw] flex flex-col gap-y-16 lg:gap-y-32 justify-center items-center  bg-black cursor-pointer'>
      <div className={`tracking-wider font-extrabold w-full flex flex-col gap-y-4 justify-center items-center`}
      >
        <div onClick={handleSectionClick}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          className='flex justify-center text-2xl lg:text-4xl'>
          <div className={`absolute inset  duration-500 transition-all ease-in-out  flex justify-center items-center ${hovered ? '-translate-x-full opacity-0' : 'translate-x-0 opacity-100'}`}>
            Click to mail me
          </div>
          <div className={`absolute inset  duration-500 transition-all ease-in-out flex justify-center items-center  ${hovered ? 'translate-x-0 opacity-100' : 'translate-x-0 opacity-0'}`}>
            Redirecting now ...
          </div>
        </div>


      </div>
      <div className='w-full lg:flex lg:flex-row flex flex-col-reverse gap-y-4 justify-between items-center text-lg lg:text-xl font-semibold '>

        <div>
          Last updated: {today}
        </div>
        <div className='flex gap-x-4'>
          <a href='https://www.linkedin.com/in/asim-rai-30a170285/'
              target='_blank'
              rel='noopener noreferrer'
              className='p-2  rounded-full bg-zinc-800 hover:scale-125 hover:bg-zinc-700 hover:transform hover:duration-100'> 
            <FaLinkedin className='text-lg lg:text-2xl' />
          </a>
          <a href='https://github.com/raiasim93/' 
            target='_blank'
            rel='noopener noreferrer'
             className='p-2  rounded-full bg-zinc-800 hover:scale-125 hover:bg-zinc-700 hover:transform hover:duration-100'> 
            <FaGithub className='text-lg lg:text-2xl' />
          </a>
          <a href='/webdev_asim.pdf'
             target='_blank'
             rel='noopener noreferrer'
             className='p-2  rounded-full bg-zinc-800 hover:scale-125 hover:bg-zinc-700 hover:transform hover:duration-100'> 
            <FaFilePdf className='text-lg lg:text-2xl' />
          </a>
        </div>



      </div>
    </section>
  )
}

export default FooterSection