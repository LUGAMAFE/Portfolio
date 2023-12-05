import { MouseEvent } from 'react';
import Concave from '../svg/concave.svg';
import Convex from '../svg/convex.svg';
import Flat from '../svg/flat.svg';
import Level from '../svg/level.svg';
import Pressed from '../svg/pressed.svg';
import style from './neumorphic/configuration.module.scss';

export interface ShapeSwitcherProps {
  shape?: 'concave' | 'convex' | 'level' | 'pressed' | 'flat' | null;
  setShape: (name: string) => void;
}
const ShapeSwitcher = ({ shape, setShape }: ShapeSwitcherProps) => {
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    const name = (event.target as HTMLInputElement).name;
    setShape(name);
  };
  return (
    <>
      <div className={`${style.row} ${style.label}`}>
        <label>Form: </label>
      </div>
      <div className={style.row}>
        <div className={style.shapeSwitch}>
          <button
            className={shape === 'concave' ? style.active : ''}
            onClick={handleClick}
            name="concave"
            title="Concave"
          >
            <img src={Concave} alt="Concave" />
          </button>
          <button
            className={shape === 'convex' ? style.active : ''}
            onClick={handleClick}
            name="convex"
            title="Convex"
          >
            <img src={Convex} alt="Concave" />
          </button>
          <button
            className={shape === 'level' ? style.active : ''}
            onClick={handleClick}
            name="level"
            title="Level"
          >
            <img src={Level} alt="Concave" />
          </button>
          <button
            className={shape === 'pressed' ? style.active : ''}
            onClick={handleClick}
            name="pressed"
            title="Pressed"
          >
            <img src={Pressed} alt="Concave" />
          </button>
          <button
            className={shape === 'flat' ? style.active : ''}
            onClick={handleClick}
            name="flat"
            title="Flat"
          >
            <img src={Flat} alt="Concave" />
          </button>
        </div>
      </div>
    </>
  );
};

export default ShapeSwitcher;
