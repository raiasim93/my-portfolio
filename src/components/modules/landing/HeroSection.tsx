"use client"
import React, {useEffect, useRef} from 'react';
import Image from 'next/image';
import {BiRightArrowAlt, BiDownArrowAlt } from 'react-icons/bi';
import { FaLinkedin, FaGithub, FaFilePdf} from 'react-icons/fa';
import gsap from 'gsap';

const HeroSection = () => {
   const arrowRightRef = useRef(null);
   const arrowDownRef = useRef(null);
   useEffect(()=> {
      if(arrowRightRef.current){
        gsap.to(arrowRightRef.current,{
            x: 20, 
            duration: 1,
            repeat: -1,
            ease: "sine.inOut",
            yoyo: true,
        })
      }
   });
   useEffect(()=> {
    if(arrowDownRef.current){
        gsap.to(arrowDownRef.current, {
            y:5,
            duration: 1,
            repeat: -1,
            ease: "sine.inOut",
            yoyo: true
        })
    }
   },[]);
    return (
        <section className='bg-black bg- min-h-[calc(100vh-80px)]  w-full py-8 px-[6vw] 2xl:px-[16vw] flex flex-col gap-x-8 lg:flex-row justify-center items-center  text-4xl  '>
            {/* Text section */}
            <div className='w-full mb-12 lg:mb-0 lg:w-1/2 flex flex-col lg:flex-col gap-y-6  lg:gap-y-8 text-center lg:text-left '>
                <div className=' w-full font-bold flex items-center justify-center lg:justify-start text-3xl  lg:text-5xl tracking leading-tight mb-4 lg:mb-0  sm:mb-0 '>
                    Asim is engineering greatness from scratch...
                </div>
                <div className='text-lg lg:text-xl font-light w-full text-gray-400 lg:flex hidden pe-10'>
                    I turn ideas into interactive realities and craft product experience that solve real-world problems. Let&apos;s bring vision to your life!!
                </div>

                <div className='w-full flex flex-wrap gap-y-6 justify-center lg:justify-between items-center'>
                    {/* Explore More Button */}
                    <div className='group flex font-semibold items-center  text-lime-500 px-6 lg:ps-0 lg:pe-6  py-2 
                        transition-all duration-200  hover:cursor-pointer
                        text-xl lg:text-2xl whitespace-nowrap'>
                        Explore More
                        <div className='hidden lg:flex' ref={arrowRightRef}>
                        <BiRightArrowAlt  className='text-4xl lg:text-4xl transition-all duration-300 group-hover:translate-x-4 ' />
                        </div>
                        <div className='flex lg:hidden' ref={arrowDownRef}>
                        <BiDownArrowAlt  className='text-4xl lg:text-4xl transition-all duration-300 group-hover:translate-x-4 ' />
                        </div>
                    </div>

                    {/* Social Icons */}
                    <div className='flex gap-x-2 justify-center items-center w-full lg:w-auto text-lg lg:text-3xl'>
                        <a href="https://www.linkedin.com/in/asim-rai-30a170285/"
                           className='p-2 rounded-full hover:bg-zinc-700 hover:transform hover:duration-150 hover:scale-115' target='_blank' rel='noopener noreferrer'> 
                        <FaLinkedin className='text-2xl'/> </a>
                        <a href="https://github.com/raiasim93/"
                           className='p-2 rounded-full hover:bg-zinc-700 hover:transform hover:duration-150 hover:scale-115' target='_blank' rel='noopener noreferrer'> 
                        <FaGithub className='text-2xl'/> </a>
                        <a href="/AsimResume.pdf" 
                           className=' p-2 rounded-full hover:bg-zinc-700 hover:transform hover:duration-150 hover:scale-115' target='_blank' rel='noopener noreferrer'> 
                        <FaFilePdf className='text-2xl'/> </a>
                    </div>
                </div>


            </div>
            {/* Image section */}
            <div className='w-full lg:w-1/2 flex justify-center items-center lg:justify-end '>
                <Image
                    src='/ghibli.PNG'
                    alt='Image for hero section'
                    width={120}
                    height={120}
                    className='aspect-square object-cover rounded-2xl border-2 lg:border-4 border-white w-3/5 lg:w-[70%]'
                    quality={100}
                />
            </div>

        </section>
    )
}

export default HeroSection