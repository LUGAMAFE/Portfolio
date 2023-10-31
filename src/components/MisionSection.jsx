import circleComputerSVG from '../../assets/images/Circulito.svg';
import manComputerSVG from '../../assets/images/Ilustracion-2.svg';
import neomorphicSVG from '../../assets/images/Vector-10.svg';
import style from '../style/sass/mision.module.scss';
import NeumorphicElement from './neumorphic/NeumorphicElement';

export const MisionSection = () => {
  return (
    <NeumorphicElement
      neumorphicOptions={{
        form: 'pressed',
        size: '500',
        intensity: '0.65',
        lightSource: 3,
        distance: '45',
        blur: 90,
      }}
      className={style.mision}
      id="seccion2"
    >
      <div
        style={{
          width: '100%',
          height: '90px',
        }}
      ></div>
      <div className={style.misionContainer}>
        <div className={style.abilities}>
          <div className={style.svgContainer}>
            <p>Diseño UI / UX</p>
            <img src={neomorphicSVG} alt="neomorphic svg shape" />
          </div>
          <div className={style.svgContainer}>
            <img src={circleComputerSVG} alt="white circle computer svg image" />
          </div>
          <div className={style.svgContainer}>
            <p>FullStack Web </p>
            <img src={neomorphicSVG} alt="neomorphic svg shape" />
          </div>
        </div>
        <div className={style.ilustration}>
          <div className={style.svgContainer}>
            <img src={manComputerSVG} alt="neomorphic svg shape" />
          </div>
          <button className={style.contactButton}>
            <p>Contactame</p>
          </button>
        </div>
      </div>
    </NeumorphicElement>
  );
};
