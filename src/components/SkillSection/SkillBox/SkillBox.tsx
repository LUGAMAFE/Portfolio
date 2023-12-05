import iconSkill from '../../../../assets/images/Icono.svg';
import NeumorphicElement from '../../neumorphic/NeomorphicElement/NeumorphicElement';

import { Skill } from '../Skill';
import style from './skillBox.module.scss';

interface SkillBoxProps {
  text: string;
}
export const SkillBox = ({ text }: SkillBoxProps) => {
  const array = ['Java', 'Java', 'Java', 'Java', 'Java', 'Java', 'Java', 'Java', 'Java'];
  return (
    <div className={style.skillTopic}>
      <NeumorphicElement
        neumorphicOptions={{
          form: 'convex',
          size: 500,
          intensity: 0.65,
          lightSource: 1,
          distance: 45,
          blur: 90,
        }}
        className={style.section}
      >
        <NeumorphicElement
          neumorphicOptions={{
            form: 'convex',
            size: 102,
            intensity: 0.76,
            lightSource: 1,
            distance: 9,
            blur: 18,
          }}
          className={style.title}
        >
          <div className={style.svgContainer}>
            <img src={iconSkill} alt="Skill icon" />
          </div>
          <p>{text}</p>
        </NeumorphicElement>
        <div className={style.skillsInputs}>
          {array.map((skillText, index) => (
            <Skill key={index} skillText={skillText} />
          ))}
        </div>
      </NeumorphicElement>
    </div>
  );
};
