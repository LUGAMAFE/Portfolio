import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef } from 'react';
import { SectionPoint } from './SectionPoint';
import { SectionPointProjects } from './SectionPoint/SectionPointProjects';
import styles from './SectionPoint/sectionPoint.module.scss';
import style from './sectionPoints.module.scss';
export const SectionPoints = ({ array, onClick, onMouseOver, handleMouseLeave }) => {
    gsap.registerPlugin(ScrollTrigger)
    const section = document.querySelector("#seccion2")
    console.log(section)
    const container = useRef();
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
                end: "+=1750",
                trigger: section,
                markers: true,
                onEnter: () => anim.play(), // Reproducir cuando el elemento entra
                onLeave: () => anim.reverse(), //
            });
        });
    }, { scope: container });



    return (
        <div ref={container} >
            <div className={style.SectionPoints} >
                {array.map((classPointer, index) => (
                    <SectionPoint onClick={() => onClick(`seccion${index}`, `svgWhite${index}`, `svgPink${index}`)} onMouseOver={() => onMouseOver(`svgWhite${index}`)} key={classPointer} classPointer={classPointer} index={index} handleMouseLeave={() => handleMouseLeave(`svgWhite${index}`)} />
                ))}
            </div>
            <div className={style.SectionPoints___projects} >
                {array.map((classPointer, index) => (
                    <SectionPointProjects onClick={() => onClick(`seccion${index}`, `svgWhite${index}`, `svgPink${index}`)} onMouseOver={() => onMouseOver(`svgWhite${index}`)} key={classPointer} classPointer={classPointer} index={index} handleMouseLeave={() => handleMouseLeave(`svgWhite${index}`)} />
                ))}
            </div>

        </div>
    )
}
