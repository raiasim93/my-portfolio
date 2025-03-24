import React from 'react';
import { FaMouse } from 'react-icons/fa';
import Image from 'next/image';

const AboutSection = () => {
  return (
    <section className='py-12 px-[12vw] 2xl:px-[16vw] w-full flex flex-col md:flex-row min-h-[100vh] justify-center'>
      <div className='w-full md:w-1/3  flex flex-col gap-y-4 md:gap-y-8 justify-center md:justify-start'>
        <div className='text-4xl md:text-6xl'>   Hey! I'm <span className='text-lime-400'> Asim. </span>  </div>
        <div className='text-lg md:text-xl'>
          I'm a Sydney-based Frontend Developer who loves designing and developing impactful brands as well as
          building innovative applications with strong emphasis on <span className='text-lime-400 text-2xl'> Product Experience.</span>  </div>

      </div>
      <div className='w-full md:w-1/3 flex justify-center items-center'>
        <Image
          className='aspect-square '
          src='/aboutHero.jpeg'
          alt='Main Image of Hero Section'
          width={40}
          height={40}
        />
      </div>
      <div className='w-full md:w-1/3  flex flex-col gap-y-4 justify-end items-end'>
        <div className='text-2xl md:text-4xl'> Want to know more? </div>
        <div className='text-xl md:text-2xl flex gap-x-4 items-center'> Scroll Below <FaMouse/> </div>
      </div>
    </section>
  )
}

export default AboutSection