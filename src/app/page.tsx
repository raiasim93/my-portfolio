import HeroSection from '@/components/modules/landing/HeroSection'
import ToolsSection from '@/components/modules/landing/ToolsSection'
import Navbar from '@/components/partials/Navbar'
import React from 'react'
import AboutSection from './about/AboutSection'
import QualificationSection from './about/QualificationSection'
import GallerySection from './about/GallerySection'
const page = () => {
  return (
    <>
    <Navbar />
    <HeroSection />
    <ToolsSection />
    <AboutSection />
    <QualificationSection/>
    <GallerySection/>
    </>
  )
}

export default page