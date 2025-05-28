"use client"
import React, { useState, useRef, useEffect } from 'react';
import { FaChevronDown } from "react-icons/fa";
import qualificationData from '@/components/common/data/qualificationData';

const QualificationSection = () => {
  const [openCards, setOpenCards] = useState<boolean[]>(() =>
    new Array(qualificationData.length).fill(false));
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);
  const handleClick = (index: number) => {
    setOpenCards((prev) => {
      const updatedCards = [...prev];
      updatedCards[index] = !updatedCards[index];
      return updatedCards;
    });
    console.log(`Card at index ${index} has value of ${openCards[index]} `)
    console.log(`Card clicked at index: ${index}`);
  }
  return (
    <section className='py-16 px-[6vw] 2xl:px-[16vw] bg-zinc-900 flex  flex-col gap-y-8'>
      <div className='text-4xl'>
        What and Where...
      </div>
      {qualificationData.map((item, index) => {
        const expandedHeight = contentRefs.current[index]?.scrollHeight ?? 0;
        return (
          <div
            onClick={() => handleClick(index)}
            key={index} className='bg-zinc-800 hover:bg-zinc-700 hover:duration-200 flex flex-col gap-y-4 p-4 rounded-xl cursor-pointer'>
            <div className='flex flex-col-reverse lg:flex-row justify-between items-center'>
              <div className='w-full text-xl'> {item.date} </div>
              <div className='w-full flex items-center gap-x-4'>
                <div className='w-full flex flex-col items-start lg:items-end'>
                  <div className='text-2xl'> {item.degree}</div>
                  <div className='text-gray-400'> {item.school}</div>
                </div>
                <div>
                  <FaChevronDown className={`transition-all duration-300 ease-in-out${openCards[index]? 'rotate-180': ''}`} />
                </div>
              </div>
            </div>
            {openCards[index] && (<div className= {`h-[2px] w-full bg-black transition-all duration-300 ease-in-out ${openCards[index]? 'opacity-100': 'opacity-0'}`}/>)}

            <div ref={el => (contentRefs.current[index] = el)}
              style={{
                maxHeight: openCards[index] ? `${expandedHeight}px` : '0px'
              }}
              className={`overflow-hidden transition-all duration-300 ease-in-out}`}>
              {item.description}
            </div>
          </div>
        )

      })}

    </section>
  )
}

export default QualificationSection