import React from 'react';
import Image from 'next/image';
const medias = [
    "/rect1.jpg",
    "/wide1.jpg",
    "/wide2.jpg",
    "/rect2.jpg",
    "/rect3.jpg",
    "/rect4.jpg",
    "/rect5.jpg",
    "/rect6.jpg",
    "/wide3.jpg",
    "/wide4.jpg",
    "/rect7.jpg",
    "/rect8.jpg"
]

const GallerySection = () => {
  return (
    <section className='py-[12vh] px-[6vw] 2xl:px-[16vw]  bg-zinc-900 rounded-2xl'>
        <div className='w-full flex justify-center flex-col gap-y-4 lg:gap-y-8 lg:justify-between mb-8 lg:mb-16'>
            <div className='w-3/4 lg:w-1/2 text-3xl lg:text-6xl font-extrabold '> Running on Passion - whether it is Apps or Football</div>
            <div className='w-full text-xl lg:text-3xl font-semibold'> My life in Bento and Pics </div>
        </div>
        <div className='w-full py-4 lg:py-12 min-h-screen grid grid-cols-12 grid-rows-6 gap-4'> 
            <div className='col-span-3 row-span-4  relative'> 
                <Image className='w-full rounded-2xl object-cover' fill alt='image' src='/rect1.jpg' />
            </div>
            <div className='col-span-3 row-span-2 relative'> 
                <Image className='w-full rounded-2xl object-cover' fill alt='image' src='/wide1.jpg' />
             </div>
            <div className='col-span-3 row-span-4 relative'> 
                <Image className='w-full rounded-2xl object-cover' fill alt='image' src='/rect2.jpg' />
             </div>
            <div className='col-span-3 row-span-2 relative'> 
                <Image className='w-full rounded-2xl object-cover' fill alt='image' src='/wide2.jpg' />
             </div>
            <div className='col-span-3 row-span-4 relative'> 
                <Image className='w-full rounded-2xl object-cover' fill alt='image' src='/rect3.jpg' />
             </div>
            <div className='col-span-3 row-span-4 relative'> 
                <Image className='w-full rounded-2xl object-cover' fill alt='image' src='/rect4.jpg' />
             </div>
            <div className='col-span-3 row-span-2 relative'> 
                <Image className='w-full rounded-2xl object-cover' fill alt='image' src='/wide3.jpg' />
             </div>
            <div className='col-span-3 row-span-2 relative'> 
                <Image className='w-full rounded-2xl object-cover' fill alt='image' src='/rect8.jpg' />
             </div>
         
        </div>
    </section>
  )
}

export default GallerySection