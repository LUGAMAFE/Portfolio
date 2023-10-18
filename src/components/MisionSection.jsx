import style from '../style/sass/style.module.scss';
import NeumorphicElement from './neumorphic/NeumorphicElement';

export const MisionSection = () => {
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
              <svg>
                <image href="../../assets/images/Vector-10.svg" />
              </svg>
            </div>
            <div className={style.svgContainer}>
              <svg>
                <image href="../../assets/images/Circulito.svg" />
              </svg>
            </div>
            <div className={style.svgContainer}>
              <p>FullStack Web </p>
              <svg>
                <image href="../../assets/images/Vector-10.svg" />
              </svg>
            </div>
          </div>
          <div className={style.ilustration}>
            <div className={style.svgContainer}>
              <svg>
                <image href="../../assets/images/Ilustracion-2.svg" />
              </svg>
            </div>
            <button className={style.contactButton}>
              <p>Contactame</p>
            </button>
          </div>
        </div>
      </NeumorphicElement>
    </>
  );
};
