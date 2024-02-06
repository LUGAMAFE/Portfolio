import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef } from 'react';
import { SectionPoint } from './SectionPoint';
import { SectionPointProjects } from './SectionPoint/SectionPointProjects';
import styles from './SectionPoint/sectionPoint.module.scss';
import style from './sectionPoints.module.scss';
export const SectionPoints = ({ array, onClick, onMouseOver, handleMouseLeave }) => {
    const containerProjects = useRef();
    gsap.registerPlugin(ScrollTrigger)
    const section = document.querySelector("#seccion2")
    useGSAP(() => {
        const panels = gsap.utils.toArray(`.${styles.SectionPoint___projects}`);
        panels.forEach((panel, index) => {
            const anim = gsap.to(panel, {
                x: -50 * (index + 1),
                ease: "power1",
                delay: index * 0.7,
                paused: true
            });
            ScrollTrigger.create({
                start: "12% top",
                end: "55% bottom",
                trigger: section,
                markers: true,
                onEnter: () => anim.play(), // Reproducir cuando el elemento entra
                onLeave: () => anim.reverse(), //
                onEnterBack: () => anim.play(),
                onLeaveBack: () => anim.reverse(),
            });
        });
    }, { scope: containerProjects });



    return (
        <div ref={containerProjects} >
            <div className={style.SectionPoints} >
                {array.array1.map((classPointer, index) => (
                    <SectionPoint onClick={() => onClick(`seccion${index}`, `svgWhite${index}`, `svgPink${index}`)} onMouseOver={() => onMouseOver(`svgWhite${index}`)} key={classPointer} classPointer={classPointer} index={index} handleMouseLeave={() => handleMouseLeave(`svgWhite${index}`)} />
                ))}
            </div>
            <div className={style.SectionPoints___projects} >
                {array.array2.map((classPointer, index) => (
                    <SectionPointProjects onClick={() => onClick(`seccion${index + 7}`, `svgWhites${index}`, `svgPinks${index}`)} onMouseOver={() => onMouseOver(`svgWhites${index}`)} key={classPointer} classPointer={classPointer} index={index} handleMouseLeave={() => handleMouseLeave(`svgWhites${index}`)} />
                ))}
            </div>

        </div>
    )
}
