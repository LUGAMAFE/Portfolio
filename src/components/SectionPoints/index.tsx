import { SectionPoint } from './SectionPoint';
import style from './sectionPoints.module.scss';
export const SectionPoints = ({ array, onClick, onMouseOver, handleMouseLeave }) => {


    return (
        <div className={style.SectionPoints} >
            {array.map((classPointer, index) => (
                <SectionPoint onClick={() => onClick(`seccion${index}`, `svgWhite${index}`, `svgPink${index}`)} onMouseOver={() => onMouseOver(`svgWhite${index}`)} key={classPointer} classPointer={classPointer} index={index} handleMouseLeave={() => handleMouseLeave(`svgWhite${index}`)} />
            ))}
        </div>
    )
}
