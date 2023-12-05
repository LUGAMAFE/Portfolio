import { MouseEvent } from 'react';
import style from './LightSourceSelector.module.scss';

interface LightSourceSelectorProps {
  lightSource: number;
  disabled?: boolean;
  onDirectionChanged: (name: number) => void;
}

const LightSourceSelector = ({
  lightSource,
  onDirectionChanged,
  disabled,
}: LightSourceSelectorProps) => {
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    const direction = Number((event.target as HTMLInputElement).name);
    onDirectionChanged(direction);
  };
  return (
    <div className={`${style.row} ${style.label}`} style={{ margin: '12px 0px 8px' }}>
      <div className={`${style.lightArrows} ${disabled ? style.disabled : ''}`}>
        <button
          className={`${style.arrow} ${lightSource === 1 ? style.active : ''}`}
          onClick={handleClick}
          name="1"
        ></button>
        <button
          className={`${style.arrow} ${lightSource === 2 ? style.active : ''}`}
          onClick={handleClick}
          name="2"
        ></button>
        <button
          className={`${style.arrow} ${lightSource === 4 ? style.active : ''}`}
          onClick={handleClick}
          name="4"
        ></button>
        <button
          className={`${style.arrow} ${lightSource === 3 ? style.active : ''}`}
          onClick={handleClick}
          name="3"
        ></button>
      </div>
    </div>
  );
};

export default LightSourceSelector;
