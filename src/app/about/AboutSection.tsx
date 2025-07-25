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
  
  useEffect(()=> {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 40%",
        end: "center 40%",
        toggleActions: "play none none none",
        scrub: 1
      }
    });
    tl.fromTo(
      aboutIntroRef.current,
      {y: 300, opacity: 0, scale:1.6},
      {y: 0, opacity: 1, scale:1, duration: 1.2, ease:"power1.out"}
    )
    tl.fromTo(
      aboutImageRef.current,
      {y: 300, opacity: 0, scale:1.6},
      {y: 0, opacity: 1, scale:1, duration: 1.4, ease:"power1.out"},
      "-=1.2"
    )
    tl.fromTo(
      aboutOutroRef.current,
      {y: 500, opacity: 0, scale: 2.6},
      {y:0, opacity: 1, scale:1, duration: 2, ease: "power1.out"},
      "-=1"
    )
  }, []);

  return (
    <section ref={sectionRef} className='bg-black text-white py-12 px-[6vw] 2xl:px-[16vw] w-full flex flex-col lg:flex-row min-h-[90vh] justify-center gap-y-16 lg:gap-y-0 '>
      <div ref={aboutIntroRef} className='w-full lg:w-1/3 flex flex-col gap-y-4 lg:gap-y-8 justify-center lg:justify-start '>
        <div className='text-2xl lg:text-4xl font-semibold text-center lg:text-start'> Hey! I&apos;m <span className='text-lime-400'> Asim. </span> </div>
        <div className='text-sm lg:text-2xl font-medium tracking-wide text-center lg:text-start w-2/3 lg:w-full mx-auto'>
          I&apos;m a Sydney-based Frontend Developer who loves designing and developing impactful brands as well as
          building innovative applications with strong emphasis on <span className='text-lime-400 text-2xl'> Product Experience.</span>
        </div>
      </div>
      
      <div ref={aboutImageRef} className='w-full lg:w-1/3 flex justify-center items-center '>
        <div className='h-fit w-fit flex items-center justify-center'>
        <Image
          className='aspect-square w-3/7 lg:w-3/4 object-cover border-2 border-white rounded-2xl'
          src='/aboutHero.jpeg'
          alt='Main Image of Hero Section'
          width={400}
          height={400}
        />
        </div>
      </div>
      
      <div ref={aboutOutroRef} className='w-full lg:w-1/3 flex flex-col items-center  lg:justify-end lg:items-end '>
        <div className='text-2xl font-extrabold text-end mb-2'> Want to know more? </div>
        <div className='text-xl flex gap-x-4 items-center'> Scroll Below <FaMouse className='text-lime-400' /> </div>
      </div>
    </section>
  );
}

export default AboutSection;
