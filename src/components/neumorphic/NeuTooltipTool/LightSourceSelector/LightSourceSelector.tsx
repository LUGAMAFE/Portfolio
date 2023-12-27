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
    const direction = Number((event.target as HTMLButtonElement).name);
    onDirectionChanged(direction);
  };

  const directions = [1, 2, 4, 3];
  return (
    <div className={`${style.LightSourceSelector} ${disabled ? style.LightSourceSelector_disabled : ''}`}>
      {directions.map((direction) => (
        <button
          key={direction}
          className={`${style.Arrow} ${lightSource === direction ? `${style.active}` : ''}`}
          onClick={handleClick}
          name={`${direction}`}
        ></button>
      ))}

    </div>
  );
};

export default LightSourceSelector;
