import style from '../../style/sass/skills.module.scss';
import { FormShape } from '../../types/neomorphism';
import NeumorphicElement from '../neumorphic/NeumorphicElement';
import { SkillBox } from './SkillBox';

const SkillSection = () => {
  const array = ['Habilidades de programacion', 'Habilidades extra'];
  return (
    <NeumorphicElement
      neumorphicOptions={{
        form: FormShape.Pressed,
        size: 500,
        intensity: 0.65,
        lightSource: 3,
        distance: 45,
        blur: 90,
      }}
      className={style.skills}
    >
      <div
        style={{
          width: '100%',
          height: '90px',
        }}
      ></div>
      <div className={style.skillsContainer}>
        {array.map((text, index) => (
          <SkillBox key={index} text={text} />
        ))}
      </div>
    </NeumorphicElement>
  );
};

export default SkillSection;
