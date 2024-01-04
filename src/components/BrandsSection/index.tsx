import gsap from 'gsap-trial';
import ScrollTrigger from 'gsap-trial/ScrollTrigger';
import ANGOLOLogo from '../../../assets/images/logos/ANGOLO.svg';
import CHILLSIDELogo from '../../../assets/images/logos/CHILLSIDE.svg';
import CULTURLogo from '../../../assets/images/logos/CULTUR.svg';
import GANTLogo from '../../../assets/images/logos/GANT.svg';
import MCPLogo from '../../../assets/images/logos/MCP.svg';
import SECOGEYLogo from '../../../assets/images/logos/SECOGEY.svg';
import SOCCERLogo from '../../../assets/images/logos/SOCCER.svg';
import SOLAREKLogo from '../../../assets/images/logos/SOLAREK.svg';
import { FormShape } from '../../types/neomorphism';
import NeumorphicElement from '../neumorphic/NeomorphicElement/NeumorphicElement';
import { BrandLogo } from './BrandLogo';
import style from './brands.module.scss';
const BrandsSection = () => {

  gsap.registerPlugin(ScrollTrigger);
  const logosArray = [
    ANGOLOLogo,
    CHILLSIDELogo,
    CULTURLogo,
    GANTLogo,
    MCPLogo,
    SECOGEYLogo,
    SOCCERLogo,
    SOLAREKLogo,
  ];

  return (
    <NeumorphicElement
      neumorphicOptions={{
        form: FormShape.Pressed,
        size: 500,
        intensity: 0.65,
        lightSource: 3,
        distance: 45,
        blur: 90,
      }}
      className={style.Brands}
    >
      <div className={style.Brands_brandsContainer}>

        <div className={style.Brands_skillTopic}>
          <div className='box-b' >
            <NeumorphicElement
              neumorphicOptions={{
                form: FormShape.Convex,
                size: 500,
                intensity: 0.65,
                lightSource: 1,
                distance: 45,
                blur: 90,
              }}
              className={style.Brands_section}
            >
              <NeumorphicElement
                neumorphicOptions={{
                  form: FormShape.Convex,
                  size: 102,
                  intensity: 0.76,
                  lightSource: 1,
                  distance: 9,
                  blur: 18,
                }}
                className={style.Brands_titleContainer}
              >
                <p className={style.Brands_title}>COLABORACIONES</p>
              </NeumorphicElement>
              <div className={style.Brands_brandsLogos}>
                {logosArray.map((imgSrc, index) => (
                  <BrandLogo key={index} imageSource={imgSrc} />
                ))}
              </div>
            </NeumorphicElement>
          </div>
        </div>

      </div>
    </NeumorphicElement>
  );
};

export default BrandsSection;
