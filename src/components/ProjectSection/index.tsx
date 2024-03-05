import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useContext, useRef } from 'react';
import { FormShape } from '../../types/neomorphism';
import { NeumorphicStylesContext } from '../context/NeumorphicStylesContext';
import NeumorphicElement from '../neumorphic/NeomorphicElement/NeumorphicElement';
import { CarrouselProjects } from './CarrouselProjects';
import { DescriptionProject } from './DescriptionProject';
import style from './projects.module.scss';
gsap.registerPlugin(ScrollTrigger)
const ProyectSection = () => {
  const { isChecked } = useContext(NeumorphicStylesContext);
  const container = useRef();
  useGSAP(() => {
    const slider = document.querySelector(".container")
    const panels = gsap.utils.toArray(".panel");
    gsap.to(panels, {
      xPercent: -100 * (panels.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: container.current,
        pin: true,
        scrub: 1,
        end: () => "+=" + slider.offsetWidth
      }
    });

  }, { scope: container });

  return (
    <div id="seccion2" ref={container} className="container">
      <NeumorphicElement
        id="seccion1"
        neumorphicOptions={{
          form: FormShape.Pressed,
          size: isChecked ? 44 : 500,
          intensity: isChecked ? 0.47 : 0.65,
          lightSource: 3,
          distance: isChecked ? 4 : 45,
          blur: isChecked ? 39 : 90,
        }}
        style={{ paddingTop: "90px" }}
      >

        <div id={"project0"} className="description panel" >
          <div className={style.Projects_projectsContainer}>
            <CarrouselProjects />
            <DescriptionProject />
          </div>
        </div>
      </NeumorphicElement>
      <NeumorphicElement
        id="seccion1"
        neumorphicOptions={{
          form: FormShape.Pressed,
          size: isChecked ? 44 : 500,
          intensity: isChecked ? 0.47 : 0.65,
          lightSource: 3,
          distance: isChecked ? 4 : 45,
          blur: isChecked ? 39 : 90,
        }}
        style={{ paddingTop: "90px" }}
      >

        <div id={"project0"} className="description panel" >
          <div className={style.Projects_projectsContainer}>
            <CarrouselProjects />
            <DescriptionProject />
          </div>
        </div>
      </NeumorphicElement>
      <NeumorphicElement
        id="seccion1"
        neumorphicOptions={{
          form: FormShape.Pressed,
          size: isChecked ? 44 : 500,
          intensity: isChecked ? 0.47 : 0.65,
          lightSource: 3,
          distance: isChecked ? 4 : 45,
          blur: isChecked ? 39 : 90,
        }}
        style={{ paddingTop: "90px" }}
      >

        <div id={"project0"} className="description panel" >
          <div className={style.Projects_projectsContainer}>
            <CarrouselProjects />
            <DescriptionProject />
          </div>
        </div>
      </NeumorphicElement>
      <NeumorphicElement
        id="seccion1"
        neumorphicOptions={{
          form: FormShape.Pressed,
          size: isChecked ? 44 : 500,
          intensity: isChecked ? 0.47 : 0.65,
          lightSource: 3,
          distance: isChecked ? 4 : 45,
          blur: isChecked ? 39 : 90,
        }}
        style={{ paddingTop: "90px" }}
      >

        <div id={"project0"} className="description panel" >
          <div className={style.Projects_projectsContainer}>
            <CarrouselProjects />
            <DescriptionProject />
          </div>
        </div>
      </NeumorphicElement>

    </div>


  );
};

export default ProyectSection;
