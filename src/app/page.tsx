import HeroSection from '@/components/modules/landing/HeroSection'
import ToolsSection from '@/components/modules/landing/ToolsSection'
import Navbar from '@/components/partials/Navbar'
import React from 'react'

const page = () => {
  return (
    <>
    <Navbar />
    <HeroSection />
    <ToolsSection />
    </>
  )
}

export default page