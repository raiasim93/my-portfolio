'use client'
import React, { useEffect } from 'react';
import Image from 'next/image';

const ProjectSection = () => {
  useEffect(()=> {
    alert("Full functionality is still a work in progress");
  }, []);
  const projects = [
    {
      projectId: 1,
      image: {
        imageAlt: 'DailyNest',
        source: '/dailynest-thumbnail.png'
      },
      projectName: 'Tempweather',
      projectDescription: 'DailyNest is a minimalist to-do list app built for quick task capture, daily planning, and simple habit tracking—all in one streamlined interface.',
      projectTools: ['React', 'Openweather API', 'Bootstrap'],
      projectLiveSite: ''
    },
    {
      projectId: 2,
      image: {
        imageAlt: 'Tempweather App',
        source: '/tempweather-thumbnail.png'
      },
      projectName: 'Tempweather',
      projectDescription: 'A real-time weather forecast app with hourly and weekly predictions.',
      projectTools: ['React', 'Openweather API', 'Bootstrap'],
      projectLiveSite: ''
    },
    {
      projectId: 3,
      image: {
        imageAlt: 'QRifyyy',
        source: '/qr-thumbnail.png'
      },
      projectName: `QR'ifyy`,
      projectDescription: `QR'ifyy is a sleek QR code generator that lets users create scannable codes for Wi-Fi credentials and web links—ideal for quick sharing with zero hassle.'`,
      projectTools: ['React', 'Openweather API', 'Bootstrap'],
      projectLiveSite: ''
    },
  ]
  return (
    <section className='bg-black min-h-screen  px-[6vw] 2xl:px-[16vw]'>
      <h1 className='flex justify-center py-12 text-2xl lg:text-4xl'> Latest Projects </h1>
      <div className='max-w-7xl rounded-2xl flex flex-col gap-y-16'>
        {/* project card starts here */}
        {projects.map((item,index)=> (
          <div key={index} className={`flex flex-col lg:flex-row bg-zinc-900 rounded-2xl
                                       ${index % 2 === 0 ? 'lg:flex-row-reverse': ''} `}>
          <div className='w-full lg:w-1/2 aspect-[12/9] lg:auto relative rounded-2xl overflow-hidden '>
            <Image
              fill
              alt={item.image.imageAlt}
              src={item.image.source}
              className='object-contain p-8 rounded-2xl'
            />
          </div>
          <div className='w-full lg:w-1/2 flex flex-col justify-center gap-y-8 p-8'>
            <div className='flex flex-col gap-y-2'>
              <h2 className='text-xl lg:text-2xl text-lime-600'> &#35;{item.projectId} </h2>
              <h1 className='text-2xl lg:text-4xl font-extrabold py-2'> {item.projectName} </h1>
              <p className='text-gray-400'>{item.projectDescription} </p>
              <div className='flex gap-4 flex-wrap'>
                {item.projectTools.map((tool,index)=> (
                    <button key={index} className='py-2 px-6 rounded-full bg-indigo-800 text-md'> {tool} </button>
                ))}
                
              </div>
            </div>


            <div className='flex flex-col gap-y-2 font-light text-sm'>
              <h3 className='text-lg'> Check it out, perhaps? </h3>
              <button className='py-2 px-6 rounded-2xl w-fit bg-lime-500 text-md font-extrabold'> Live.. </button>
            </div>
          </div>

        </div>
        ))}
        
      </div>
    </section>
  )
}

export default ProjectSection