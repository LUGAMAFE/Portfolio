import { useContext } from 'react';
import { NeumorphicStylesContext } from '../../context/NeumorphicStylesContext';
import style from './themeColorSwitcher.module.scss';

export const ThemeColorSwitcher = () => {
  const { handleChangeColorNav } = useContext(NeumorphicStylesContext);

  return (
    <div className={style.ThemeColorSwitcher}>
      <p className={style.ThemeColorSwitcher_text}>{'Encender Luces'}</p>
      <label className={style.ThemeColorSwitcher_toggle}>
        <input
          onChange={handleChangeColorNav}
          className={style.ThemeColorSwitcher_toggleCheckbox}
          type="checkbox"
        ></input>
        <div className={style.ThemeColorSwitcher_toggleSwitch}></div>
      </label>
    </div>
  );
};
