import React from 'react'

const ExperienceSection = () => {
    return (
        <section className='w-full py-8 px-[12vw] 2xl:px-[16vw] flex flex-col gap-y-8'>
            {/* Section Title */}
            <div className='flex justify-start text-2xl md:text-4xl'>
                Qualifications
            </div>


            <div className="relative flex flex-col gap-y-6 pl-6 md:pl-10 before:absolute before:top-0 before:left-2 before:bottom-0 before:w-[2px] before:bg-gray-400">


                <div className="relative pl-6 md:pl-10">

                    <div className="absolute left-[-8px] top-2 w-4 h-4 bg-lime-600 rounded-full border-2 border-white"></div>

                    <div className='text-2xl md:text-3xl'>
                        Bachelor of Information Technology
                    </div>
                    <div className='text-lg md:text-xl text-lime-600'>
                        Federation University of Australia
                    </div>
                    <div className='text-gray-400 text-lg italic'>
                        2020-2023
                    </div>
                </div>


                <div className="relative pl-6 md:pl-10">

                    <div className="absolute left-[-8px] top-2 w-4 h-4 bg-lime-600 rounded-full border-2 border-white"></div>

                    <div className='text-2xl md:text-3xl'>
                        Master of Software Engineering
                    </div>
                    <div className='text-lg md:text-xl text-lime-600'>
                        University of Sydney
                    </div>
                    <div className='text-gray-400 text-lg italic'>
                        2023-2025
                    </div>
                </div>

            </div>
        </section>

    )
}

export default ExperienceSection