import HeroSection from '@/components/modules/landing/HeroSection'
import ToolsSection from '@/app/about/ToolsSection'
import React from 'react'
import AboutSection from './about/AboutSection'
import GallerySection from './about/GallerySection'
import QualificationSection from './experience/QualificationSection'
const page = () => {
  return (
    <>
    <HeroSection />
    <ToolsSection />
    <QualificationSection/>
    <AboutSection />
    <GallerySection/>
    </>
  )
}

export default page