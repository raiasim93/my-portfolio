"use client"
import React, {useEffect, useRef} from 'react';
import CardQualification from '@/components/common/cards/CardQualification';
import qualificationData from '@/components/common/data/qualificationData';
import gsap from 'gsap';
import scrolltrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(scrolltrigger)
const QualificationSection = () => {
  const qualificationSectionRef = useRef(null);
  const titleRef = useRef(null);
  const cardRefElements = useRef<(HTMLDivElement | null)[]> ([]);
  useEffect(()=> {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: qualificationSectionRef.current,
        start: "top 80%",
        end: "center center",
        toggleActions: "play none none reset",
        scrub: true,
      }
    });
    tl.fromTo(
      titleRef.current,
      {x: -300, opacity: 0},
      {x: 0, opacity: 1, duration: 1, ease: "power2.out"}
    )
    cardRefElements.current.forEach((card)=> {
      if(card){
        
        tl.fromTo(
          card,
          {xPercent: -100, opacity: 0},
          {xPercent:0, opacity: 1, duration: 0.8, ease: "power2.out"},
        )
      }
    })
  })
  return (
    <section ref={qualificationSectionRef} className='bg-black py-12 px-[6vw] 2xl:[16vw] flex flex-col gap-y-16 justify-center items-center w-full min-h-screen '>
      <div ref={titleRef} className='text-4xl lg:text-8xl text-center font-semibold'>
         Qualifications over the years
      </div>
      <div className='flex flex-col gap-y-8 justify-center items-center h-full w-full'>
        {qualificationData.map((item, index)=> (
            <CardQualification 
              key={index} id={item.id} school= {item.school} degree={item.degree} date={item.date} 
              ref={(element)=> {cardRefElements.current[index] = element;}}
            />
        ))}
      </div>
    </section>
  )
}

export default QualificationSection