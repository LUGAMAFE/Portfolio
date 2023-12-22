import hamburgerIcon from '../../../assets/images/bx-menu.svg';
import style from '../../style/sass/navbar.module.scss';
import { FormShape } from '../../types/neomorphism';
import NeumorphicElement from '../neumorphic/NeumorphicElement';
import { LanguageSwitcher } from './LanguageSwitcher';
import { ThemeColorSwitcher } from './ThemeColorSwitcher';

const Navbar = () => {
  return (
    <NeumorphicElement
      className={style.myTopNavbar}
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
      <div className={style.logo}>
        <p>{'<LUGAMAFE/>'}</p>
      </div>
      <ThemeColorSwitcher />
      <LanguageSwitcher />
      <div className={style.menuToggle}>
        <NeumorphicElement
          element={'button'}
          neumorphicOptions={{
            form: FormShape.Level,
            size: 55,
            intensity: 0.19,
            lightSource: 1,
            distance: 6,
            blur: 11,
          }}
        >
          <img src={hamburgerIcon} alt="circle part of input" />
        </NeumorphicElement>
      </div>
    </NeumorphicElement>
  );
};

export default Navbar;
