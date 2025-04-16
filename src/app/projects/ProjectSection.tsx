import React from 'react';
import Image from 'next/image';
const ProjectSection = () => {
  return (
  <section className='py-8 px-[6vw] 2xl:px-[16vw] min-h-screen flex flex-col gap-y-16'>
    <div className='text-6xl lg:text-8xl '>
      My Latest Works
    </div>
    <div className='flex flex-col gap-12'>
        <div className=' bg-zinc-900 rounded-xl p-4 flex flex-col gap-y-4 gap-x-8 lg:flex-row  justify-between w-full px-12 '> 
            <div className='w-full lg:w-1/2 flex justify-center '> 
                <Image alt='project thumbnail' 
                    width={600}
                    height={600}
                    src='/tempweather-thumbnail.png'
                    className='object-contain aspect-3/2' />
            </div>
            <div className='w-full lg:w-1/2 flex flex-col gap-y-4 justify-center lg:items-start'> 
                <h1 className='text-2xl lg:text-4xl'> TempWeather </h1>
                <p className='text-md text-gray-400'>
                    Tempweather is an app that will help you real time weather update of your location. You may search for any other location as desired.
                </p>
                <div className='flex gap-x-4 overflow-x-hidden'>
                    <button className='border border-sky-800 py-2 px-6 rounded-4xl bg-sky-400'> React </button>
                    <button className='border border-sky-800 py-2 px-6 rounded-4xl bg-sky-400'> HTML </button>
                    <button className='border border-sky-800 py-2 px-6 rounded-4xl bg-sky-400'> CSS </button>
                </div>
            </div>
        </div>
        <div className='border py-4'> Project2 </div>
        <div className='border py-4'> Project3 </div>
     </div>

</section> 
  )
}

export default ProjectSection