import { useGSAP } from '@gsap/react';
import gsap from 'gsap-trial';
import SplitText from 'gsap-trial/SplitText';
import TextPlugin from 'gsap-trial/TextPlugin';
import { useRef } from 'react';
import manIllustrationSVG from "../../../assets/images/Ilustracion-Diseño.svg";
import neomorphicSVG from "../../../assets/images/Vector-12.svg";
import { FormShape } from '../../types/neomorphism';
import NeumorphicElement from '../neumorphic/NeomorphicElement/NeumorphicElement';
import { ImageComparator } from './ImageComparator';
import style from './intro.module.scss';
gsap.registerPlugin(SplitText, TextPlugin);
const IntroSection = () => {
  const splitTextElement = useRef();
  // Añade más estados si hay más elementos strong

  useGSAP(() => {
    const tl = gsap.timeline({
      repeat: -1,
    });
    const tl2 = gsap.timeline({
      repeat: -1,
    });


    const mySplitText = new SplitText(splitTextElement.current, { type: "chars" });

    // Animar líneas
    gsap.from(mySplitText.chars, {
      yPercent: 135,
      stagger: 0.01,
      ease: "power4.inOut",
      duration: 2.5,
      delay: 0.8
    });



    const mysplitText2 = new SplitText(`.${style.Intro_strong}`, { type: "words" });
    const chars2 = mysplitText2.words;
    tl.from(chars2, {
      transformOrigin: "50% top",
      rotationX: 90,
      y: -50,

      duration: 1,
      ease: 'linear', delay: 2,

    })
      .to(chars2, {
        transformOrigin: "50% top",
        rotationX: -90,
        y: 100,
        stagger: 1,
        duration: 1,
        ease: 'linear', delay: 4
      })
  }, []);


  return (
    <NeumorphicElement
      id="seccion0"
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
          !Hola! mi nombre es: Luis martinez
        </p>
        <div className={style.Intro_lines}>
          <div className={style.Intro_line1}></div>
          <div className={style.Intro_line2}></div>
        </div>
        <p className={style.Intro_text} >
          <strong className={style.Intro_strong}>Hello</strong>
        </p>
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
