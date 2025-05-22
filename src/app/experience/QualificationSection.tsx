"use client"
import React, { useState, useRef, useEffect } from 'react';
import { FaChevronDown } from "react-icons/fa";
import qualificationData from '@/components/common/data/qualificationData';

const QualificationSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [contentHeight, setContentHeight]= useState('0px');
  const contentRef = useRef<HTMLDivElement | null>(null);
  const description = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio hic rem earum nisi beatae doloribus labore assumenda pariatur aut excepturi repellendus dolore eligendi debitis eveniet, voluptates, consectetur obcaecati eius mollitia est veritatis nesciunt.";
  useEffect(()=> {
    if(isOpen){
        setContentHeight(`${contentRef.current?.scrollHeight}px`)
    } else {
      setContentHeight('0px');
    }
  }, [isOpen]);
  return (
    <section className='py-16 px-[6vw] 2xl:px-[16vw] bg-zinc-950 flex  flex-col gap-y-4'>
      <div className='text-4xl'>
        What and Where... 
      </div>
      {qualificationData.map((item, index)=> (
          <div key={index} className='bg-zinc-600 hover:bg-zinc-500 hover:duration-200 flex flex-col gap-y-4 p-4 rounded-xl cursor-pointer' 
          onClick={()=> {setIsOpen(!isOpen); console.log(isOpen)}}>
       <div className='flex flex-col-reverse lg:flex-row justify-between items-center'>
         <div className='w-full text-xl'> {item.date} </div>
         <div className='w-full flex items-center gap-x-4'>
           <div className='w-full flex flex-col items-start lg:items-end'>
             <div className='text-2xl'> {item.degree}</div>
             <div className='text-gray-400'> {item.school}</div>
           </div>
           <div>
             <FaChevronDown className={`${isOpen ? 'rotate-180 ease-in-out duration-300 transition-all': ''}`} />
           </div>
         </div>
       </div>
       {isOpen?  <div className='h-[2px] w-full bg-black transition-all duration-300 ease-in-out' /> : ""}
 
       <div ref={contentRef} 
             style={{height: contentHeight}}
            className={`overflow-hidden transition-all duration-300 ease-in-out}`}>
          {description}
       </div>
     </div>
      ) )}
      
    </section>
  )
}

export default QualificationSection