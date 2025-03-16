import React from 'react';
import Image from 'next/image';
import { BiRightArrowAlt } from 'react-icons/bi';
import { FaLinkedin, FaGithub, FaFacebook, FaHandPeace } from 'react-icons/fa';

const HeroSection = () => {
    return (
        <section className='h-[calc(100vh-80px)] w-full py-8 px-[12vw] 2xl:px-[16vw] flex flex-col md:flex-row justify-center items-center text-4xl  '>
            {/* Text section */}
            <div className='w-full mb-12 md:mb-0 md:w-1/2 flex flex-col md:flex-col gap-y-2 md:gap-y-4'>
                <div className='text-2xl w-100 flex items-center md:text-4xl tracking-widest sm:mb-0 md:mb-8'>
                    Heyy! I'm Asim. <FaHandPeace className='md:text-4xl' />
                </div>
                <div className='w-full text-4xl md:text-5xl  tracking-widest' >
                    Building Brands, <span className='text-lime-500'> Developing Applications </span>  and Delivering 
                    <span className='text-lime-500'> Great UI/UX </span>
                </div>
                <div className='w-full flex flex-col gap-y-4 md:flex-row md:gap-y-0 items-center justify-between mt-16'>
                    <button className='flex items-center gap-x-2 bg-neutral-600 border border-white text-white px-6 py-2 rounded-full text-xl
                                        transition-all duration-200 hover:scale-110 hover:border-2 hover:border-white hover:cursor-pointer    
                                        '>
                        Explore More
                        <BiRightArrowAlt className='text-2xl md:text-4xl' />
                    </button>
                    <div className=' flex gap-x-4 '>
                        <FaLinkedin className=' transition-all duration-200 hover:scale-110 hover:border-2 hover:border-white  hover:cursor-pointer hover:rounded-full' />
                        <FaGithub className=' transition-all duration-200 hover:scale-110 hover:border-2 hover:border-white hover:cursor-pointer hover:rounded-full' />
                        <FaFacebook className=' transition-all duration-200 hover:scale-110 hover:border-2 hover:border-white hover:cursor-pointer hover:rounded-full' />
                    </div>
                </div>


            </div>
            {/* Image section */}
            <div className='w-full md:w-1/2 flex justify-center md:justify-end '>
                <Image
                    src='/heroImage.jpg'
                    alt='Image for hero section'
                    width={120}
                    height={120}
                    className='aspect-square object-cover rounded-4xl md:rounded-full border-4 md:border-8 border-white w-full md:w-3/4'
                />
            </div>

        </section>
    )
}

export default HeroSection