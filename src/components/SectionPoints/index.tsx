import { SectionPoint } from './SectionPoint';
import style from './sectionPoints.module.scss';
export const SectionPoints = ({ array, onClick, onMouseOver }) => {


    return (
        <div className={style.SectionPoints} >
            {array.map((classPointer, index) => (
                <SectionPoint onClick={onClick} onMouseOver={onMouseOver} key={classPointer} classPointer={classPointer} index={index} />
            ))}
        </div>
    )
}
