import neomorphicCircleSVG from '../../../../assets/images/Circulito-Carga.svg';
import neonRectangleSVG from '../../../../assets/images/Rectangle-neon.svg';
import NeumorphicElement from '../../neumorphic/NeomorphicElement/NeumorphicElement';
import style from './skill.module.scss';
interface SkillProps {
  skillText: string;
}
export const Skill = ({ skillText }: SkillProps) => {
  return (
    <div className={style.Skill}>
      <p className={style.Skill_skillText}>{skillText}</p>
      <div className={style.Skill_chargeBarContainer}>
        <div className={style.Skill_chargeBar}>
          <NeumorphicElement
            neumorphicOptions={{
              form: 'pressed',
              size: 102,
              intensity: 0.76,
              lightSource: 1,
              distance: 9,
              blur: 18,
            }}
            className={style.Skill_nullPart}
          ></NeumorphicElement>
          <div className={style.Skill_neonPart}>
            <img src={neonRectangleSVG} alt="Neon part of input" />
          </div>
        </div>
      </div>
      <div className={style.Skill_circleContainer}>
        <div className={style.Skill_svgContainer}>
          <img src={neomorphicCircleSVG} alt="circle part of input" />
        </div>
      </div>
    </div>
  );
};
