import { useContext } from 'react';
import iconSkill from '../../../../assets/images/Icono.svg';
import { FormShape } from '../../../types/neomorphism';
import NeumorphicElement from '../../neumorphic/NeomorphicElement/NeumorphicElement';
import { Skill } from '../Skill';

import { NeumorphicStylesContext } from '../../context/NeumorphicStylesContext';
import style from './skillBox.module.scss';

interface SkillBoxProps {
  text: string;
}
export const SkillBox = ({ text }: SkillBoxProps) => {
  const skillsData = [
    { name: 'Java', endValue: 30 },
    { name: 'Python', endValue: 50 },
    { name: 'Java', endValue: 60 },
    { name: 'Python', endValue: 90 },
    { name: 'Java', endValue: 40 },
    { name: 'Python', endValue: 75 },
    { name: 'Java', endValue: 20 },
    { name: 'Python', endValue: 60 },
    // ... otros skills con sus respectivos valores
  ];
  const { isChecked } = useContext(NeumorphicStylesContext);
  return (

    <div className={style.SkillBox}>
      <NeumorphicElement
        neumorphicOptions={{
          form: isChecked ? FormShape.Level : FormShape.Convex,
          size: isChecked ? 85 : 500,
          intensity: isChecked ? 0.23 : 0.65,
          lightSource: 1,
          distance: isChecked ? 14 : 45,
          blur: isChecked ? 28 : 90,
        }}
        className={style.SkillBox_section}
      >
        <NeumorphicElement
          neumorphicOptions={{

            form: isChecked ? FormShape.Level : FormShape.Convex,
            size: isChecked ? 36 : 102,
            intensity: isChecked ? 0.39 : 0.76,
            lightSource: 1,
            distance: isChecked ? 8 : 9,
            blur: isChecked ? 16 : 18,
          }}
          className={style.SkillBox_titleContainer}
        >
          <img src={iconSkill} alt="Skill icon" />
          <p className={style.SkillBox_title}>{text}</p>
        </NeumorphicElement>
        <div className={style.SkillBox_skillsInputs}>
          {skillsData.map((skill, index) => (
            <Skill key={index} skillText={skill.name} endValue={skill.endValue} />
          ))}
        </div>
      </NeumorphicElement>
    </div>
  );
};
