"use client";
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const medias = [
    "/rect1.jpg",
    "/wide1.jpg",
    "/rect2.jpg",
    "/wide2.jpg",
    "/rect3.jpg",
    "/rect4.jpg",
    "/wide3.jpg",
    "/wide4.jpg",
]

const GallerySection = () => {
    const sectionRef = useRef(null);
    const titleRef = useRef(null);
    const bentoRef = useRef(null);
   useEffect(()=>{
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 80%",
                end: "center center",
                toggleActions: "play none none reset",
                scrub: 1,
                markers: false,
            }
        });
        tl.fromTo(
            titleRef.current,
            {xPercent: 100, opacity: 0},
            {xPercent: 0, opacity: 1, duration: 1, ease: "power1.out"}
        );
        tl.fromTo(
            bentoRef.current,
            {y:500, opacity: 0, scale: 1.5},
            {y:0, opacity:1, scale:1, duration:1, ease:"power1.out"},
            "-=0.8"
        )
   },[]);
    return (
        <section ref={sectionRef} className='py-[12vh] px-[6vw] 2xl:px-[16vw]  bg-zinc-900 '>
            <div ref={titleRef} className='w-full flex justify-center flex-col gap-y-4 lg:gap-y-8 lg:justify-between mb-8 lg:mb-16'>
                <div className='w-3/4 lg:w-1/2 text-3xl lg:text-5xl font-extrabold '> Running on Passion - whether it is building Apps or  Football</div>
                <div className='w-full text-md lg:text-xl font-semibold'> My life in Bento and Pics </div>
            </div>
            <div ref={bentoRef} className='w-full py-4 lg:py-12 min-h-screen  gap-5
                             grid grid-cols-2
                              lg:grid-cols-12 lg:grid-rows-6 
                              md:grid-cols-6  md:grid-rows-12
                        '>
                {medias.map((media, index) => (
                    <div key={index} className={`relative
                                ${index === 0 ? "lg:col-span-3 lg:row-span-4 lg:order-1 md:col-span-2 md:row-span-6 md:order-1" : ""}
                                ${index === 1 ? "lg:col-span-3 lg:row-span-2 lg:order-2 md:col-span-2 md:row-span-3 md:order-2 " : ""}
                                ${index === 2 ? "lg:col-span-3 lg:row-span-4 lg:order-3 md:col-span-2 md:row-span-6 md:order-3" : ""}
                                ${index === 3 ? "lg:col-span-3 lg:row-span-2 lg:order-4 md:col-span-2 md:row-span-3 md:order-4" : ""}
                                ${index === 4 ? "lg:col-span-3 lg:row-span-4 lg:order-5 md:col-span-2 md:row-span-6 md:order-5" : ""}
                                ${index === 5 ? "lg:col-span-3 lg:row-span-4 lg:order-6 md:col-span-2 md:row-span-6 md:order-6" : ""}
                                ${index === 6 ? "lg:col-span-3 lg:row-span-2 lg:order-7 md:col-span-2 md:row-span-3 md:order-7" : ""}
                                ${index === 7 ? "lg:col-span-3 lg:row-span-2 lg:order-8 md:col-span-2 md:row-span-3 md:order-8" : ""}
                             
                            `}>
                        <Image className='rounded-2xl object-cover duration-200 transition-all 
                                         cursor-pointer hover:shadow-2xl hover:shadow-zinc-400 hover:scale-105
                                         hover:border-white hover:border-4' fill alt={`image ${index}`} src={media} />
                    </div>
                ))}
                {/* <div className='lg:col-span-3 lg:row-span-4 lg:order-1 md:col-span-2 md:row-span-6 md:order-1 relative'>
                    <Image className='rounded-2xl object-cover duration-200 transition-all  cursor-pointer hover:shadow-2xl hover:shadow-lime-400 hover:scale-105 hover:border-white hover:border-4' fill alt='image' src='/rect1.jpg' />
                </div>
                <div className='lg:col-span-3 lg:row-span-2 lg:order-2 md:col-span-2 md:row-span-3 md:order-2 relative'>
                    <Image className='rounded-2xl object-cover duration-200 transition-all  cursor-pointer hover:shadow-2xl hover:shadow-lime-400 hover:scale-105 hover:border-white hover:border-2' fill alt='image' src='/wide1.jpg' />
                </div>
                <div className='lg:col-span-3 lg:row-span-4 lg:order-3 md:col-span-2 md:row-span-6 md:order-3 relative'>
                    <Image className='rounded-2xl object-cover duration-200 transition-all  cursor-pointer hover:shadow-2xl hover:shadow-lime-400 hover:scale-105 hover:border-white hover:border-2' fill alt='image' src='/rect2.jpg' />
                </div>
                <div className='lg:col-span-3 lg:row-span-2 lg:order-4 md:col-span-2 md:row-span-3 md:order-4 relative'>
                    <Image className='rounded-2xl object-cover duration-200 transition-all  cursor-pointer hover:shadow-2xl hover:shadow-lime-400 hover:scale-105 hover:border-white hover:border-2' fill alt='image' src='/wide2.jpg' />
                </div>
                <div className='lg:col-span-3 lg:row-span-4 lg:order-5 md:col-span-2 md:row-span-6 md:order-5 relative'>
                    <Image className='rounded-2xl object-cover duration-200 transition-all  cursor-pointer hover:shadow-2xl hover:shadow-lime-400 hover:scale-105 hover:border-white hover:border-2' fill alt='image' src='/rect3.jpg' />
                </div>
                <div className='lg:col-span-3 lg:row-span-4 lg:order-6 md:col-span-2 md:row-span-6 md:order-6 relative'>
                    <Image className='rounded-2xl object-cover duration-200 transition-all  cursor-pointer hover:shadow-2xl hover:shadow-lime-400 hover:scale-105 hover:border-white hover:border-2' fill alt='image' src='/rect4.jpg' />
                </div>
                <div className='lg:col-span-3 lg:row-span-2 lg:order-7 md:col-span-2 md:row-span-3 md:order-7 relative'>
                    <Image className='rounded-2xl object-cover duration-200 transition-all  cursor-pointer hover:shadow-2xl hover:shadow-lime-400 hover:scale-105 hover:border-white hover:border-2' fill alt='image' src='/wide3.jpg' />
                </div>
                <div className='lg:col-span-3 lg:row-span-2 lg:order-8 md:col-span-2 md:row-span-3 md:order-8 relative'>
                    <Image className='rounded-2xl object-cover duration-200 transition-all  cursor-pointer hover:shadow-2xl hover:shadow-lime-400 hover:scale-105 hover:border-white hover:border-2' fill alt='image' src='/wide4.jpg' />
                </div> */}

            </div>
        </section>
    )
}

export default GallerySection