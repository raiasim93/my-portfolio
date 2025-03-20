import React from 'react';
import Image from 'next/image';
import { BiRightArrowAlt } from 'react-icons/bi';
import { FaLinkedin, FaGithub, FaFacebook, FaHandPeace } from 'react-icons/fa';

const HeroSection = () => {
    return (
        <section className='min-h-screen  w-full py-8 px-[12vw] 2xl:px-[16vw] flex flex-col gap-x-8 md:flex-row justify-center items-center bg-neutral-950 text-4xl  '>
            {/* Text section */}
            <div className='w-full mb-12 md:mb-0 md:w-1/2 flex flex-col md:flex-col gap-y-6  md:gap-y-8 text-center md:text-left '>
                <div className='text-xl flex items-center justify-center md:justify-start md:text-2xl mb-4 md:mb-0 tracking-widest sm:mb-0  w-full'>
                    {/* Heyy! I'm Asim. <FaHandPeace className='text-2xl'  */}
                    Welcome to my Portflio <FaHandPeace />
                </div>
                <div className='w-full md:w-3/4 md:text-6xl ' >
                    I am a   <span className='text-lime-500'> Frontend Developer </span> 
                </div>
                <div className='text-2xl text-gray-400 md:flex hidden tracking-wider'>
                    I design impactful brands, develop innovative Applications and craft awesome UI / UX.
                </div>

                <div className='w-full flex flex-wrap gap-y-6 justify-center md:justify-between items-center'>
                    {/* Explore More Button */}
                    <div className='group flex items-center bg-neutral-700 border border-white text-white px-6 py-2 rounded-full 
                        transition-all duration-200 hover:bg-lime-500 hover:scale-110 hover:border-2 hover:border-white hover:cursor-pointer
                        text-lg md:text-2xl whitespace-nowrap'>
                        Explore More
                        <BiRightArrowAlt className='text-2xl md:text-4xl transition-all duration-200 group-hover:translate-x-1.5 ' />
                    </div>

                    {/* Social Icons */}
                    <div className='flex gap-x-4 justify-center w-full md:w-auto'>
                        <FaLinkedin className='transition-all duration-200 hover:scale-110 hover:border-2 hover:border-white hover:cursor-pointer' />
                        <FaGithub className='transition-all duration-200 hover:scale-110 hover:border-2 hover:border-white hover:cursor-pointer' />
                        <FaFacebook className='transition-all duration-200 hover:scale-110 hover:border-2 hover:border-white hover:cursor-pointer' />
                    </div>
                </div>


            </div>
            {/* Image section */}
            <div className='w-full md:w-1/2 flex justify-center md:justify-end '>
                <Image
                    src='/heroImage.png'
                    alt='Image for hero section'
                    width={120}
                    height={120}
                    className='aspect-square object-cover rounded-full border-4 md:border-6 border-white w-2/3 md:w-[80%]'
                />
            </div>

        </section>
    )
}

export default HeroSection