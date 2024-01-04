
import gsap from 'gsap-trial';
import ScrollSmoother from 'gsap-trial/ScrollSmoother';
import ScrollTrigger from 'gsap-trial/ScrollTrigger';
import { useLayoutEffect, useRef } from 'react';
import BrandsSection from './BrandsSection';
import CodeSection from './CodeSection';
import ContactSection from './ContactSection';
import IntroSection from './IntroSection';
import Navbar from './Navbar';
import PresentationSection from './PresentationSection';
import ProjectSection from './ProjectSection';
import SkillSection from './SkillSection';
import { StyleProvider } from './context/NeumorphicStylesContext';
export const PortfolioApp = () => {

  const componente = useRef();
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

  useLayoutEffect(() => {
    const ctx2 = gsap.context(() => {

      ScrollTrigger.normalizeScroll(true)

      // create the smooth scroller FIRST!
      const smoother = ScrollSmoother.create({
        smooth: 2,
        effects: true,
        normalizeScroll: true
      });

      ScrollTrigger.create({
        trigger: ".box-c",
        pin: true,
        start: "10% center",
        end: "+=1750",
        markers: true
      });
      ScrollTrigger.create({
        trigger: ".box-b",
        pin: true,
        start: "45% center",
        end: "+=1750",
        markers: true
      });
    }, componente);
    return () => ctx2.revert();
  });

  return (
    <StyleProvider>
      <Navbar />
      <div id="smooth-wrapper" ref={componente}>
        <div id="smooth-content" ref={componente}>
          <IntroSection />
          <PresentationSection />
          <ProjectSection />
          <SkillSection />
          <BrandsSection />
          <CodeSection />
          <ContactSection />
        </div>
      </div>
    </StyleProvider>
  );
};
