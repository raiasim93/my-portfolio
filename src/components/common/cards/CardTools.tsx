import React from 'react'

interface CardToolsProps{
  toolName: string;
  image: React.ReactNode;
  index: number;
}
const CardTools: React.FC<CardToolsProps> = ({toolName, image, index}) => {
  return (
    <>
    <div key={index} 
              className='border-2 rounded-2xl border-gray-300 py-6 flex flex-col items-center gap-y-4 shadow-2xl
                        hover:bg-neutral-700 cursor-pointer hover:scale-110 transition-all duration-200
                        '>
            <div className='text-2xl md:text-4xl flex justify-center'>
              {image}
            </div>
            <div className='text-center font-light text-lg md:text-xl text-gray-400'>
              {toolName}
            </div>

          </div>
    </>
  )
}

export default CardTools;