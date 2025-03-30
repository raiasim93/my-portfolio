import React from 'react';
import { FaUniversity } from 'react-icons/fa';

const QualificationSection = () => {
  return (
    <section className='py-12 px-[12vw] 2xl:[16vw] flex flex-col gap-y-16 justify-center items-center w-full min-h-screen '>
      <div className='text-2xl md:text-5xl'>
         Qualifications over the years
      </div>
      <div className='flex flex-col gap-y-8 justify-center items-center h-full w-full'>
          <div className='w-1/2 border-4 rounded-2xl p-8 min-h-[288px]
                          flex flex-col gap-y-4 justify-center items-center transition-all transform duration-300
                          hover:scale-95 hover:bg-zinc-900 cursor-pointer'>
           <div className='text-2xl text-center font-semibold flex flex-col md:flex-row md:text-3xl  items-center gap-x-4'>
            <FaUniversity />
            <span> Federation University </span>  
           </div>
           <div className='text-gray-500 text-lg md:text-xl text-center'>
            Bachelor of Information Technology
           </div>
           <div>
              2020 - 2024
           </div>
          </div>
          <div className='w-1/2 border-4 rounded-2xl p-8 min-h-[288px]
                          flex flex-col gap-y-4 justify-center items-center transition-all transform duration-300
                          hover:scale-95 hover:bg-zinc-900 cursor-pointer'>
           <div className='text-2xl text-center font-semibold md:text-3xl flex items-center gap-x-4'>
            <FaUniversity />
            <span> Federation University </span>  
           </div>
           <div className='text-gray-500 text-lg md:text-xl text-center'>
            Bachelor of Information Technology
           </div>
           <div>
              2020 - 2024
           </div>
          </div>
          <div className='w-1/2 border-4 rounded-2xl p-8 min-h-[288px]
                          flex flex-col gap-y-4 justify-center items-center transition-all transform duration-300
                          hover:scale-95 hover:bg-zinc-900 cursor-pointer'>
           <div className='text-2xl text-center font-semibold md:text-3xl flex items-center gap-x-4'>
            <FaUniversity />
            <span> Federation University </span>  
           </div>
           <div className='text-gray-500 text-lg md:text-xl text-center'>
            Bachelor of Information Technology
           </div>
           <div>
              2020 - 2024
           </div>
          </div>
      </div>
    </section>
  )
}

export default QualificationSection