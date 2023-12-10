import { ChangeEvent, useContext } from 'react';
import { NeumorphicStylesContext } from '../../context/NeumorphicStylesContext';
import style from './themeColorSwitcher.module.scss';

export const ThemeColorSwitcher = () => {
  const { handleChangeColor: styleHandleChangeColor } = useContext(NeumorphicStylesContext);
  const handleChangeColor = (event: ChangeEvent<HTMLInputElement>) => {
    const isChecked = event.target.checked;
    styleHandleChangeColor(isChecked);
  };
  return (
    <div className={style.ThemeColorSwitcher}>
      <p className={style.ThemeColorSwitcher_text}>{'Encender Luces'}</p>
      <label className={style.ThemeColorSwitcher_toggle}>
        <input
          onChange={handleChangeColor}
          className={style.ThemeColorSwitcher_toggleCheckbox}
          type="checkbox"
        ></input>
        <div className={style.ThemeColorSwitcher_toggleSwitch}></div>
      </label>
    </div>
  );
};
