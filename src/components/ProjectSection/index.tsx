import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollToPlugin from 'gsap/ScrollToPlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useContext, useRef } from 'react';
import { NeumorphicStylesContext } from '../context/NeumorphicStylesContext';

gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

const ProyectSection = () => {
  const { isChecked } = useContext(NeumorphicStylesContext);
  const container = useRef();
  useGSAP(() => {
    const sections = gsap.utils.toArray(".panel");

    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: ".container",
        pin: true,
        scrub: 1,
        //snap: 1 / (sections.length - 1),
        // base vertical scrolling on how wide the container is so it feels more natural.
        end: () => "+=" + document.querySelector(".container").offsetWidth
      }
    });


    const panelsSection = document.querySelector(".container");

    document.querySelectorAll(".anchor").forEach(anchor => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const targetElem = document.querySelector(e.target.getAttribute("href"));
        const containerOffset = (panelsSection.offsetTop + targetElem.offsetLeft) * (document.querySelector(".container").offsetWidth / (document.querySelector(".container").offsetWidth - window.innerWidth));

        gsap.to(window, {
          scrollTo: {
            y: containerOffset,
            autoKill: false
          },
          duration: 1
        });

      });
    });
  }, { scope: container });

  return (
    <div ref={container} >
      <header id="masthead" className="site-header" role="banner" >
        <nav className="anchor-nav" role="navigation">

          <a href="#panel-0" className="anchor">Home</a>
          <a href="#panel-1" className="anchor">Panel 1</a>
          <a href="#panel-2" className="anchor">Panel 2</a>
          <a href="#panel-3" className="anchor">Panel 3</a>
          <a href="#panel-4" className="anchor">Panel 4</a>
          <a href="#panel-5" className="anchor">Panel 5</a>

        </nav>
      </header>

      <div className="container" >

        <div id="panel-0" className="description panel blue">
          <div><h1>Horizontal snapping sections (simple)</h1>
            <p>Scroll vertically to scrub the horizontal animation. It also dynamically snaps to the sections in an organic way based on the velocity. The snapping occurs based on the natural ending position after momentum is applied, not a simplistic "wherever it is when the user stops".</p>
            <div className="scroll-down">Scroll down<div className="arrow"></div></div>
          </div>
        </div>


        <section id="panel-1" className="panel red">
          ONE
        </section>
        <section id="panel-2" className="panel orange">
          TWO
        </section>
        <section id="panel-3" className="panel purple">
          THREE
        </section>
        <section id="panel-4" className="panel green">
          FOUR
        </section>
        <section id="panel-5" className="panel gray">
          FIVE
        </section>

      </div>
    </div >
  );
};

export default ProyectSection;
