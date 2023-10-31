import PropTypes from 'prop-types';
import iconSkill from '../../../assets/images/Icono.svg';
import style from '../../style/sass/skills.module.scss';
import NeumorphicElement from '../neumorphic/NeumorphicElement';
import { Skill } from './Skill';
export const SkillBox = ({ texto }) => {
  const array = ['Java', 'Java', 'Java', 'Java', 'Java', 'Java', 'Java', 'Java', 'Java'];
  return (
    <div className={style.programingSkills}>
      <div className={style.skillTopic}>
        <NeumorphicElement
          neumorphicOptions={{
            form: 'convex',
            size: '500',
            intensity: '0.65',
            lightSource: 1,
            distance: '45',
            blur: 90,
          }}
          className={style.section}
        >
          <NeumorphicElement
            neumorphicOptions={{
              form: 'convex',
              size: '102',
              intensity: '0.76',
              lightSource: 1,
              distance: '9',
              blur: 18,
            }}
            className={style.title}
          >
            <div className={style.svgContainer}>
              <img src={iconSkill} alt="Skill icon" />
            </div>
            <p>{texto}</p>
          </NeumorphicElement>
          <div className={style.skillsInputs}>
            {array.map((elemento, index) => (
              <Skill key={index} skillText={elemento} />
            ))}
          </div>
        </NeumorphicElement>
      </div>
    </div>
  );
};
SkillBox.propTypes = {
  texto: PropTypes.string,
};
