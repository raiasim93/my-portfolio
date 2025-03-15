import React from 'react';
import Image from 'next/image';


const HeroSection = () => {
  return (
    <section className='flex flex-col md:flex-row justify-center items-center h-[calc(100vh-80px)] bg-neutral-950 py-8 px-[12vw] 2xl:px-[16vw] w-screen '>

        <div className='sm:w-full md:w-1/2 flex justify-center items-center md:order-2 '>
            <Image 
                className= 'rounded-full object-cover w-1/2 md:w-4/5  aspect-square' 
                src="/heroImage.png" alt='Hero section image' 
                width={200} 
                height={200} />
        </div>
        
        <div className='sm:w-full md:w-1/2 flex flex-col gap-y-2 md:gap-y-4 items-start  sm:order-1'>
            <div className='text-md md:text-4xl'>
                Hey! I'm 
            </div>
            <div className='text-2xl'>
                 <span className='text-lime-400 text-4xl'>Asim  </span> Rai
            </div>
            <div className='uppercase text-6xl leading-normal'>
                Front-end Developer
            </div>
        </div>
    </section>
  )
}

export default HeroSection