import hamburgerIcon from '../../../assets/images/bx-menu.svg';
import { FormShape } from '../../types/neomorphism';
import NeumorphicElement from '../neumorphic/NeomorphicElement/NeumorphicElement';
import { LanguageSwitcher } from './LanguageSwitcher';
import { ThemeColorSwitcher } from './ThemeColorSwitcher';
import style from './navbar.module.scss';

const Navbar = () => {
  return (
    <NeumorphicElement
      className={style.Navbar}
      nTestId="navbar"
      neumorphicOptions={{
        form: FormShape.Pressed,
        size: 196,
        intensity: 0.51,
        lightSource: 3,
        distance: 23,
        blur: 46,
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
      <div className={style.Navbar_bottomNeon}></div>
    </NeumorphicElement>
  );
};

export default Navbar;
