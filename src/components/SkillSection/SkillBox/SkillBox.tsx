import iconSkill from '../../../../assets/images/Icono.svg';
import { FormShape } from '../../../types/neomorphism';
import NeumorphicElement from '../../neumorphic/NeomorphicElement/NeumorphicElement';
import { ReactRange } from '../React-range';

import style from './skillBox.module.scss';

interface SkillBoxProps {
  text: string;
}
export const SkillBox = ({ text }: SkillBoxProps) => {
  const array = ['Java', 'Java', 'Java', 'Java', 'Java', 'Java', 'Java', 'Java'];
  return (
    <div className={style.SkillBox}>
      <NeumorphicElement
        neumorphicOptions={{
          form: FormShape.Convex,
          size: 500,
          intensity: 0.65,
          lightSource: 1,
          distance: 45,
          blur: 90,
        }}
        className={style.SkillBox_section}
      >
        <NeumorphicElement
          neumorphicOptions={{
            form: FormShape.Convex,
            size: 102,
            intensity: 0.76,
            lightSource: 1,
            distance: 9,
            blur: 18,
          }}
          className={style.SkillBox_titleContainer}
        >
          <img src={iconSkill} alt="Skill icon" />
          <p className={style.SkillBox_title}>{text}</p>
        </NeumorphicElement>
        <div className={style.SkillBox_skillsInputs}>
          {array.map((skillText, index) => (
            <ReactRange key={index} />
          ))}
        </div>
      </NeumorphicElement>
    </div>
  );
};
