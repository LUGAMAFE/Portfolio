import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useContext, useEffect, useRef } from 'react';
import luisImage from '../../../../assets/images/luis.png';
import { FormShape } from '../../../types/neomorphism';
import { NeumorphicStylesContext } from '../../context/NeumorphicStylesContext';
import NeumorphicElement from '../../neumorphic/NeomorphicElement/NeumorphicElement';
import style from './ImageComparator.module.scss';

gsap.registerPlugin(ScrollTrigger);
export const ImageComparator = () => {
  const { isChecked } = useContext(NeumorphicStylesContext);
  const miElemento = useRef(null);

  useGSAP(() => {
    gsap.to(miElemento.current, {
      x: -400, // Iniciar desde la izquierda
      duration: 3, // Duración de la animación,
      delay: 0.7,
      scrollTrigger: {
        markers: true,
        trigger: miElemento.current,
        start: "center bottom", // Empieza la animación cuando el elemento está en la parte superior de la pantalla
        end: "bottom top", // Termina cuando el elemento está en la parte inferior
        scrub: true, // Hace que la animación siga el scroll
        // Otras opciones...
      }
    });

  }, { scope: miElemento });
  useEffect(() => {

  }, []);
  return (
    <div ref={miElemento} className={style.ImageComparator} >
      <NeumorphicElement
        className={style.ImageComparator_imageComparer}
        neumorphicOptions={{
          form: FormShape.Convex,
          size: isChecked ? 378 : 439,
          intensity: isChecked ? 0.28 : 0.9,
          lightSource: 1,
          distance: isChecked ? 38 : 44,
          blur: isChecked ? 16 : 88,
        }}
      >
      </NeumorphicElement>
      <div className={style.ImageComparator_circle}>
        <div className={style.ImageComparator_line}></div>
        <img className={style.ImageComparator_backImage} src={luisImage} alt="programer luis image" />
      </div>
    </div>
  );
};
