import manIllustrationSVG from '../../../assets/images/Ilustracion-Diseño.svg';
import neomorphicSVG from '../../../assets/images/Vector-12.svg';
import { FormShape } from '../../types/neomorphism';
import NeumorphicElement from '../neumorphic/NeomorphicElement/NeumorphicElement';
import { ImageComparator } from './ImageComparator';
import style from './intro.module.scss';
const IntroSection = () => {
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
        <p className={style.Intro_text}>
          !Hola! mi nombre es: <br /> Luis martinez
        </p>
        <div className={style.Intro_lines}>
          <div className={style.Intro_line1}></div>
          <div className={style.Intro_line2}></div>
        </div>
        <p className={style.Intro_text}>
          <strong className={style.Intro_strong} >Programador</strong> y <em className={style.Intro_em}>diseñador</em> de sitios web
        </p>
        <div className={style.Intro_ilustration}>
          <img className={style.Intro_ilustrationImage} src={neomorphicSVG} alt="neomorphic svg shape" />
          <div className={style.Intro_design}>
            <img src={manIllustrationSVG} alt="man and template boards illustration" />
          </div>
        </div>
      </div>
    </NeumorphicElement>
  );
};

export default IntroSection;
