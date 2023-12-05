import circleComputerSVG from '../../../../assets/images/Circulito.svg';
import neomorphicSVG from '../../../../assets/images/Vector-10.svg';
import style from './abilities.module.scss';
export const Abilities = () => {
  return (
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
  );
};
