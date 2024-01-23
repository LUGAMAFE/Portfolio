
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollSmoother from 'gsap-trial/ScrollSmoother';
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
gsap.registerPlugin(ScrollSmoother);
export const PortfolioApp = () => {
  const timelines = useRef({});

  const array = [
    '#seccion0', '#seccion1', '#seccion2', '#seccion3', '#seccion4', '#seccion5', '#seccion6'
  ];
  const componente = useRef();
  const smoother = useRef();

  const handleClick = (seccionId, svgWhiteId, svgPinkId) => {
    const svgWhiteElement = document.getElementById(svgWhiteId);
    const svgPinkElement = document.getElementById(svgPinkId);
    const sectionElement = document.getElementById(seccionId);
    if (svgWhiteElement) {
      timelines.current[svgWhiteId].to(svgWhiteElement, { r: 10, ease: "elastic", duration: 1, fill: "white" });
      timelines.current[svgWhiteId].to(svgPinkElement, { r: 5, ease: "elastic", duration: 1 });
      timelines.current[svgWhiteId] = gsap.timeline({ paused: true });
    }
    if (seccionId) {
      smoother.current.scrollTo(sectionElement, true, 'top top');
    };

  }

  const handleMouseOver = (svgId) => {
    const svgElement = document.getElementById(svgId);
    if (svgElement) {
      // Si no existe una línea de tiempo para este elemento, crearla
      if (!timelines.current[svgId]) {
        timelines.current[svgId] = gsap.timeline({ paused: true });
        timelines.current[svgId].to(svgElement, { r: 5, ease: "elastic", duration: 1 });
      }
      // Reproducir la animación
      timelines.current[svgId].play();
    }
  };

  const handleMouseLeave = (svgId) => {
    const svgElement = document.getElementById(svgId);
    if (svgElement && timelines.current[svgId]) {
      timelines.current[svgId].reverse();
    }
  };

  useGSAP(() => {

    smoother.current = ScrollSmoother.create({
      smooth: 2, // seconds it takes to "catch up" to native scroll position
      effects: true, // look for data-speed and data-lag attributes on elements and animate accordingly
    });
  }, { scope: componente });


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
