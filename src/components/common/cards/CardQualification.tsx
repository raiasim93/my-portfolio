import React from 'react';
import { FaUniversity } from 'react-icons/fa';

interface CardQualificationProps{
    school: string,
    degree: string,
    date: string,
    id: string,
    ref: React.Ref<HTMLDivElement>;
}

const CardQualification  = React.forwardRef<HTMLDivElement, CardQualificationProps> (({school, degree, date, id}, ref) => {
    return (
        <div ref={ref}
             key={id} className='w-[80%] lg:w-[40%] border-4 rounded-2xl p-4 min-h-[288px] border-l-4 border-l-lime-500 
                                border-t-lime-500 flex flex-col gap-y-4 justify-center items-center
                                 transition-al hover:scale-110 duration-300
                                 hover:bg-zinc-800 cursor-pointer'>
            <div className='text-2xl text-center font-semibold flex flex-col gap-y-8 lg:text-3xl  items-center gap-x-4'>
                <FaUniversity className='text-2xl lg:text-3xl' />
                <span> {degree} </span>
            </div>
            <div className='text-gray-500 text-lg lg:text-xl text-center'>
                {school}
            </div>
            <div>
                {date}
            </div>
        </div>
    )
}
);
CardQualification.displayName = 'CardQualification'
export default CardQualification