import Image from 'next/image'
import React from 'react'

const ProjectSection = () => {
    const tools = ["React", "Bootstrap", "Javascript", "HTML", "CSS"]
    return (
        <section className='py-12 px-[12vw] 2xl:px-[16vw] flex flex-col gap-y-8 md:gap-y-12'>
            <div className='flex justify-center w-full text-2xl md:text-6xl'>
                My works?
            </div>
            <div className='flex flex-col gap-y-8 w-1/3 border-4 px-4 py-12 rounded-2xl bg-zinc-900'>
                <Image className='w-full object-contain rounded-2xl'
                    src='/tempweather-thumbnail.png' width={100} height={100} alt='project image' />
                <div className='flex flex-col gap-y-8'>
                    <div className='text-xl md:text-4xl'>
                        Temp Weather
                    </div>
                    <div className='flex gap-4 flex-wrap '>
                     {tools.map((item)=> (
                        <button className='border py-2 px-4 rounded-2xl text-lg bg-lime-600'> {item}  </button>
                     ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProjectSection