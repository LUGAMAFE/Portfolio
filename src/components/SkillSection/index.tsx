import NeumorphicElement from '../neumorphic/NeumorphicElement';
import { SkillBox } from './SkillBox';
import style from './skills.module.scss';

const SkillSection = () => {
  const array = ['Habilidades de programacion', 'Habilidades extra'];
  return (
    <NeumorphicElement
      neumorphicOptions={{
        form: 'pressed',
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
