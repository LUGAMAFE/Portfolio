import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import Draggable from 'gsap-trial/Draggable';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useContext, useEffect, useRef } from 'react';
import luisImage from '../../../../assets/images/luis.png';
import luisImagereal from '../../../../assets/images/luis100realnofake.png';
import { FormShape } from '../../../types/neomorphism';
import { NeumorphicStylesContext } from '../../context/NeumorphicStylesContext';
import NeumorphicElement from '../../neumorphic/NeomorphicElement/NeumorphicElement';
import style from './ImageComparator.module.scss';

gsap.registerPlugin(ScrollTrigger, Draggable);
export const ImageComparator = () => {
  const { isChecked } = useContext(NeumorphicStylesContext);
  const miElemento = useRef(null);

  useGSAP(() => {
    gsap.to(miElemento.current, {
      x: -0,
      duration: 3,
      delay: 0.7,
      scrollTrigger: {
        trigger: miElemento.current,
        start: "center bottom",
        end: "bottom top",
        scrub: true,

      }
    });
    function init() {
      gsap.to(`.${style.ImageComparator_gallery}`, { autoAlpha: 1 });
      gsap.set(`.${style.ImageComparator_dragger}`, { x: 320 });
    }

    Draggable.create(`.${style.ImageComparator_dragger}`, {
      type: "x",
      bounds: `.${style.ImageComparator_gallery}`,
      onDrag: function () {
        const x = 535 - gsap.getProperty(this.target, "x");
        gsap.set(`.${style.ImageComparator_clipped}`, { clipPath: `inset(0px ${x}px 0px 0px)` });
      }
    });
    window.addEventListener("load", init);
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
        <div className={style.ImageComparator_circle}>
          <div className={style.ImageComparator_gallery} >
            <img className={`${style.ImageComparator_backImage} ${style.ImageComparator_galleryImage}`} src={luisImage} alt="programer luis image" />
            <img className={`${style.ImageComparator_backImage} ${style.ImageComparator_clipped} ${style.ImageComparator_galleryImage}`} src={luisImagereal} alt="programer luis image" />
            <div className={style.ImageComparator_dragger}></div>
          </div>
        </div>
      </NeumorphicElement>
    </div>
  );
};
