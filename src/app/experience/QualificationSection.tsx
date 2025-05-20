// "use client"
// import React, {useEffect, useRef} from 'react';
// import CardQualification from '@/components/common/cards/CardQualification';
// import qualificationData from '@/components/common/data/qualificationData';
// import gsap from 'gsap';
// import scrolltrigger from 'gsap/ScrollTrigger'

// gsap.registerPlugin(scrolltrigger)
// const QualificationSection = () => {
//   const qualificationSectionRef = useRef(null);
//   const titleRef = useRef(null);
//   const cardRefElements = useRef<(HTMLDivElement | null)[]> ([]);
//   useEffect(()=> {
//     const tl = gsap.timeline({
//       scrollTrigger: {
//         trigger: qualificationSectionRef.current,
//         start: "top 80%",
//         end: "center center",
//         toggleActions: "play none none reset",
//         scrub: true,
//       }
//     });
//     tl.fromTo(
//       titleRef.current,
//       {xPercent: -100, opacity: 0},
//       {xPercent: 0, opacity: 1, duration: 1, ease: "power2.out"}
//     )
//     cardRefElements.current.forEach((card)=> {
//       if(card){

//         tl.fromTo(
//           card,
//           {xPercent: -100, opacity: 0},
//           {xPercent:0, opacity: 1, duration: 0.8, ease: "power2.out"},
//         )
//       }
//     })
//   })
//   return (
//     <section ref={qualificationSectionRef} className='bg-black py-12 px-[6vw] 2xl:px-[16vw] flex flex-col gap-y-16 justify-center items-center w-full min-h-screen '>
//       <div ref={titleRef} className='text-3xl lg:text-5xl text-center font-semibold'>
//          Qualifications over the years
//       </div>
//       <div className='flex flex-col gap-y-8 justify-center items-center h-full w-full'>
//         {qualificationData.map((item, index)=> (
//             <CardQualification 
//               key={index} id={item.id} school= {item.school} degree={item.degree} date={item.date} 
//               ref={(element)=> {cardRefElements.current[index] = element;}}
//             />
//         ))}
//       </div>
//     </section>
//   )
// }

// export default QualificationSection

"use client"
import React, { useState, useRef, useEffect } from 'react';
import { FaChevronDown } from "react-icons/fa";

const QualificationSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [contentHeight, setContentHeight]= useState('0px');
  const contentRef = useRef(null);
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
      <div className='bg-zinc-600 hover:bg-zinc-500 hover:duration-200 flex flex-col gap-y-4 p-4 rounded-xl cursor-pointer' 
           onClick={()=> {setIsOpen(!isOpen); console.log(isOpen)}}>
        <div className='flex justify-between items-center'>
          <div className=' w-full'>2020-2024</div>
          <div className=' w-full flex items-center gap-x-4'>
            <div className='w-full flex flex-col items-end'>
              <div className='text-xl'> Bachelor of Information Technology </div>
              <div className='text-gray-800'> Federation University </div>
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
    </section>
  )
}

export default QualificationSection