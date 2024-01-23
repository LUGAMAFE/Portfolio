import circleComputerSVG from '../../../../assets/images/Circulito.svg';
import neomorphicSVG from '../../../../assets/images/Vector-10.svg';
import style from './abilities.module.scss';
export const Abilities = () => {
  return (
    <div className={style.Abilities}>
      <div className={style.Abilities_svgContainer}>
        <p className={style.Abilities_text}>Diseño UI / UX</p>
        <img src={neomorphicSVG} alt="neomorphic svg shape" />
      </div>
      <div className={style.Abilities_svgContainer}>
        <img src={circleComputerSVG} alt="white circle computer svg image" />
      </div>
      <div className={style.Abilities_svgContainer}>
        <p className={`${style.Abilities_text} ${style.Abilities_text___rotated}`}>
          FullStack Web{' '}
        </p>
        <img src={neomorphicSVG} alt="neomorphic svg shape" />
      </div>
    </div>
  );
};
