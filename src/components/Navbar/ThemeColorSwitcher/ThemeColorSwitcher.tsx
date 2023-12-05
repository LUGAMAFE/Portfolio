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
    <div className={style.lights}>
      <p>{'Encender Luces'}</p>
      <label className={style.toggle}>
        <input
          onChange={handleChangeColor}
          className={style.toggleCheckbox}
          type="checkbox"
        ></input>
        <div className={style.toggleSwitch}></div>
      </label>
    </div>
  );
};
