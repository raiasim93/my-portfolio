import ToolsSection from '@/components/modules/landing/ToolsSection'
import Navbar from '@/components/partials/Navbar'
import React from 'react'
import QualificationSection from './QualificationSection'

const page = () => {
  return (
   <>
    <Navbar/>
    <ToolsSection/>
    <QualificationSection/>
   </>
  )
}

export default page