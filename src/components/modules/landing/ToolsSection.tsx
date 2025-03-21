"use client"
import React, { useState } from 'react';
import toolsData from '@/components/common/data/toolsData';
import CardTools from '@/components/common/cards/CardTools';
import { FaArrowDown, FaArrowUp } from 'react-icons/fa';
const ToolsSection = () => {
  const [showAll, setShowAll] = useState(false);
  const toolsToShowFirst = showAll ? toolsData : toolsData.slice(0,8);
  return (
    <section className='w-full py-16 px-[12vw] 2xl:px-[16vw] flex flex-col gap-y-8 bg-zinc-900'>
      <div className='flex md:justify-center text-2xl font-semibold md:text-4xl'>
        My Tech Stack
      </div>
      <div className='text-gray-400 w-full text-left md:w-1/2  md:mx-auto md:text-center md:text-xl'>
        Here are the development tools I specialize in and will be using to make your website both visually appealing and fully functional. 🚀
      </div>
      {/* This is where the tools will be displayed */}
      <div className={`grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 low-hidden transition-all duration-500 `}>
        {toolsToShowFirst.map((item, index) => (
          <CardTools key={index} image={item.image} toolName={item.toolName} index={index}/>
        ))}
      </div>
      <div className='mt-4 text-2xl flex justify-center w-full'>
          <button onClick={()=> setShowAll(!showAll)} className='flex items-center gap-x-4 cursor-pointer text-lime-400 '>
            {showAll? 'See Less'  : 'See All' }
            {showAll? <FaArrowUp/> : <FaArrowDown/>}
          </button>
      </div>

    </section>
  )
}

export default ToolsSection;