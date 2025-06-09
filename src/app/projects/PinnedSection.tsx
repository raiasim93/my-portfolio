"use client"
import React, {useEffect, useRef} from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap-trial/ScrollTrigger';
const PinnedSection = () => {

  return (
    <section className='py-8 px-[6vw] 2xl:px-[16vw] min-h-[100vh] flex flex-col gap-y-60 justify-center items-center'>
        <div className="slides">
            <div  className='w-2/3 h-[300px] bg-red-500 flex justify-center items-center text-6xl'>
                    1
            </div>
            <div className='w-2/3 h-[300px] bg-yellow-500 flex justify-center items-center text-6xl'>
                    2
            </div>
            <div className='w-2/3 h-[300px] bg-green-500 flex justify-center items-center text-6xl'>
                    3
            </div>
            <div className='w-2/3 h-[300px] bg-blue-500 flex justify-center items-center text-6xl'>
                    4
            </div>
        </div>
       
    </section>
  )
}

export default PinnedSection