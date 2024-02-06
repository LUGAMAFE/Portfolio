
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
  const timelineClicked = useRef({});
  const lastClicked = useRef(null);
  const arrays = {
    array1: [
      '#seccion0', '#seccion1', '#seccion2', '#seccion3', '#seccion4', '#seccion5', '#seccion6'
    ],
    array2: [
      '#seccion7', '#seccion8', '#seccion9', '#seccion10', '#seccio11', '#seccion12', '#seccion13'
    ]
  }

  const componente = useRef();
  const smoother = useRef();

  const { contextSafe } = useGSAP(() => {
    smoother.current = ScrollSmoother.create({
      smooth: 2,
      effects: true,
    });
  }, { scope: componente, revertOnUpdate: true });

  const handleClick = contextSafe((seccionId, svgWhiteId, svgPinkId) => {
    const svgWhiteElement = document.getElementById(svgWhiteId);
    const svgPinkElement = document.getElementById(svgPinkId);
    const sectionElement = document.getElementById(seccionId);
    if (svgWhiteElement) {
      if (!timelineClicked.current[svgWhiteId]) {
        timelineClicked.current[svgWhiteId] = gsap.timeline({ paused: true });
        timelineClicked.current[svgWhiteId].to(svgWhiteElement, { r: 10, ease: "elastic.inOut" });
        timelineClicked.current[svgWhiteId].to(svgPinkElement, { r: 5, ease: "elastic.inOut" });

      }
      timelineClicked.current[svgWhiteId].play(0.5);
    }
    if (seccionId) {
      smoother.current.scrollTo(sectionElement, true, 'top top');
    };
    if (lastClicked.current && lastClicked.current !== svgWhiteId) {


      timelineClicked.current[lastClicked.current].reverse();
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
    const svgElement = document.getElementById(svgId);
    if (svgElement && timelines.current[svgId]) {
      timelines.current[svgId].reverse(10);
    }
  });


  return (
    <StyleProvider>
      <div ref={componente}>

        <SectionPoints onClick={handleClick} onMouseOver={handleMouseOver} array={arrays} handleMouseLeave={handleMouseLeave} />
        <Navbar />
        <div id="smooth-wrapper"  >
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
      </div>
    </StyleProvider>
  );
};
