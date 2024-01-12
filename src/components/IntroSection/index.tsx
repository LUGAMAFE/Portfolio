import gsap from 'gsap-trial';
import SplitText from 'gsap-trial/SplitText';
import { useEffect, useRef, useState } from 'react';
import manIllustrationSVG from '../../../assets/images/Ilustracion-Diseño.svg';
import neomorphicSVG from '../../../assets/images/Vector-12.svg';
import { FormShape } from '../../types/neomorphism';
import NeumorphicElement from '../neumorphic/NeomorphicElement/NeumorphicElement';
import { ImageComparator } from './ImageComparator';
import style from './intro.module.scss';
const IntroSection = () => {
  const splitTextElement = useRef();
  const [showFirstStrong, setShowFirstStrong] = useState(false);
  const [showSecondStrong, setShowSecondStrong] = useState(false);
  // Añade más estados si hay más elementos strong

  useEffect(() => {
    // Mostrar el primer strong después de un breve retraso
    const timer1 = setTimeout(() => {
      setShowFirstStrong(true);
      // Eliminar el primer strong después de un tiempo
      const removeFirstTimer = setTimeout(() => {
        setShowFirstStrong(false);
        // Mostrar el segundo strong después de eliminar el primero
        const timer2 = setTimeout(() => {
          setShowSecondStrong(true);
          // Eliminar el segundo strong después de un tiempo
          const removeSecondTimer = setTimeout(() => {
            setShowSecondStrong(false);
            // Aquí puedes continuar la secuencia con más strongs si es necesario
          }, 1000); // Ajusta el tiempo según sea necesario
          return () => clearTimeout(removeSecondTimer);
        }, 500); // Ajusta el tiempo según sea necesario
        return () => clearTimeout(timer2);
      }, 1000);
      return () => clearTimeout(removeFirstTimer);
    }, 500); // Ajusta el tiempo según sea necesario

    return () => clearTimeout(timer1);
  }, []);


  useEffect(() => {
    const tl = gsap.timeline({
      repeat: -1,
    });
    const tl2 = gsap.timeline({
      delay: 4,
      repeat: -1,
    });
    gsap.registerPlugin(SplitText);

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
    const mysplitText3 = new SplitText(`.${style.Intro_strong3}`, { type: "words" });
    const chars3 = mysplitText3.words;
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

    tl2.from(chars3, {
      transformOrigin: "50% top",
      rotationX: 90,
      y: -50,
      duration: 1,
      ease: 'linear', delay: 2,

    })
      .to(chars3, {
        transformOrigin: "50% top",
        rotationX: -90,
        y: 100,
        stagger: 1,
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
          !Hola! mi nombre es: Luis martinez
        </p>
        <div className={style.Intro_lines}>
          <div className={style.Intro_line1}></div>
          <div className={style.Intro_line2}></div>
        </div>
        <p className={style.Intro_text} >
          <strong className={style.Intro_strong}>Programador</strong>
          <strong className={style.Intro_strong3}>Diseñador</strong>
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
