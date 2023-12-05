import rectangleSVG from '../../../../assets/images/Rectangle-378.svg';
import style from './descriptionProyect.module.scss';
export const DescriptionProyect = () => {
  return (
    <div className={style.description}>
      <div className={style.softTitle}>
        <p>WEB/UI</p>
      </div>
      <div className={style.content}>
        <div className={style.descriptionTextContainer}>
          <p>Solárek</p>
          <div className={style.svgContainer}>
            <img src={rectangleSVG} alt="neon rectangle" />
          </div>
        </div>
        <p>Pagina web enfocada en la venta de paneles solares</p>
        <button className={style.contactButton}>
          <p>Ir al Sitio</p>
        </button>
      </div>
    </div>
  );
};
