import React from 'react';
import { FaUniversity } from 'react-icons/fa';
import CardQualification from '@/components/common/cards/CardQualification';
import qualificationData from '@/components/common/data/qualificationData';

const QualificationSection = () => {
  return (
    <section className='py-24 px-[12vw] 2xl:[16vw] flex flex-col gap-y-16 justify-center items-center w-full min-h-screen '>
      <div className='text-2xl md:text-5xl'>
         Qualifications over the years
      </div>
      <div className='flex flex-col gap-y-8 justify-center items-center h-full w-full'>
        {qualificationData.map((item, index)=> (
            <CardQualification
              key={index} id={item.id} school= {item.school} degree={item.degree} date={item.date} 
            />
        ))}
      </div>
    </section>
  )
}

export default QualificationSection