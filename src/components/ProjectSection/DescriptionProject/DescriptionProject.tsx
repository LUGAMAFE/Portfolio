import rectangleSVG from '../../../../assets/images/Rectangle-378.svg';
import style from './descriptionProject.module.scss';
export const DescriptionProject = () => {
  return (
    <div className={style.DescriptionProject}>
      <div className={style.DescriptionProject_softTitleContainer}>
        <p className={style.DescriptionProject_softTitle}>WEB/UI</p>
      </div>
      <div className={style.DescriptionProject_content}>
        <div className={style.DescriptionProject_descriptionTextContainer}>
          <p className={style.DescriptionProject_descriptionText}>Solárek</p>
          <img src={rectangleSVG} alt="neon rectangle" />
        </div>
        <p>Pagina web enfocada en la venta de paneles solares</p>
        <button className={style.DescriptionProject_contactButton}>
          <p className={style.DescriptionProject_contactButtonText}>Ir al Sitio</p>
        </button>
      </div>
    </div>
  );
};
