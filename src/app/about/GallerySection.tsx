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
    <section className='py-[12vh] px-[6vw] 2xl:px-[16vw] min-h-screen bg-slate-900 rounded-2xl'>
        <div className='columns-1 sm:columns-2 lg:columns-3 py-10 lg:py-20 gap-4'>
            {medias.map((media, index)=>(
                <div key={index} className='mb-4 break-inside-avoid'>
                    <Image alt={`Image ${index}`} width={300} height={300} src={media}
                           className='w-full object-cover rounded-xl'/>
                </div>
            ) )}
        </div>
    </section>
  )
}

export default GallerySection