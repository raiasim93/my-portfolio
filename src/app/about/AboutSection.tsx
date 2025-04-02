"use client"
import React, { useEffect, useRef } from 'react';
import { FaMouse } from 'react-icons/fa';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  const sectionRef = useRef(null);
  const aboutIntroRef = useRef(null);
  const aboutImageRef = useRef(null);
  const aboutOutroRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        toggleActions: "play none none reset",
      }
    });
  
    tl.fromTo(
      aboutIntroRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.5, ease: "power2.out" }
    )
    .fromTo(
      aboutImageRef.current,
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 1.2, ease: "power2.out" },
      "-=1"
    )
    .fromTo(
      aboutOutroRef.current,
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out" },
      "-=0.8"
    );
  }, []);
  

  return (
    <section ref={sectionRef} className='py-12 px-[12vw] 2xl:px-[16vw] w-full flex flex-col md:flex-row min-h-[100vh] justify-center gap-y-16 md:gap-y-0'>
      <div ref={aboutIntroRef} className='w-full md:w-1/3 flex flex-col gap-y-4 md:gap-y-8 justify-center md:justify-start opacity-0'>
        <div className='text-3xl md:text-6xl font-semibold text-center md:text-start'> Hey! I&apos;m <span className='text-lime-400'> Asim. </span> </div>
        <div className='text-lg md:text-xl font-light text-center md:text-start'>
          I&apos;m a Sydney-based Frontend Developer who loves designing and developing impactful brands as well as
          building innovative applications with strong emphasis on <span className='text-lime-400 text-2xl'> Product Experience.</span>
        </div>
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
      
      <div ref={aboutOutroRef} className='w-full md:w-1/3 flex flex-col items-center gap-y-4 md:gap-y-2 md:justify-end md:items-end opacity-0'>
        <div className='text-2xl md:text-4xl text-end'> Want to know more? </div>
        <div className='text-xl md:text-2xl flex gap-x-4 items-end'> Scroll Below <FaMouse className='text-lime-400' /> </div>
      </div>
    </section>
  );
}

export default AboutSection;
