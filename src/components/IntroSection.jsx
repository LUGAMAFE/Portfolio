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
                form: 'concave',
                isSVG: true,
                size: '500',
                intensity: '0.65',
                lightSource: 3,
                distance: '45',
                blur: 90,
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="635"
                height="441"
                viewBox="0 0 635 441"
                fill="url(#paint0_linear_78_19)"
              >
                <g>
                  <path
                    d="M543.261 131.124C607.286 174.068 649 423 613.383 444C577.766 465 423.5 472 406.574 444C372 403.5 304.964 366.041 263.5 373.214C211.671 382.18 124.562 414.27 90.0091 373.214C80.6216 362.059 47.0441 299.596 32.0823 241.079C-40.0722 -41.1225 231.778 40.0457 297.326 56.0906C407.082 82.9564 491.272 96.2526 543.261 131.124Z"
                    fill="url(#paint0_linear_78_19)"
                  />
                  <path
                    d="M543.261 131.124C607.286 174.068 649 423 613.383 444C577.766 465 423.5 472 406.574 444C372 403.5 304.964 366.041 263.5 373.214C211.671 382.18 124.562 414.27 90.0091 373.214C80.6216 362.059 47.0441 299.596 32.0823 241.079C-40.0722 -41.1225 231.778 40.0457 297.326 56.0906C407.082 82.9564 491.272 96.2526 543.261 131.124Z"
                    stroke="url(#paint0_linear_78_19)"
                  />
                </g>

                <defs>
                  <linearGradient id="paint0_linear_78_19" x1="1" y1="1" x2="0" y2="0">
                    <stop stopColor="var(--firstGradientColor)" />
                    <stop offset="1" stopColor="var(--secondGradientColor)" />
                  </linearGradient>
                </defs>
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
