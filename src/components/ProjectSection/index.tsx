import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollToPlugin from 'gsap/ScrollToPlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useContext, useRef } from 'react';
import { NeumorphicStylesContext } from '../context/NeumorphicStylesContext';
import NeumorphicElement from '../neumorphic/NeomorphicElement/NeumorphicElement';
import { CarrouselProjects } from './CarrouselProjects';
import { DescriptionProject } from './DescriptionProject';

import { FormShape } from '../../types/neomorphism';
import './horizontalScroll.scss';
import style from './projects.module.scss';

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

    document.querySelectorAll(".anchor").forEach((anchor, index) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        gsap.to(window, {
          scrollTo: {
            y: 1838 + (index * 2284),
            autoKill: false
          },
          duration: 1
        });

      });
    });
  }, { scope: container });

  return (
    <div ref={container} >
      <div className="container " id="seccion2">

        <div id="panel-0" className="description panel blue">
          <NeumorphicElement
            neumorphicOptions={{
              form: FormShape.Pressed,
              size: isChecked ? 44 : 500,
              intensity: isChecked ? 0.47 : 0.65,
              lightSource: 3,
              distance: isChecked ? 4 : 45,
              blur: isChecked ? 39 : 90,
            }}
            className={style.Projects_projectContainer}
          >
            <div className={style.Projects_projectsContainer}>
              <CarrouselProjects />
              <DescriptionProject />
            </div>

          </NeumorphicElement>
        </div>
        <section id="panel-1" className="panel red">
          <NeumorphicElement

            neumorphicOptions={{
              form: FormShape.Pressed,
              size: isChecked ? 44 : 500,
              intensity: isChecked ? 0.47 : 0.65,
              lightSource: 3,
              distance: isChecked ? 4 : 45,
              blur: isChecked ? 39 : 90,
            }}
            className={style.Projects_projectContainer}
          >

            <div className={style.Projects_projectsContainer}>
              <CarrouselProjects />
              <DescriptionProject />
            </div>

          </NeumorphicElement>
        </section>

        <section id="panel-2" className="panel orange">
          <NeumorphicElement

            neumorphicOptions={{
              form: FormShape.Pressed,
              size: isChecked ? 44 : 500,
              intensity: isChecked ? 0.47 : 0.65,
              lightSource: 3,
              distance: isChecked ? 4 : 45,
              blur: isChecked ? 39 : 90,
            }}
            className={style.Projects_projectContainer}

          >


            <div className={style.Projects_projectsContainer}>
              <CarrouselProjects />
              <DescriptionProject />
            </div>

          </NeumorphicElement>
        </section>

        <section id="panel-3" className="panel purple">
          <NeumorphicElement

            neumorphicOptions={{
              form: FormShape.Pressed,
              size: isChecked ? 44 : 500,
              intensity: isChecked ? 0.47 : 0.65,
              lightSource: 3,
              distance: isChecked ? 4 : 45,
              blur: isChecked ? 39 : 90,
            }}
            className={style.Projects_projectContainer}
          >


            <div className={style.Projects_projectsContainer}>
              <CarrouselProjects />
              <DescriptionProject />
            </div>

          </NeumorphicElement>
        </section>
        <section id="panel-4" className="panel green">
          <NeumorphicElement

            neumorphicOptions={{
              form: FormShape.Pressed,
              size: isChecked ? 44 : 500,
              intensity: isChecked ? 0.47 : 0.65,
              lightSource: 3,
              distance: isChecked ? 4 : 45,
              blur: isChecked ? 39 : 90,
            }}
            className={style.Projects_projectContainer}
          >


            <div className={style.Projects_projectsContainer}>
              <CarrouselProjects />
              <DescriptionProject />
            </div>

          </NeumorphicElement>
        </section>

        <section id="panel-5" className="panel gray">
          <NeumorphicElement

            neumorphicOptions={{
              form: FormShape.Pressed,
              size: isChecked ? 44 : 500,
              intensity: isChecked ? 0.47 : 0.65,
              lightSource: 3,
              distance: isChecked ? 4 : 45,
              blur: isChecked ? 39 : 90,
            }}
            className={style.Projects_projectContainer}
          >


            <div className={style.Projects_projectsContainer}>
              <CarrouselProjects />
              <DescriptionProject />
            </div>

          </NeumorphicElement>
        </section>

      </div>
    </div >
  );
};

export default ProyectSection;
