"use client"
import React, {useEffect, useRef} from 'react';
import Image from 'next/image';
import { BiRightArrowAlt } from 'react-icons/bi';
import { FaLinkedin, FaGithub, FaFacebook} from 'react-icons/fa';
import gsap from 'gsap';

const HeroSection = () => {
    const arrowRef = useRef(null);
    useEffect(()=>{
        if(arrowRef.current){
          gsap.to(arrowRef.current,{
            y: 2,
            scale: 1.2,
            duration: 1.6,
            repeat: -1,
            yoyo: true,
            ease: "power1.inOut"
          });
        }
    }, []);
    return (
        <section className='bg-black bg- min-h-[calc(100vh-80px)]  w-full py-8 px-[6vw] 2xl:px-[16vw] flex flex-col gap-x-8 lg:flex-row justify-center items-center  text-4xl  '>
            {/* Text section */}
            <div className='w-full mb-12 lg:mb-0 lg:w-1/2 flex flex-col lg:flex-col gap-y-6  lg:gap-y-8 text-center lg:text-left '>
                <div className=' w-full font-bold flex items-center justify-center lg:justify-start text-2xl  lg:text-5xl tracking leading-tight mb-4 lg:mb-0  sm:mb-0 '>
                    Asim is engineering greatness from scratch...
                    {/* <div ref={arrowRef}>
                    <FaArrowDown  className='ms-3 text-lime-500'/>
                    </div> */}
                   
                </div>
                {/* <div className='w-full  lg:w-3/4 text-4xl lg:text-7xl ' >
                    I am a   <span className='text-lime-400'> Frontend Developer </span> 
                </div> */}
                <div className='text-lg lg:text-xl w-full text-gray-400 lg:flex hidden tracking-wider pe-10'>
                    I turn ideas into interactive realities and craft product experience that solve real-world problems. Let&apos;s bring vision to your life!!
                </div>

                <div className='w-full flex flex-wrap gap-y-6 justify-center lg:justify-between items-center'>
                    {/* Explore More Button */}
                    <div className='group flex font-semibold items-center  text-lime-500 pe-6 py-2 
                        transition-all duration-200  hover:cursor-pointer
                        text-lg lg:text-xl whitespace-nowrap'>
                        Explore More
                        <BiRightArrowAlt className='text-2xl lg:text-4xl transition-all duration-300 group-hover:translate-x-4 ' />
                    </div>

                    {/* Social Icons */}
                    <div className='flex gap-x-4 justify-center w-full lg:w-auto'>
                        <FaLinkedin className='transition-all duration-200 hover:scale-110 hover:border-2 hover:border-white hover:cursor-pointer' />
                        <FaGithub className='transition-all duration-200 hover:scale-110 hover:border-2 hover:border-white hover:cursor-pointer' />
                        <FaFacebook className='transition-all duration-200 hover:scale-110 hover:border-2 hover:border-white hover:cursor-pointer' />
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
                    className='aspect-square object-cover rounded-2xl border-2 lg:border-4 border-white w-2/3 lg:w-[70%]'
                    quality={100}
                />
            </div>

        </section>
    )
}

export default HeroSection