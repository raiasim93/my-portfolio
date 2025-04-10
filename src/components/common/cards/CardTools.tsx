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
              className='bg-zinc-700  border-2 rounded-2xl border-gray-300 py-6 flex flex-col items-center gap-y-4 shadow-2xl
                        hover:bg-zinc-800 cursor-pointer hover:scale-95 transition-all duration-200
                        '>
            <div className='text-2xl lg:text-4xl flex justify-center'>
              {image}
            </div>
            <div className='text-center font-light text-lg lg:text-xl text-gray-400'>
              {toolName}
            </div>

          </div>
    </>
  )
}

export default CardTools;