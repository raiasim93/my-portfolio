import HeroSection from '@/components/modules/landing/HeroSection'
import ToolsSection from '@/components/modules/landing/ToolsSection'
import Navbar from '@/components/partials/Navbar'
import React from 'react'
import AboutSection from './about/AboutSection'
const page = () => {
  return (
    <>
    <Navbar />
    <HeroSection />
    <ToolsSection />
    <AboutSection />
    </>
  )
}

export default page