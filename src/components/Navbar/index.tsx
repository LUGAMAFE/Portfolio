import hamburgerIcon from '../../../assets/images/bx-menu.svg';
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
        form: 'pressed',
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
          element={'button'}
          neumorphicOptions={{
            form: 'level',
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
    </NeumorphicElement>
  );
};

export default Navbar;
