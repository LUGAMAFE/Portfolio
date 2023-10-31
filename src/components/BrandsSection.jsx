import ANGOLOLogo from '../../assets/images/logos/ANGOLO.svg';
import CHILLSIDELogo from '../../assets/images/logos/CHILLSIDE.svg';
import CULTURLogo from '../../assets/images/logos/CULTUR.svg';
import GANTLogo from '../../assets/images/logos/GANT.svg';
import MCPLogo from '../../assets/images/logos/MCP.svg';
import SECOGEYLogo from '../../assets/images/logos/SECOGEY.svg';
import SOCCERLogo from '../../assets/images/logos/SOCCER.svg';
import SOLAREKLogo from '../../assets/images/logos/SOLAREK.svg';
import style from '../style/sass/brands.module.scss';
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
                  <img src={SECOGEYLogo} alt="brand logo" />
                </div>
                <div className={style.brand}>
                  <img src={CULTURLogo} alt="brand logo" />
                </div>
                <div className={style.brand}>
                  <img src={ANGOLOLogo} alt="brand logo" />
                </div>
                <div className={style.brand}>
                  <img src={MCPLogo} alt="brand logo" />
                </div>
                <div className={style.brand}>
                  <img src={SOCCERLogo} alt="brand logo" />
                </div>
                <div className={style.brand}>
                  <img src={SOLAREKLogo} alt="brand logo" />
                </div>
                <div className={style.brand}>
                  <img src={CHILLSIDELogo} alt="brand logo" />
                </div>
                <div className={style.brand}>
                  <img src={GANTLogo} alt="brand logo" />
                </div>
              </div>
            </NeumorphicElement>
          </div>
        </div>
      </div>
    </NeumorphicElement>
  );
};
