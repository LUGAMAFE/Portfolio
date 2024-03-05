import { useContext, useState } from 'react';
import hamburgerIcon from '../../../assets/images/bx-menu.svg';
import { FormShape } from '../../types/neomorphism';
import { NeumorphicStylesContext } from '../context/NeumorphicStylesContext';
import NeumorphicElement from '../neumorphic/NeomorphicElement/NeumorphicElement';
import { LanguageSwitcher } from './LanguageSwitcher';
import { ThemeColorSwitcher } from './ThemeColorSwitcher';
import style from './navbar.module.scss';


const Navbar = () => {
  const { initialMainColorNeon, initialColorNeonSVG, isChecked } = useContext(NeumorphicStylesContext);

  const initialButtonConfigs: ExtendedRealNeumorphicElementProps[] = [
    {
      id: 'externalButton',
      className: style.Navbar_button,

      neumorphicOptions: {
        form: FormShape.Flat,
        size: 43,
        intensity: 0.45,
        lightSource: 1,
        distance: 4,
        blur: 9
      },
    },

  ];

  const [buttonConfig, setButtonConfig] = useState(initialButtonConfigs[0] || null);


  const handleButtonClick = (id: string | number) => {
    setButtonConfig(prevButtonConfig =>
      prevButtonConfig.id === id
        ? {
          ...prevButtonConfig,
          neumorphicOptions: {
            ...prevButtonConfig.neumorphicOptions,
            form: prevButtonConfig.neumorphicOptions
              ? prevButtonConfig.neumorphicOptions.form === FormShape.Concave
                ? FormShape.Pressed
                : FormShape.Concave
              : FormShape.Concave
          },
        }
        : prevButtonConfig
    );
  };
  return (
    <NeumorphicElement
      className={style.Navbar}
      nTestId="navbar"
      neumorphicOptions={{
        form: FormShape.Pressed,
        size: isChecked ? 196 : 196,
        intensity: isChecked ? 0.17 : 0.51,
        lightSource: 3,
        distance: isChecked ? 20 : 23,
        blur: isChecked ? 39 : 46,
      }}
    >
      <div className={style.Navbar_logo}>
        <p>{'<LUGAMAFE/>'}</p>
      </div>
      <ThemeColorSwitcher />
      <LanguageSwitcher />
      <div className={style.Navbar_menuToggle}>

        <NeumorphicElement
          key={buttonConfig.id}
          element={'button'}
          onClick={() => handleButtonClick(buttonConfig.id ? buttonConfig.id : '')}
          neumorphicOptions={buttonConfig.neumorphicOptions}
          className={buttonConfig.className}
          id='externalButton'
        >
          <img className={style.Navbar_hamburger} src={hamburgerIcon} alt="circle part of input" />
        </NeumorphicElement>

      </div>
      <div className={style.Navbar_bottomNeon} style={{ background: initialMainColorNeon, boxShadow: `0px 0px 18px ${initialColorNeonSVG.gradiantColorBoxShadow}` }}></div>
    </NeumorphicElement>
  );
};

export default Navbar;
