import { MouseEvent } from 'react';
import style from '../../style/sass/components/neumorphic/configuration.module.scss';

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
  const directions = [1, 2, 3, 4];
  return (
    <div className={`${style.row} ${style.lightSourceSelector} ${style.label}`}>
      <div className={`${style.lightArrows} ${disabled ? style.disabled : ''}`}>
        {directions.map((direction) => (
          <button
            key={direction}
            className={`${style.arrow} ${lightSource === direction ? style.active : ''}`}
            onClick={handleClick}
            name={`${direction}`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default LightSourceSelector;
