import React from 'react'
import { Navbar } from './components/Navbar'
import { IntroSection } from './components/IntroSection'
import { ContactSection } from './components/ContactSection'
import { CodeSection } from './components/CodeSection'
import { BrandsSection } from './components/BrandsSection'
import { SkillSection } from './components/SkillSection'
import { ProyectSection } from './components/ProyectSection'
import { MisionSection } from './components/MisionSection'


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
