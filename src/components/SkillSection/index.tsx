
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap-trial/ScrollTrigger';
import { useRef } from 'react';
import { FormShape } from '../../types/neomorphism';
import NeumorphicElement from '../neumorphic/NeomorphicElement/NeumorphicElement';
import { SkillBox } from './SkillBox';
import style from './skills.module.scss';
gsap.registerPlugin(ScrollTrigger);

const SkillSection = () => {

  const components = useRef();
  const array = ['Habilidades de programacion', 'Habilidades extra'];
  useGSAP(() => {
    ScrollTrigger.create({
      trigger: `.${style.Skills}`,
      pin: ".box-c",
      start: "20% 60%",
      end: "+=1750",
      markers: true
    });
    ScrollTrigger.create({
      trigger: ".box-b",
      pin: true,
      start: "49% center",
      end: "+=1750",
      markers: true
    });

  }, { scope: components });
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
      id="seccion4"
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
