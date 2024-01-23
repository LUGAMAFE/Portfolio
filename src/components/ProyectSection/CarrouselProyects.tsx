import SVGLogo from '../../../assets/images/proyectlogo.svg';

import snapShot from '../../../assets/images/shotsnapp.png';
import style from '../../style/sass/proyects.module.scss';

export const CarrouselProyects = () => {
  return (
    <div className={style.carrousel}>
      <div className={style.carrouselContainer}>
        <div className={style.textContainer}>
          <div className={style.svgContainer}>
            <img src={SVGLogo} alt="company Logo" />
          </div>
        </div>
        <div className={style.snapContainer}>
          <img src={snapShot} alt="Snap shot of company page" />
        </div>
      </div>
    </div>
  );
};
