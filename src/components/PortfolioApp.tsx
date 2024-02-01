
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollSmoother from 'gsap-trial/ScrollSmoother';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef } from 'react';
import BrandsSection from './BrandsSection';
import CodeSection from './CodeSection';
import ContactSection from './ContactSection';
import IntroSection from './IntroSection';
import Navbar from './Navbar';
import PresentationSection from './PresentationSection';
import ProjectSection from './ProjectSection';
import { SectionPoints } from './SectionPoints';
import SkillSection from './SkillSection';
import { StyleProvider } from './context/NeumorphicStylesContext';
gsap.registerPlugin(ScrollSmoother, ScrollTrigger);
export const PortfolioApp = () => {
  const timelines = useRef({});

  const lastClicked = useRef(null);
  const array = [
    '#seccion0', '#seccion1', '#seccion2', '#seccion3', '#seccion4', '#seccion5', '#seccion6'
  ];
  const componente = useRef();
  const smoother = useRef();

  const { contextSafe } = useGSAP(() => {
    smoother.current = ScrollSmoother.create({
      smooth: 2, // seconds it takes to "catch up" to native scroll position
      effects: true, // look for data-speed and data-lag attributes on elements and animate accordingly
    });
  }, { scope: componente });

  const handleClick = contextSafe((seccionId, svgWhiteId, svgPinkId) => {
    const svgWhiteElement = document.getElementById(svgWhiteId);
    const svgPinkElement = document.getElementById(svgPinkId);
    const sectionElement = document.getElementById(seccionId);
    if (svgWhiteElement) {
      timelines.current[svgWhiteId].to(svgWhiteElement, { r: 10, ease: "elastic.inOut" });
      timelines.current[svgWhiteId].to(svgPinkElement, { r: 5, ease: "elastic.inOut" });
    }
    if (seccionId) {
      smoother.current.scrollTo(sectionElement, true, 'top top');
    };
    if (lastClicked.current && lastClicked.current !== svgWhiteId) {
      const lastSvgElement = document.getElementById(lastClicked.current);
      if (lastSvgElement && timelines.current[lastClicked.current]) {
        timelines.current[lastClicked.current].reverse(0.5);
      }
    }
    lastClicked.current = svgWhiteId;
  })


  const handleMouseOver = contextSafe((svgId) => {
    const svgElement = document.getElementById(svgId);
    if (svgElement) {
      if (!timelines.current[svgId]) {
        timelines.current[svgId] = gsap.timeline({ paused: true });
        timelines.current[svgId].to(svgElement, { r: 5, ease: "elastic.inOut", duration: 0.5 });
      }
      timelines.current[svgId].play(0.5);
    }
  });

  const handleMouseLeave = contextSafe((svgId) => {
    if (lastClicked.current === svgId) return;
    console.log(svgId, lastClicked.current)
    const svgElement = document.getElementById(svgId);
    if (svgElement && timelines.current[svgId]) {
      timelines.current[svgId].reverse(0.5);
    }


  });




  return (
    <StyleProvider>
      <SectionPoints onClick={handleClick} onMouseOver={handleMouseOver} array={array} handleMouseLeave={handleMouseLeave} />
      <Navbar />
      <div id="smooth-wrapper" ref={componente} >
        <div id="smooth-content" >
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
