
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
  const tl = gsap.timeline({

    duration: 0.5,
  });
  const array = [
    '#seccion1', '#seccion2', '#seccion3', '#seccion4', '#seccion5', '#seccion6', '#seccion7'
  ];
  const componente = useRef();
  const smoother = useRef();
  const handleClick = (event) => {
    tl.to("#hello0", { r: 10, ease: "elastic", duration: 1, fill: "red" })
    smoother.current.scrollTo(event.currentTarget.name, true, 'top top');
  };
  const handleMouseOver = (event) => {

    tl.to("#hello0", { r: 5, ease: "elastic", duration: 1 })
  };
  // const scrollTo = (event) => {
  //   // smoother.current.scrollTo('.box-c', false, 'center center');

  // };
  useGSAP(() => {

    smoother.current = ScrollSmoother.create({
      smooth: 2, // seconds it takes to "catch up" to native scroll position
      effects: true, // look for data-speed and data-lag attributes on elements and animate accordingly
    });
  }, { scope: componente });


  return (
    <StyleProvider>
      <SectionPoints onClick={handleClick} onMouseOver={handleMouseOver} array={array} />
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
