import HeroSection from '@/components/modules/landing/HeroSection'
import ToolsSection from '@/components/modules/landing/ToolsSection'
import Navbar from '@/components/partials/Navbar'
import React from 'react'
import AboutSection from './about/AboutSection'
import GallerySection from './about/GallerySection'
import QualificationSection from './experience/QualificationSection'
import FooterSection from '@/components/partials/FooterSection'
const page = () => {
  return (
    <>
    <Navbar />
    <HeroSection />
    <ToolsSection />
    <QualificationSection/>
    <AboutSection />
    <GallerySection/>
    <FooterSection/>
    </>
  )
}

export default page