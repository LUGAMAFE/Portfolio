import { useContext } from 'react';
import ANGOLOLogo from '../../../assets/images/logos/ANGOLO.svg';
import CHILLSIDELogo from '../../../assets/images/logos/CHILLSIDE.svg';
import CULTURLogo from '../../../assets/images/logos/CULTUR.svg';
import GANTLogo from '../../../assets/images/logos/GANT.svg';
import MCPLogo from '../../../assets/images/logos/MCP.svg';
import SECOGEYLogo from '../../../assets/images/logos/SECOGEY.svg';
import SOCCERLogo from '../../../assets/images/logos/SOCCER.svg';
import SOLAREKLogo from '../../../assets/images/logos/SOLAREK.svg';
import { FormShape } from '../../types/neomorphism';
import { NeumorphicStylesContext } from '../context/NeumorphicStylesContext';
import NeumorphicElement from '../neumorphic/NeomorphicElement/NeumorphicElement';
import { BrandLogo } from './BrandLogo';
import style from './brands.module.scss';
const BrandsSection = () => {
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
  const { isChecked } = useContext(NeumorphicStylesContext);
  return (
    <NeumorphicElement
      id="seccion4"
      neumorphicOptions={{
        form: FormShape.Pressed,
        size: isChecked ? 44 : 500,
        intensity: isChecked ? 0.47 : 0.65,
        lightSource: 3,
        distance: isChecked ? 4 : 45,
        blur: isChecked ? 39 : 90,
      }}
      className={`${style.Brands} section`}
    >
      <div className={style.Brands_brandsContainer}>

        <div className={style.Brands_skillTopic}>
          <div className='box box-b' >
            <NeumorphicElement
              neumorphicOptions={{
                form: isChecked ? FormShape.Level : FormShape.Convex,
                size: isChecked ? 82 : 500,
                intensity: isChecked ? 0.1 : 0.65,
                lightSource: 1,
                distance: isChecked ? 10 : 45,
                blur: isChecked ? 20 : 90,
              }}
              className={style.Brands_section}
            >
              <NeumorphicElement
                neumorphicOptions={{
                  form: isChecked ? FormShape.Level : FormShape.Convex,
                  size: isChecked ? 82 : 102,
                  intensity: isChecked ? 0.1 : 0.76,
                  lightSource: 1,
                  distance: isChecked ? 10 : 9,
                  blur: isChecked ? 20 : 18,
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
