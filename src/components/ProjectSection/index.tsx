import gsap from 'gsap-trial';
import ScrollTrigger from 'gsap-trial/ScrollTrigger';
import { useLayoutEffect, useRef } from 'react';
import { CarrouselProjects } from './CarrouselProjects';
import { DescriptionProject } from './DescriptionProject';
import style from './projects.module.scss';

const ProyectSection = () => {
  const component = useRef();
  const slider = useRef();
  gsap.registerPlugin(ScrollTrigger);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const panels = gsap.utils.toArray(".panel");
      gsap.to(panels, {
        xPercent: -100 * (panels.length - 1),
        ease: "none",
        scrollTrigger: {
          markers: true,
          trigger: slider.current,
          pin: true,
          scrub: 1,
          snap: 1 / (panels.length - 1),
          end: () => "+=" + slider.current.offsetWidth
        }
      });
    });
    return () => ctx.revert();
  });

  return (


    <div ref={slider} className="container">
      <div className="description panel ">
        <div className={style.Projects_projectsContainer}>
          <CarrouselProjects />
          <DescriptionProject />
        </div>
      </div>
      <div className="panel red">
        <div className={style.Projects_projectsContainer}>
          <CarrouselProjects />
          <DescriptionProject />
        </div>
      </div>
      <div className="panel orange">
        <div className={style.Projects_projectsContainer}>
          <CarrouselProjects />
          <DescriptionProject />
        </div>
      </div>
      <div className="panel purple">
        <div className={style.Projects_projectsContainer}>
          <CarrouselProjects />
          <DescriptionProject />
        </div>
      </div>
    </div>


  );
};

export default ProyectSection;
