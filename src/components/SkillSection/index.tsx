
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap-trial/ScrollTrigger';
import { useContext, useRef } from 'react';
import { FormShape } from '../../types/neomorphism';
import { NeumorphicStylesContext } from '../context/NeumorphicStylesContext';
import NeumorphicElement from '../neumorphic/NeomorphicElement/NeumorphicElement';
import { SkillBox } from './SkillBox';
import style from './skills.module.scss';
gsap.registerPlugin(ScrollTrigger);

const SkillSection = () => {
  const { isChecked } = useContext(NeumorphicStylesContext);
  const components = useRef();
  const array = ['Habilidades de programacion', 'Habilidades extra'];
  useGSAP(() => {
    ScrollTrigger.create({
      trigger: `.${style.Skills}`,
      pin: ".box-c",
      start: "17% 60%",
      end: "+=1750",
      // markers: true
    });
    ScrollTrigger.create({
      trigger: ".box-b",
      pin: true,
      start: "45% center",
      end: "+=1750",
      // markers: true
    });

  }, { scope: components });
  return (
    <NeumorphicElement
      neumorphicOptions={{
        form: FormShape.Pressed,
        size: isChecked ? 44 : 500,
        intensity: isChecked ? 0.47 : 0.65,
        lightSource: 3,
        distance: isChecked ? 4 : 45,
        blur: isChecked ? 39 : 90,
      }}
      className={`${style.Skills} section`}
      id="seccion3"
    >
      <div ref={components}>
        <div className='box box-c' >
          <div className={style.Skills_skillsContainer}>
            {array.map((text, index) => (
              <SkillBox key={index} text={text} />
            ))}
          </div>
        </div>
      </div>
    </NeumorphicElement>
  );
};

export default SkillSection;
