
import { FormShape } from '../../types/neomorphism';
import NeumorphicElement from '../neumorphic/NeomorphicElement/NeumorphicElement';
import { SkillBox } from './SkillBox';
import style from './skills.module.scss';

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
      className={style.Skills}
    >
      <div className='box-c' >
        <div className={style.Skills_skillsContainer}>
          {array.map((text, index) => (
            <SkillBox key={index} text={text} />
          ))}
        </div>
      </div>
    </NeumorphicElement>
  );
};

export default SkillSection;
