import Navbar from '@/components/partials/Navbar'
import React from 'react'
import AboutSection from './AboutSection'
import QualificationSection from './QualificationSection';
import GallerySection from './GallerySection';

const page = () => {
  return (
    <>
        <Navbar />
        <AboutSection />
        <QualificationSection/>
        <GallerySection/>
    </>
  )
}

export default page