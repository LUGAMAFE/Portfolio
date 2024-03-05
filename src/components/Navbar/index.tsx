import { useContext } from 'react';
import hamburgerIcon from '../../../assets/images/bx-menu.svg';
import { FormShape } from '../../types/neomorphism';
import { NeumorphicStylesContext } from '../context/NeumorphicStylesContext';
import NeumorphicElement from '../neumorphic/NeomorphicElement/NeumorphicElement';
import { LanguageSwitcher } from './LanguageSwitcher';
import { ThemeColorSwitcher } from './ThemeColorSwitcher';
import style from './navbar.module.scss';


const Navbar = () => {
  const { initialMainColorNeon, initialColorNeonSVG, isChecked } = useContext(NeumorphicStylesContext);
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
          id='externalButton'
          element={'button'}
          neumorphicOptions={{
            form: FormShape.Level,
            size: 55,
            intensity: 0.19,
            lightSource: 1,
            distance: 6,
            blur: 11,
          }}
          className={style.Navbar_button}
        >
          <img className={style.Navbar_hamburger} src={hamburgerIcon} alt="circle part of input" />
        </NeumorphicElement>
      </div>
      <div className={style.Navbar_bottomNeon} style={{ background: initialMainColorNeon, boxShadow: `0px 0px 18px ${initialColorNeonSVG.gradiantColorBoxShadow}` }}></div>
    </NeumorphicElement>
  );
};

export default Navbar;
