import manIllustrationSVG from '../../../assets/images/Ilustracion-Diseño.svg';
import style from '../../style/sass/intro.module.scss';
import { FormShape } from '../../types/neomorphism';
import NeumorphicElement from '../neumorphic/NeumorphicElement';
import { ImageComparator } from './ImageComparator';
const IntroSection = () => {
  return (
    <NeumorphicElement
      id="seccion1"
      className={style.intro}
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
      <div className={style.myIntroduction}>
        <p>
          !Hola! mi nombre es: <br /> Luis martinez
        </p>
        <div className={style.lineas}>
          <div className={style.linea1}></div>
          <div className={style.linea2}></div>
        </div>
        <p>
          <strong>Programador</strong> y <em>diseñador</em> de sitios web
        </p>
        <div className={style.ilustration}>
          <NeumorphicElement
            className={style.svgContainer}
            element="svg"
            neumorphicOptions={{
              form: FormShape.Concave,
              isSVG: true,
              size: 500,
              intensity: 0.65,
              lightSource: 3,
              distance: 45,
              blur: 90,
            }}
          >
            <svg>
              <g>
                <path d="M543.261 131.124C607.286 174.068 649 423 613.383 444C577.766 465 423.5 472 406.574 444C372 403.5 304.964 366.041 263.5 373.214C211.671 382.18 124.562 414.27 90.0091 373.214C80.6216 362.059 47.0441 299.596 32.0823 241.079C-40.0722 -41.1225 231.778 40.0457 297.326 56.0906C407.082 82.9564 491.272 96.2526 543.261 131.124Z" />
                <path d="M543.261 131.124C607.286 174.068 649 423 613.383 444C577.766 465 423.5 472 406.574 444C372 403.5 304.964 366.041 263.5 373.214C211.671 382.18 124.562 414.27 90.0091 373.214C80.6216 362.059 47.0441 299.596 32.0823 241.079C-40.0722 -41.1225 231.778 40.0457 297.326 56.0906C407.082 82.9564 491.272 96.2526 543.261 131.124Z" />
              </g>
            </svg>
          </NeumorphicElement>
          <div className={style.diseño}>
            <img src={manIllustrationSVG} alt="man and template boards illustration" />
          </div>
        </div>
      </div>
    </NeumorphicElement>
  );
};

export default IntroSection;
