import { MouseEvent } from 'react';
import { FormShape } from '../../../../types/neomorphism';
import Concave from '../../../svg/concave.svg';
import Convex from '../../../svg/convex.svg';
import Flat from '../../../svg/flat.svg';
import Level from '../../../svg/level.svg';
import Pressed from '../../../svg/pressed.svg';
import style from './shapeSwitcher.module.scss';

export interface ShapeSwitcherProps {
  shape?: FormShape;
  setShape: (name: FormShape) => void;
}
const ShapeSwitcher = ({ shape, setShape }: ShapeSwitcherProps) => {
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    const nameString = (event.target as HTMLInputElement).name;
    const name: FormShape = FormShape[nameString as keyof typeof FormShape];
    setShape(name);
  };
  return (
    <>
      <div className={`${style.NeuTooltipTool_row} ${style.NeuTooltipTool_labelContainer}`}>
        <label className={style.NeuTooltipTool_label}>Form: </label>
      </div>
      <div className={style.row}>
        <div className={style.ShapeSwitcher}>
          <button
            className={`${shape === 'concave' ? style.ShapeSwitcher_active : ''} ${style.ShapeSwitcher_button}`}
            onClick={handleClick}
            name="concave"
            title="Concave"
          >
            <img className={style.ShapeSwitcher_icon} src={Concave} alt="Concave" />
          </button>
          <button
            className={`${shape === 'convex' ? style.ShapeSwitcher_active : ''} ${style.ShapeSwitcher_button}`}
            onClick={handleClick}
            name="convex"
            title="Convex"
          >
            <img className={style.ShapeSwitcher_icon} src={Convex} alt="Concave" />
          </button>
          <button
            className={`${shape === 'level' ? style.ShapeSwitcher_active : ''} ${style.ShapeSwitcher_button}`}
            onClick={handleClick}
            name="level"
            title="Level"
          >
            <img className={style.ShapeSwitcher_icon} src={Level} alt="Concave" />
          </button>
          <button
            className={`${shape === 'pressed' ? style.ShapeSwitcher_active : ''} ${style.ShapeSwitcher_button}`}
            onClick={handleClick}
            name="pressed"
            title="Pressed"
          >
            <img className={style.ShapeSwitcher_icon} src={Pressed} alt="Concave" />
          </button>
          <button
            className={`${shape === 'flat' ? style.ShapeSwitcher_active : ''} ${style.ShapeSwitcher_button}`}
            onClick={handleClick}
            name="flat"
            title="Flat"
          >
            <img className={style.ShapeSwitcher_icon} src={Flat} alt="Concave" />
          </button>
        </div>
      </div>
    </>
  );
};

export default ShapeSwitcher;
