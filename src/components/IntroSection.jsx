import style from '../style/sass/style.module.scss';
import NeumorphicElement from './neumorphic/NeumorphicElement';
export const IntroSection = () => {
  return (
    <>
      <NeumorphicElement
        id="seccion1"
        className={style.intro}
        neumorphicOptions={{
          form: 'pressed',
          size: '500',
          intensity: '0.65',
          lightSource: 3,
          distance: '45',
          blur: 90,
        }}
      >
        <div className={style.circleAnimation}>
          <NeumorphicElement
            className={style.imageComparer}
            neumorphicOptions={{
              form: 'convex',
              size: '439',
              intensity: '0.9',
              lightSource: 1,
              distance: 44,
              blur: 88,
            }}
          >
            <div className={style.divisorAndCircle}>
              <div className={style.circle}>
                <div className={style.line}></div>
                <img src="../../assets/images/luis.png" alt="" />
              </div>
            </div>
          </NeumorphicElement>
        </div>
        <div className={style.myIntroduction}>
          <p>
            !Hola! mi nombre es: <br /> Luis martinez
          </p>
          <div className={style.lineas}>
            <div className={style.linea1}></div>
            <div className={style.linea2}></div>
          </div>
          <p>
            <strong>Programador</strong> y <em>diseñador</em> de sitios web
          </p>
          <div className={style.ilustration}>
            <NeumorphicElement
              className={style.svgContainer}
              neumorphicOptions={{
                form: 'svgInnerShadow',
                size: '500',
                intensity: '0.65',
                lightSource: 3,
                distance: '45',
                blur: 90,
              }}
            >
              <svg>
                <image href="../../assets/images/Vector-12.svg" />
              </svg>
            </NeumorphicElement>
            <div className={style.diseño}>
              <svg>
                <image href="../../assets/images/Ilustracion-Diseño.svg" />
              </svg>
            </div>
          </div>
        </div>
      </NeumorphicElement>
    </>
  );
};
