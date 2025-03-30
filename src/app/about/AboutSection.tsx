"use client"
import React, { useEffect, useRef, useState } from 'react';
import { FaMouse } from 'react-icons/fa';
import Image from 'next/image';
import gsap from 'gsap';

const AboutSection = () => {
  const sectionRefAbout = useRef(null);
  const aboutIntroRef = useRef(null);
  const aboutImageRef = useRef(null);
  const aboutOutro = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  useEffect(()=> {
    if(hasAnimated) return;
    const observer = new IntersectionObserver(
      ([entry])=> {
        console.log(entry.isIntersecting)
       setIsVisible(entry.isIntersecting);
       setHasAnimated(true);
      },
      {
        threshold: 0.3
      }
    )
    if(sectionRefAbout.current){
      observer.observe(sectionRefAbout.current);
    }
    return()=> {
      if(sectionRefAbout.current){
        observer.unobserve(sectionRefAbout.current);
      }
  
    }
  }, [hasAnimated]);
  useEffect(()=> {
    if(isVisible){
      gsap.fromTo(aboutIntroRef.current,{ opacity: 0, x: 300, scale: 1.5 },
                                        { opacity: 1, x: 0, duration: 2.5, scale:1, ease: "power2.out"}
                 );
                 gsap.fromTo(
                  aboutImageRef.current, { opacity: 0, x: 100, scale: 2 },
                                         { opacity: 1, x: 0, y: 0, scale: 1, duration: 1.5, ease: "power1.in" }
                );
                gsap.fromTo(
                  aboutOutro.current, {opacity:0, y: -700, scale: 2},
                                      {opacity: 1, x: 0, y: 0, scale: 1, duration : 3.5, ease: "power3.out"}
                )
      }
      
  }, [isVisible]);

  
  return (
    <section ref={sectionRefAbout} className='py-12 px-[12vw] 2xl:px-[16vw] w-full flex flex-col md:flex-row min-h-[100vh] justify-center gap-y-16 md:gap-y-0'>
      <div ref={aboutIntroRef} className='w-full md:w-1/3  flex flex-col gap-y-4 md:gap-y-8 justify-center md:justify-start opacity-0'>
        <div className='text-3xl md:text-6xl font-semibold text-center md:text-start'>   Hey! I&apos;m <span className='text-lime-400'> Asim. </span>  </div>
        <div className='text-lg md:text-xl font-light text-center md:text-start'>
          I&apos;m a Sydney-based Frontend Developer who loves designing and developing impactful brands as well as
          building innovative applications with strong emphasis on <span className='text-lime-400 text-2xl'> Product Experience.</span>  </div>

      </div>
      <div ref={aboutImageRef} className='w-full md:w-1/3 flex justify-center items-center opacity-0'>
        <Image

          className='aspect-square w-1/2 md:w-2/3 object-cover border-2 border-white rounded-2xl'
          src='/aboutHero.jpeg'
          alt='Main Image of Hero Section'
          width={400}
          height={400}

        />
      </div>
      <div ref={aboutOutro} className='w-full md:w-1/3  flex flex-col items-center gap-y-4 md:gap-y-2 md:justify-end md:items-end '>
        <div className='text-2xl md:text-4xl text-end'> Want to know more? </div>
        <div className='text-xl md:text-2xl flex gap-x-4 items-end '> Scroll Below <FaMouse className='text-lime-400' /> </div>
      </div>
    </section>
  )
}

export default AboutSection