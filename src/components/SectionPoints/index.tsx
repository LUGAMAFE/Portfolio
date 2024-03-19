import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef } from 'react';
import { SectionPoint } from './SectionPoint';
import { SectionPointProjects } from './SectionPoint/SectionPointProjects';

import style from './sectionPoints.module.scss';
export const SectionPoints = ({ onClick, onMouseOver, handleMouseLeave, handleClickProjects, handleMouseOverProjects }) => {
    const containerProjects = useRef();
    gsap.registerPlugin(ScrollTrigger)
    const section = document.querySelector("#seccion2")
    useGSAP(() => {


        const si = document.querySelector(".si")
        const anim2 = gsap.to(si, {
            height: "225px",
            ease: "power4.inOut",
            duration: 1.2,
            paused: true,
            delay: 1
        });


        ScrollTrigger.create({
            start: "10% center",
            end: "63% center",
            trigger: section,
            // markers: true,

            onEnter: () => anim2.play(),
            onLeave: () => anim2.reverse(), //
            onEnterBack: () => anim2.play(),
            onLeaveBack: () => anim2.reverse(),
        });



    }, { scope: containerProjects });



    return (
        <div ref={containerProjects} >
            <div className={style.SectionPoints} >

                <SectionPoint onClick={() => onClick(`seccion${0}`, `svgWhiteClick${0}`, `svgPink${0}`)} onMouseOver={() => onMouseOver(`svgWhite${0}`)} classPointer={"#seccion0"} index={0} handleMouseLeave={() => handleMouseLeave(`svgWhite${0}`)} />
                <SectionPoint onClick={() => onClick(`seccion${1}`, `svgWhiteClick${1}`, `svgPink${1}`)} onMouseOver={() => onMouseOver(`svgWhite${1}`)} classPointer={"#seccion1"} index={1} handleMouseLeave={() => handleMouseLeave(`svgWhite${1}`)} />
                <SectionPoint onClick={() => onClick(`seccion${2}`, `svgWhiteClick${2}`, `svgPink${2}`)} onMouseOver={() => onMouseOver(`svgWhite${2}`)} classPointer={"#seccion2"} index={2} handleMouseLeave={() => handleMouseLeave(`svgWhite${2}`)} />
                <div className="si" style={{ width: "30px", height: "0px", display: "flex", alignItems: "center", justifyContent: "space-between", flexDirection: "column", overflow: "hidden", position: 'relative', willChange: "transform" }}>
                    <SectionPointProjects classname="anchor" onClick={() => handleClickProjects(`project${0}`, `svgWhiteClickProjects${0}`, `svgPinkProjects${0}`)} onMouseOver={() => handleMouseOverProjects(`svgWhiteProjects${0}`)} classPointer={"#project0"} index={0} handleMouseLeave={() => handleMouseLeave(`svgWhiteProjects${0}`)} />
                    <SectionPointProjects classname="anchor" onClick={() => handleClickProjects(`project${1}`, `svgWhiteClickProjects${1}`, `svgPinkProjects${1}`)} onMouseOver={() => handleMouseOverProjects(`svgWhiteProjects${1}`)} classPointer={"#project1"} index={1} handleMouseLeave={() => handleMouseLeave(`svgWhiteProjects${1}`)} />
                    <SectionPointProjects classname="anchor" onClick={() => handleClickProjects(`project${2}`, `svgWhiteClickProjects${2}`, `svgPinkProjects${2}`)} onMouseOver={() => handleMouseOverProjects(`svgWhiteProjects${2}`)} classPointer={"#project2"} index={2} handleMouseLeave={() => handleMouseLeave(`svgWhiteProjects${2}`)} />
                    <SectionPointProjects classname="anchor" onClick={() => handleClickProjects(`project${3}`, `svgWhiteClickProjects${3}`, `svgPinkProjects${3}`)} onMouseOver={() => handleMouseOverProjects(`svgWhiteProjects${3}`)} classPointer={"#project3"} index={3} handleMouseLeave={() => handleMouseLeave(`svgWhiteProjects${3}`)} />
                    <SectionPointProjects classname="anchor" onClick={() => handleClickProjects(`project${4}`, `svgWhiteClickProjects${4}`, `svgPinkProjects${4}`)} onMouseOver={() => handleMouseOverProjects(`svgWhiteProjects${4}`)} classPointer={"#project4"} index={4} handleMouseLeave={() => handleMouseLeave(`svgWhiteProjects${4}`)} />
                    <SectionPointProjects classname="anchor" onClick={() => handleClickProjects(`project${5}`, `svgWhiteClickProjects${5}`, `svgPinkProjects${5}`)} onMouseOver={() => handleMouseOverProjects(`svgWhiteProjects${5}`)} classPointer={"#project5"} index={5} handleMouseLeave={() => handleMouseLeave(`svgWhiteProjects${5}`)} />
                </div>
                <SectionPoint onClick={() => onClick(`seccion${3}`, `svgWhiteClick${3}`, `svgPink${3}`)} onMouseOver={() => onMouseOver(`svgWhite${3}`)} classPointer={"#seccion3"} index={3} handleMouseLeave={() => handleMouseLeave(`svgWhite${3}`)} />
                <SectionPoint onClick={() => onClick(`seccion${4}`, `svgWhiteClick${4}`, `svgPink${4}`)} onMouseOver={() => onMouseOver(`svgWhite${4}`)} classPointer={"#seccion4"} index={4} handleMouseLeave={() => handleMouseLeave(`svgWhite${4}`)} />
                <SectionPoint onClick={() => onClick(`seccion${5}`, `svgWhiteClick${5}`, `svgPink${5}`)} onMouseOver={() => onMouseOver(`svgWhite${5}`)} classPointer={"#seccion5"} index={5} handleMouseLeave={() => handleMouseLeave(`svgWhite${5}`)} />
                <SectionPoint onClick={() => onClick(`seccion${6}`, `svgWhiteClick${6}`, `svgPink${6}`)} onMouseOver={() => onMouseOver(`svgWhite${6}`)} classPointer={"#seccion6"} index={6} handleMouseLeave={() => handleMouseLeave(`svgWhite${6}`)} />
            </div>
            {/* <div className={style.SectionPoints___projects} >
                {array.array2.map((classPointer, index) => (
                    <SectionPointProjects onClick={() => onClick(`project${index}`, `svgWhiteClickProjects${index}`, `svgPinkProjects${index}`)} onMouseOver={() => onMouseOver(`svgWhiteProjects${index}`)} key={classPointer} classPointer={classPointer} index={index} handleMouseLeave={() => handleMouseLeave(`svgWhiteProjects${index}`)} />
                ))}
            </div>
            <div className={style.SectionPoints_second} >
                {array.array3.map((classPointer, index) => (
                    <SectionPoint onClick={() => onClick(`seccion${index + 3}`, `svgWhiteClick${index + 3}`, `svgPink${index + 3}`)} onMouseOver={() => onMouseOver(`svgWhite${index + 3}`)} key={classPointer} classPointer={classPointer} index={index + 3} handleMouseLeave={() => handleMouseLeave(`svgWhite${index + 3}`)} />
                ))}
            </div> */}

        </div >
    )
}
