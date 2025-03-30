import React from 'react';
import { FaUniversity } from 'react-icons/fa';

interface CardQualificationProps{
    school: string,
    degree: string,
    date: string,
    id: string
}

const CardQualification: React.FC <CardQualificationProps>  = ({school, degree, date, id}) => {
    return (
        <div key={id} className='w-1/2 border-4 rounded-2xl p-8 min-h-[288px] border-l-4 border-l-lime-500 
    border-t-lime-500
    flex flex-col gap-y-4 justify-center items-center transition-all transform duration-300
    hover:scale-95 hover:bg-zinc-900 cursor-pointer'>
            <div className='text-2xl text-center font-semibold flex flex-col gap-y-8 md:text-3xl  items-center gap-x-4'>
                <FaUniversity className='text-2xl md:text-3xl' />
                <span> {school} </span>
            </div>
            <div className='text-gray-500 text-lg md:text-xl text-center'>
                {degree}
            </div>
            <div>
                {date}
            </div>
        </div>
    )
}

export default CardQualification