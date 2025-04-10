import React from 'react';
import Image from 'next/image';
import { BiRightArrowAlt } from 'react-icons/bi';
import { FaLinkedin, FaGithub, FaFacebook, FaHandPeace } from 'react-icons/fa';

const HeroSection = () => {
    return (
        <section className='bg-black min-h-[calc(100vh-80px)]  w-full py-8 px-[6vw] 2xl:px-[16vw] flex flex-col gap-x-8 lg:flex-row justify-center items-center  text-4xl  '>
            {/* Text section */}
            <div className='w-full mb-12 lg:mb-0 lg:w-1/2 flex flex-col lg:flex-col gap-y-6  lg:gap-y-8 text-center lg:text-left '>
                <div className='text-lg font-bold flex items-center justify-center lg:justify-start lg:text-2xl mb-4 lg:mb-0  sm:mb-0  w-full'>
                
                    Welcome to my Portflio <FaHandPeace className='ms-3' />
                </div>
                <div className='w-full lg:w-3/4 text-4xl lg:text-5xl ' >
                    I am a   <span className='text-lime-500'> Frontend Developer </span> 
                </div>
                <div className='text-md lg:text-lg text-gray-400 lg:flex hidden '>
                    I turn ideas into interactive realities and craft product experience that solve real-world problems. Let&apos;s bring vision to your life!!
                </div>

                <div className='w-full flex flex-wrap gap-y-6 justify-center lg:justify-between items-center'>
                    {/* Explore More Button */}
                    <div className='group flex items-center bg-neutral-700 border border-white text-white px-6 py-2 rounded-full 
                        transition-all duration-200 hover:bg-lime-500 hover:scale-110 hover:border-2 hover:border-white hover:cursor-pointer
                        text-lg lg:text-xl whitespace-nowrap'>
                        Explore More
                        <BiRightArrowAlt className='text-2xl lg:text-4xl transition-all duration-200 group-hover:translate-x-1.5 ' />
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
                    className='aspect-square object-cover rounded-4xl border-4 lg:border-6 border-white w-2/3 lg:w-[80%]'
                    quality={100}
                />
                {/* <div className='grid-cols-8 gap-x-4 min-h-screen'>
                   <div className='col-span-1 bg-zinc-900'>1 </div>
                   <div className='col-span-1 bg-zinc-900'>2 </div>
                   <div className='col-span-4 bg-zinc-900'>3 </div>
                   <div className='col-span-1 bg-zinc-900'> 4</div>
                   <div className='col-span-1 bg-zinc-900'>5 </div>
                </div> */}
            </div>

        </section>
    )
}

export default HeroSection