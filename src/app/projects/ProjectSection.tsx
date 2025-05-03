'use client'
import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import { FaArrowLeft } from 'react-icons/fa';
import gsap from 'gsap';
const ProjectSection = () => {
  const liveDemoRef = useRef(null);
  useEffect(()=> {
    if(liveDemoRef.current){
      gsap.to(liveDemoRef.current,{
        translateX: "10px",
        duration: 1,
        scale: 1.25,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut"
      })
    }
  })
  return (
  <section className='bg-black py-8 px-[6vw] 2xl:px-[16vw] min-h-screen flex flex-col gap-y-16'>
    <div className='text-4xl lg:text-6xl '>
      My Latest Works
    </div>
    <div className='flex  flex-col justify-between gap-8 min-h-screen bg-zinc-950'>
        <div className=' w-full p-8 flex flex-col gap-y-8 gap-x-8  '> 
        <h1 className='text-3xl lg:text-5xl font-extrabold w-[80%] mx-auto text-center'> TempWeather </h1>
            <div className='w-[80%] flex justify-center mx-auto'> 
                <Image alt='project thumbnail' 
                    width={800}
                    height={800}
                    src='/tempweather-thumbnail.png'
                    className='object-contain aspect-[3/2]' />
            </div>
            <div className='w-[80%] mx-auto flex flex-col gap-y-4 justify-center'> 
               
                <p className='text-md text-gray-400'>
                    Tempweather is an app that will help you inspect real time weather of your desired location. Search for weather in any cities of the world you'd like. All you have to do is few simple steps, Type and Click !
                </p>
                <div className='lg:flex  gap-x-4'>
                  <div className='decoration-wavy underline-offset-4 underline text-xl my-4'> Want to try it yourself? </div>
                  <button className='bg-zinc-700 flex justify-center items-center gap-x-4 rounded-2xl border py-2 px-8 w-fit text-lg hover:scale-110'> Live Demo <FaArrowLeft /> </button>
                </div>
               
             </div>
             <div className='w-[80%] mx-auto flex flex-col gap-y-4'>
                  <div className='text-xl font-semibold'> Tools Used </div>
                  <div className='flex gap-x-4' >
                    <button className='bg-lime-500 border py-2 px-6 rounded-2xl'> 
                        React
                     </button>
                    <button className='bg-lime-500 border  py-2 px-6 rounded-2xl'> 
                        React
                     </button>
                    <button className='bg-lime-500  py-2 px-6 rounded-2xl'> 
                        React
                     </button>
                   
                  </div>
            </div>
        </div>
    
     </div>

</section> 
  )
}

export default ProjectSection