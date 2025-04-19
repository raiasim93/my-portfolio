import React from 'react';
import { FaLinkedin, FaFilePdf } from "react-icons/fa";
import dayjs from 'dayjs';

const FooterSection = () => {
  const today =dayjs().format('YYYY-MM-DD')

  return (
    <section className='py-8 px-[6vw] 2xl:px-[16vw] flex flex-col gap-y-12 lg:gap-y-40 justify-center items-center min-h-[60vh] bg-black'>
        <div className='text-4xl lg:text-8xl tracking-wider'>
             LET&apos;S CHAT
        </div>
        <div className='w-full flex justify-between items-center'>
            <div className='text-xl font-semibold'>
              Last updated: {today}
            </div>
            <div className='flex gap-x-4'>
              <div className='p-4 bg-zinc-800 rounded-full hover:bg-zinc-700 hover:scale-110 cursor-pointer duration-100 transition-all '> <FaLinkedin className='text-2xl'/> </div>
              <div className='p-4 bg-zinc-800 rounded-full hover:bg-zinc-700 hover:scale-110 cursor-pointer duration-100 transition-all'> <FaFilePdf className='text-2xl'/> </div>
              
            </div>

        </div>
    </section>
  )
}

export default FooterSection