import style from '../style/sass/style.module.scss';
import NeumorphicElement from './neumorphic/NeumorphicElement';

export const BrandsSection = () => {
  return (
    <NeumorphicElement
      neumorphicOptions={{
        form: 'pressed',
        size: '500',
        intensity: '0.65',
        lightSource: 3,
        distance: '45',
        blur: 90,
      }}
      className={style.brands}
    >
      <div className={style.brandsContainer}>
        <div className={style.programingSkills}>
          <div className={style.skillTopic}>
            <NeumorphicElement
              neumorphicOptions={{
                form: 'convex',
                size: '500',
                intensity: '0.65',
                lightSource: 1,
                distance: '45',
                blur: 90,
              }}
              className={style.section}
            >
              <NeumorphicElement
                neumorphicOptions={{
                  form: 'convex',
                  size: '102',
                  intensity: '0.76',
                  lightSource: 1,
                  distance: '9',
                  blur: 18,
                }}
                className={style.title}
              >
                <p>COLABORACIONES</p>
              </NeumorphicElement>
              <div className={style.brandsLogos}>
                <div className={style.brand}>
                  <svg>
                    <image href="../../assets/images/logos/SECOGEY.svg" />
                  </svg>
                </div>
                <div className={style.brand}>
                  <svg>
                    <image href="../../assets/images/logos/CULTUR.svg" />
                  </svg>
                </div>
                <div className={style.brand}>
                  <svg>
                    <image href="../../assets/images/logos/ANGOLO.svg" />
                  </svg>
                </div>
                <div className={style.brand}>
                  <svg>
                    <image href="../../assets/images/logos/MCP.svg" />
                  </svg>
                </div>
                <div className={style.brand}>
                  <svg>
                    <image href="../../assets/images/logos/SOCCER.svg" />
                  </svg>
                </div>
                <div className={style.brand}>
                  <svg>
                    <image href="../../assets/images/logos/SOLAREK.svg" />
                  </svg>
                </div>
                <div className={style.brand}>
                  <svg>
                    <image href="../../assets/images/logos/CHILLSIDE.svg" />
                  </svg>
                </div>
                <div className={style.brand}>
                  <svg>
                    <image href="../../assets/images/logos/GANT.svg" />
                  </svg>
                </div>
              </div>
            </NeumorphicElement>
          </div>
        </div>
      </div>
    </NeumorphicElement>
  );
};
