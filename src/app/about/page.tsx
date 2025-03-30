import Navbar from '@/components/partials/Navbar'
import React from 'react'
import AboutSection from './AboutSection'
import QualificationSection from './QualificationSection'

const page = () => {
  return (
    <>
        <Navbar />
        <AboutSection />
        <QualificationSection/>
    </>
  )
}

export default page