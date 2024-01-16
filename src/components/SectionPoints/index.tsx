import { SectionPoint } from './SectionPoint';
import style from './sectionPoints.module.scss';
export const SectionPoints = ({ onClickSave }) => {
    const hello = [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10
    ];

    return (
        <div className={style.SectionPoints} >
            {hello.map((lol) => (
                <SectionPoint onclicksave={onClickSave} key={lol} />
            ))}
        </div>
    )
}
