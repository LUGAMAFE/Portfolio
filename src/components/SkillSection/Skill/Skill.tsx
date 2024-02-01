import { useGSAP } from '@gsap/react';
import { Ranger, useRanger } from '@tanstack/react-ranger';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React, { useRef } from 'react';
import { FormShape } from '../../../types/neomorphism';
import NeumorphicElement from '../../neumorphic/NeomorphicElement/NeumorphicElement';
import styleskills from '../skills.module.scss';
import style from './skill.module.scss';
interface SkillProps {
  skillText: string;
}
gsap.registerPlugin(ScrollTrigger);
export const Skill = ({ skillText, endValue }: SkillProps) => {
  const rangerRef = React.useRef<HTMLDivElement>(null);
  const [values, setValues] = React.useState<ReadonlyArray<number>>([0]);
  const sliderValue = useRef({ value: 0 });
  useGSAP(() => {
    const trigger = ScrollTrigger.create({
      markers: true,
      trigger: `.${styleskills.Skills}`,
      start: "25% 60%",
      end: "+=1750",
    });
    gsap.to(sliderValue.current, {
      scrollTrigger: trigger,
      value: endValue, // Valor final
      duration: 2, // Duración de la animación
      ease: "power1.inOut", // Suavizado
      onUpdate: () => setValues([sliderValue.current.value]), // Actualiza el estado en cada paso
    });
  }, []);

  const rangerInstance = useRanger<HTMLDivElement>({
    getRangerElement: () => rangerRef.current,
    values,
    min: 0,
    max: 100,
    stepSize: 1,
    onChange: (instance: Ranger<HTMLDivElement>) => setValues(instance.sortedValues),
  });
  const trackStyle = {
    top: "10%",
    left: "0.5%",
    height: '12px',
    width: '100%',
    position: 'absolute',
    userSelect: 'none',
    background: 'transparent',
    borderRadius: '10px',
  };

  const segmentStyle = (index, left, width) => ({
    position: 'absolute',
    borderRadius: '11px',
    background:
      index === 0
        ? 'var(--Lava-Linear-Horizontal, linear-gradient(90deg, #FF6161 0.16%, #F6D 99.81%))'
        : 'transparent',
    left: `${left}%`,
    height: '100%',
    width: `${width}%`
  });

  const handleStyle = (left, active) => ({
    position: 'absolute',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    width: '50px',
    height: '50px',
    outline: 'none',
    borderRadius: '100%',
    background: "url('../../../../assets/images/Circulito-Carga.svg')",
    border: 'none',
    left: `${left}%`,
    zIndex: active ? 1 : 0,
    appearance: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '0.7rem',
    whiteSpace: 'nowrap',
    color: 'white',
    fontWeight: active ? 'bold' : 'normal',

  });


  return (
    <div className={style.Skill}>
      <p className={style.Skill_skillText}>{skillText}</p>
      <div className={style.Skill_chargeBarContainer}>
        <div className={style.Skill_chargeBar}>
          <NeumorphicElement
            neumorphicOptions={{
              form: FormShape.Pressed,
              size: 102,
              intensity: 0.76,
              lightSource: 1,
              distance: 9,
              blur: 18,
            }}
            className={style.Skill_nullPart}
          ></NeumorphicElement>
          <div ref={rangerRef} style={trackStyle}>
            {rangerInstance.getSteps().map(({ left, width }, i) => (
              <div key={i} style={segmentStyle(i, left, width)} />
            ))}
            {rangerInstance
              .handles()
              .map(
                (
                  {
                    value,
                    onKeyDownHandler,
                    onMouseDownHandler,
                    onTouchStart,
                    isActive,
                  },
                  i,
                ) => (
                  <button
                    key={i}
                    onKeyDown={onKeyDownHandler}
                    onMouseDown={onMouseDownHandler}
                    onTouchStart={onTouchStart}
                    role="slider"
                    aria-valuemin={rangerInstance.options.min}
                    aria-valuemax={rangerInstance.options.max}
                    aria-valuenow={value}
                    style={handleStyle(rangerInstance.getPercentageForValue(value), isActive)}
                  >

                  </button>
                ),
              )}
          </div>

        </div>
      </div>

    </div>
  );
};
