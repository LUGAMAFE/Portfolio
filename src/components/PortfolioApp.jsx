import React from 'react'
import { Navbar } from './Navbar'
import { IntroSection } from './IntroSection'
import { ContactSection } from './ContactSection'
import { CodeSection } from './CodeSection'
import { BrandsSection } from './BrandsSection'
import { SkillSection } from './SkillSection'
import { ProyectSection } from './ProyectSection'
import { MisionSection } from './MisionSection'


export const PortfolioApp = () => {
  return (
    <>
          <Navbar/>
          <IntroSection/>
          <MisionSection/>
          <ProyectSection/>
          <SkillSection/>
          <BrandsSection/>
          <CodeSection/>
          <ContactSection/>
    </>
  )
}
