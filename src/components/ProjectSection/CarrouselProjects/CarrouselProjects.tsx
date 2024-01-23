import SVGLogo from '../../../../assets/images/proyectlogo.svg';
import snapShot from '../../../../assets/images/shotsnapp.png';
import style from './carrouselProjects.module.scss';

export const CarrouselProjects = () => {
  return (
    <div className={style.CarrouselProjects}>
      <div className={style.CarrouselProjects_carrouselContainer}>
        <div className={style.CarrouselProjects_textContainer}>
          <div className={style.CarrouselProjects_svgContainer}>
            <img src={SVGLogo} alt="company Logo" />
          </div>
        </div>
        <div className={style.CarrouselProjects_snapContainer}>
          <img src={snapShot} alt="Snap shot of company page" />
        </div>
      </div>
    </div>
  );
};
