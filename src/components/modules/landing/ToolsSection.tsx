import React from 'react';
import { FaReact } from 'react-icons/fa';
import Image from 'next/image';

const ToolsSection = () => {
  return (
    <section className='w-full py-8 px-[12vw] 2xl:px-[16vw] bg-white text-black flex flex-col gap-y-8'>
      <div className='flex md:justify-center text-2xl font-semibold md:text-4xl'>
        My Tech Stack
      </div>
      <div className='text-gray-600 w-full text-left md:w-1/2  md:mx-auto md:text-center md:text-xl'>
        This are the development tools that I have expertise over and what I will be using to make your website presentable and functionable.
      </div>
      {/* This is where the tools will be displayed */}
      <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
        {Array.from({ length: 12 }, (_, i) => (
          <div key={i} 
              className='border-2 rounded-2xl border-gray-300 py-6 flex flex-col items-center gap-y-4 shadow-2xl'>
            <div className='text-4xl flex justify-center'>
              <Image src={'/reactIcon.svg'}
                className='aspect-square object-cover w-1/2'
                alt='React Icon image'
                width={40}
                height={40} />
            </div>
            <div className='text-center text-4xl text-gray-400'>
              {i + 1}
            </div>

          </div>
        ))}


      </div>

    </section>
  )
}

export default ToolsSection;