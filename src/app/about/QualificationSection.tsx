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
  useEffect(()=> {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: qualificationSectionRef.current,
        start: "top 80%",
        end: "bottom 40%",
        toggleActions: "play none none reset",
        scrub: true,
        markers: true,
      }
    });
    tl.fromTo(
      titleRef.current,
      {x: -150, opacity: 0},
      {x: 0, opacity: 1, duration: 0.6, ease: "power1.inOut"}
    )
  })
  return (
    <section ref={qualificationSectionRef} className='py-48 px-[12vw] 2xl:[16vw] flex flex-col gap-y-16 justify-center items-center w-full min-h-screen '>
      <div ref={titleRef} className='text-2xl md:text-5xl'>
         Qualifications over the years
      </div>
      <div className='flex flex-col gap-y-8 justify-center items-center h-full w-full'>
        {qualificationData.map((item, index)=> (
            <CardQualification 
              key={index} id={item.id} school= {item.school} degree={item.degree} date={item.date} 
            />
        ))}
      </div>
    </section>
  )
}

export default QualificationSection