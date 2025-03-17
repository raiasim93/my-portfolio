import React from 'react';
import Image from 'next/image';
import { BiRightArrowAlt } from 'react-icons/bi';
import { FaLinkedin, FaGithub, FaFacebook, FaHandPeace } from 'react-icons/fa';

const HeroSection = () => {
    return (
        <section className='md:h-[calc(100vh-80px)]  w-full py-8 px-[12vw] 2xl:px-[16vw] flex flex-col md:flex-row justify-center items-center bg-neutral-950 text-4xl  '>
            {/* Text section */}
            <div className='w-full mb-12 md:mb-0 md:w-1/2 flex flex-col md:flex-col  md:gap-y-4 text-center md:text-left '>
                <div className='text-xl flex items-center justify-center md:justify-start md:text-4xl mb-4 md:mb-0 tracking-widest sm:mb-0  w-full'>
                    Heyy! I'm Asim. <FaHandPeace className='md:text-4xl' />
                </div>
                <div className='w-full text-4xl md:text-5xl  tracking-widest leading-12' >
                    Building Brands, <span className='text-lime-500'> Developing Applications </span>  and Delivering 
                    <span className='text-lime-500'> Great UI/UX </span>
                </div>
                <div className='w-full flex flex-col gap-y-8 md:flex-row md:gap-y-0 items-center justify-between mt-16'>
                    <button className='flex items-center gap-x-2 bg-neutral-600 border border-white text-white px-6 py-2 rounded-full text-xl
                                        transition-all duration-200 hover:scale-110 hover:border-2 hover:border-white hover:cursor-pointer    
                                        '>
                        Explore More
                        <BiRightArrowAlt className='text-2xl md:text-4xl transition-all duration-200 hover:translate-x-1.5 hover:scale-110' />
                    </button>
                    <div className='flex gap-x-4'>
                        <FaLinkedin className=' transition-all duration-200 hover:scale-110 hover:border-2  hover:border-white  hover:cursor-pointer' />
                        <FaGithub className=' transition-all duration-200 hover:scale-110 hover:border-2 hover:border-white hover:cursor-pointer' />
                        <FaFacebook className=' transition-all duration-200 hover:scale-110 hover:border-2 hover:border-white hover:cursor-pointer' />
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
                    className='aspect-square object-cover rounded-4xl md:rounded-full border-4 md:border-8 border-white w-4/5 md:w-3/4'
                />
            </div>

        </section>
    )
}

export default HeroSection