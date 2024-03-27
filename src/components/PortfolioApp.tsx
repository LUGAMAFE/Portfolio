
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollSmoother from 'gsap-trial/ScrollSmoother';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef } from 'react';
import BrandsSection from './BrandsSection';
import CodeSection from './CodeSection';
import ContactSection from './ContactSection';
import CustomCursor from './CustomCursor';
import IntroSection from './IntroSection';
import Navbar from './Navbar';
import PresentationSection from './PresentationSection';
import ProjectSection from './ProjectSection';
import { SectionPoints } from './SectionPoints';
import { SideBarMenu } from './SidebarMenu';
import SkillSection from './SkillSection';
import { StyleProvider } from './context/NeumorphicStylesContext';
gsap.registerPlugin(ScrollSmoother, ScrollTrigger);
export const PortfolioApp = () => {
  ScrollTrigger.normalizeScroll(true)
  const timelines = useRef({});
  const timelineClicked = useRef({});
  const lastClicked = useRef(null);


  const componente = useRef();
  const smoother = useRef();

  const { contextSafe } = useGSAP(() => {
    smoother.current = ScrollSmoother.create({
      smooth: 2,
      effects: true,
      normalizeScroll: true,
      ignoreMobileResize: true,

      //preventDefault: true,
      //ease: 'power4.out',
      //smoothTouch: 0.1,

    });
    document.querySelectorAll(".section").forEach((anchor, index) => {
      const trigger = ScrollTrigger.create({
        trigger: anchor, // Este es el elemento que activará el ScrollTrigger
        start: "50% 80%",
        // markers: true,
        onEnter: () => {
          handleClick(``, `svgWhiteClick${index}`, `svgPink${index}`);
        },

      });
      const triggerEnterback = ScrollTrigger.create({
        trigger: anchor, // Este es el elemento que activará el ScrollTrigger
        start: "top 1%",
        // markers: true,

        onEnterBack: () => {
          handleClick(``, `svgWhiteClick${index}`, `svgPink${index}`);
        },
      });
    });


  }, { scope: componente });

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
  const handleClickProjects = contextSafe((seccionId, svgWhiteId, svgPinkId) => {
    const svgWhiteElement = document.getElementById(svgWhiteId);
    const svgPinkElement = document.getElementById(svgPinkId);
    const sectionElement = document.getElementById(seccionId);
    if (svgWhiteElement) {
      if (!timelineClicked.current[svgWhiteId]) {
        timelineClicked.current[svgWhiteId] = gsap.timeline({ paused: true });
        timelineClicked.current[svgWhiteId].to(svgWhiteElement, { r: 5, ease: "elastic.inOut" });
        timelineClicked.current[svgWhiteId].to(svgPinkElement, { r: 2.5, ease: "elastic.inOut" });

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
  const handleMouseOverProjects = contextSafe((svgId) => {
    const svgElement = document.getElementById(svgId);
    if (svgElement) {
      if (!timelines.current[svgId]) {
        timelines.current[svgId] = gsap.timeline({ paused: true });
        timelines.current[svgId].to(svgElement, { r: 2.5, ease: "elastic.inOut", duration: 0.5 });
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
        <CustomCursor />
        <SectionPoints onClick={handleClick} onMouseOver={handleMouseOver} handleMouseLeave={handleMouseLeave} handleClickProjects={handleClickProjects} handleMouseOverProjects={handleMouseOverProjects} />
        <Navbar />
        <SideBarMenu />
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
