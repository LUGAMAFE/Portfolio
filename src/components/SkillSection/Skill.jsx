import PropTypes from 'prop-types';
import style from '../../style/sass/style.module.scss';
import NeumorphicElement from '../neumorphic/NeumorphicElement';
export const Skill = ({ skillText }) => {
  return (
    <div className={style.skill}>
      <p>{skillText}</p>
      <div className={style.chargeBarContainer}>
        <div className={style.chargeBar}>
          <NeumorphicElement
            neumorphicOptions={{
              form: 'pressed',
              size: '102',
              intensity: '0.76',
              lightSource: 1,
              distance: '9',
              blur: 18,
            }}
            className={style.nullPart}
          ></NeumorphicElement>
          <div className={style.neonPart}>
            <svg>
              <image href="../../assets/images/Rectangle-neon.svg" />
            </svg>
          </div>
        </div>
      </div>
      <div className={style.circleContainer}>
        <div className={style.svgContainer}>
          <svg>
            <image href="../../assets/images/Circulito-Carga.svg" />
          </svg>
        </div>
      </div>
    </div>
  );
};
Skill.propTypes = {
  skillText: PropTypes.string,
};
