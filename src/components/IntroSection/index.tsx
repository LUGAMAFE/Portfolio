import manIllustrationSVG from '../../../assets/images/Ilustracion-Diseño.svg';
import neomorphicSVG from '../../../assets/images/Vector-12.svg';
import style from '../../style/sass/intro.module.scss';
import NeumorphicElement from '../neumorphic/NeumorphicElement';
import { ImageComparator } from './ImageComparator';
const IntroSection = () => {
  return (
    <NeumorphicElement
      id="seccion1"
      className={style.intro}
      neumorphicOptions={{
        form: 'pressed',
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
          <div className={style.svgContainer}>
            <img src={neomorphicSVG} alt="neomorphic svg shape" />
          </div>
          <div className={style.diseño}>
            <img src={manIllustrationSVG} alt="man and template boards illustration" />
          </div>
        </div>
      </div>
    </NeumorphicElement>
  );
};

export default IntroSection;
