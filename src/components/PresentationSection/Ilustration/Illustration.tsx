import manComputerSVG from '../../../../assets/images/Ilustracion-2.svg';
import style from './illustration.module.scss';
export const Illustration = () => {
  return (
    <div className={style.Illustration}>
      <div className={style.Illustration_svgContainer}>
        <img className={style.Illustration_svg} src={manComputerSVG} alt="neomorphic svg shape" />
      </div>
      <button className={style.Illustration_contactButton}>
        <p className={style.Illustration_contactButtonText}>Contactame</p>
      </button>
    </div>
  );
};
