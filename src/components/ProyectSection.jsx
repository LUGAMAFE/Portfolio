import style from '../style/sass/style.module.scss';
import NeumorphicElement from './neumorphic/NeumorphicElement';

export const ProyectSection = () => {
  return (
    <>
      <NeumorphicElement
        neumorphicOptions={{
          form: 'pressed',
          size: '500',
          intensity: '0.65',
          lightSource: 3,
          distance: '45',
          blur: 90,
        }}
        className={style.projects}
        id="seccion3"
      >
        <div
          style={{
            width: '100%',
            height: '90px',
          }}
        ></div>
        <div className={style.projectsContainer}>
          <div className={style.carrousel}>
            <div className={style.carrouselContainer}>
              <div className={style.textContainer}>
                <div className={style.svgContainer}>
                  <svg>
                    <image href="../../assets/images/proyectlogo.svg" />
                  </svg>
                </div>
              </div>
              <div className={style.snapContainer}>
                <img href="../../assets/images/shotsnapp.png" />
              </div>
            </div>
          </div>
          <div className={style.description}>
            <div className={style.softTitle}>
              <p>WEB/UI</p>
            </div>
            <div className={style.content}>
              <div className={style.descriptionTextContainer}>
                <p>Solárek</p>
                <div className={style.svgContainer}>
                  <svg>
                    <image href="../../assets/images/Rectangle-378.svg" />
                  </svg>
                </div>
              </div>
              <p>Pagina web enfocada en la venta de paneles solares</p>
              <button className={style.contactButton}>
                <p>Ir al Sitio</p>
              </button>
            </div>
          </div>
        </div>
      </NeumorphicElement>
    </>
  );
};
