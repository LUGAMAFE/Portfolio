import gsap from 'gsap-trial';
import SplitText from 'gsap-trial/SplitText';
import { useEffect, useRef } from 'react';
import manIllustrationSVG from '../../../assets/images/Ilustracion-Diseño.svg';
import neomorphicSVG from '../../../assets/images/Vector-12.svg';
import { FormShape } from '../../types/neomorphism';
import NeumorphicElement from '../neumorphic/NeomorphicElement/NeumorphicElement';
import { ImageComparator } from './ImageComparator';
import style from './intro.module.scss';
const IntroSection = () => {
  const splitTextElement = useRef();
  const splitTextElement2 = useRef();


  useEffect(() => {
    const tl = gsap.timeline({

      repeat: -1,

    });
    gsap.registerPlugin(SplitText);

    const mysplitText = new SplitText(splitTextElement.current);
    const chars = mysplitText.lines;
    gsap.from(chars, {

      yPercent: 130,
      stagger: 0.05,
      ease: "linear",
      duration: 0.5,
      delay: 0.7
    });
    const mysplitText2 = new SplitText(splitTextElement2.current);
    const chars2 = mysplitText2.lines;



    tl.from(chars2, {
      transformOrigin: "50% top",
      rotationX: 90,
      y: -100,
      stagger: 1,
      duration: 1,
      ease: 'linear', delay: 2

    })
      .to(chars2, {
        transformOrigin: "50% top",
        rotationX: -90,
        y: 100,
        stagger: 1,
        // scale: 0,
        duration: 1,
        ease: 'linear', delay: 2
      })

  }, []);

  return (
    <NeumorphicElement
      id="seccion1"
      className={style.Intro}
      neumorphicOptions={{
        form: FormShape.Pressed,
        size: 500,
        intensity: 0.65,
        lightSource: 3,
        distance: 45,
        blur: 90,
      }}
    >
      <ImageComparator />

      <div className={style.Intro_myIntroduction}>
        <p ref={splitTextElement} className={style.Intro_text} >
          !Hola! mi nombre es: <br /> Luis martinez
        </p>
        <div className={style.Intro_lines}>
          <div className={style.Intro_line1}></div>
          <div className={style.Intro_line2}></div>
        </div>

        <strong className={style.Intro_strong} ref={splitTextElement2} >Programador</strong>
        <div className={style.Intro_ilustration}>
          <img className={style.Intro_ilustrationImage} src={neomorphicSVG} alt="neomorphic svg shape" />
          <div className={style.Intro_design}>
            <img src={manIllustrationSVG} alt="man and template boards illustration" />
          </div>
        </div>
      </div>
    </NeumorphicElement >
  );
};

export default IntroSection;
