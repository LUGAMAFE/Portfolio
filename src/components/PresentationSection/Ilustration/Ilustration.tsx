import manComputerSVG from '../../../../assets/images/Ilustracion-2.svg';
import style from './ilustration.module.scss';
export const Ilustration = () => {
  return (
    <div className={style.ilustration}>
      <div className={style.svgContainer}>
        <img src={manComputerSVG} alt="neomorphic svg shape" />
      </div>
      <button className={style.contactButton}>
        <p>Contactame</p>
      </button>
    </div>
  );
};
