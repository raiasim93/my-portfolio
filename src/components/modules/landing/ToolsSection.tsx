import React from 'react';
import { FaReact } from 'react-icons/fa';
import toolsData from '@/components/common/data/toolsData';
import CardTools from '@/components/common/cards/CardTools';

const ToolsSection = () => {
  return (
    <section className='w-full py-8 px-[12vw] 2xl:px-[16vw] flex flex-col gap-y-8'>
      <div className='flex md:justify-center text-2xl font-semibold md:text-4xl'>
        My Tech Stack
      </div>
      <div className='text-gray-400 w-full text-left md:w-1/2  md:mx-auto md:text-center md:text-xl'>
        Here are the development tools I specialize in and will be using to make your website both visually appealing and fully functional. 🚀
      </div>
      {/* This is where the tools will be displayed */}
      <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
        {toolsData.map((item, index) => (
          <CardTools key={index} image={item.image} toolName={item.toolName} />
        ))}
      </div>

    </section>
  )
}

export default ToolsSection;