import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef } from 'react';
import { CarrouselProjects } from './CarrouselProjects';
import { DescriptionProject } from './DescriptionProject';
import style from './projects.module.scss';
gsap.registerPlugin(ScrollTrigger)
const ProyectSection = () => {

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
    <div ref={container} id="seccion2">
      <div className="container" >
        <div id={"project0"} className="description panel" >
          <div className={style.Projects_projectsContainer}>
            <CarrouselProjects />
            <DescriptionProject />
          </div>
        </div>
        <div id={"project1"} className="panel red">
          <div className={style.Projects_projectsContainer}>
            <CarrouselProjects />
            <DescriptionProject />
          </div>
        </div>
        <div id={"project2"} className="panel orange">
          <div className={style.Projects_projectsContainer}>
            <CarrouselProjects />
            <DescriptionProject />
          </div>
        </div>
        <div id={"project3"} className="panel purple">
          <div className={style.Projects_projectsContainer}>
            <CarrouselProjects />
            <DescriptionProject />
          </div>
        </div>
      </div>
    </div>


  );
};

export default ProyectSection;
