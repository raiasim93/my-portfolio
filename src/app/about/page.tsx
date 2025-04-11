import Navbar from '@/components/partials/Navbar'
import React from 'react'
import AboutSection from './AboutSection'
import GallerySection from './GallerySection';

const page = () => {
  return (
    <>
        <Navbar />
        <AboutSection />
        <GallerySection/>
    </>
  )
}

export default page