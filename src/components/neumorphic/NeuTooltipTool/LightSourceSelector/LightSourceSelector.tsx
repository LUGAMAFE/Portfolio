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
    <div style={{ margin: '12px 0px 8px' }}>
      <div className={`${style.LightSourceSelector} ${disabled ? style.LightSourceSelector_disabled : ''}`}>
        <button
          className={`${style.Arrow} ${style.Arrow_bottomRight} ${lightSource === 1 ? `${style.Arrow_active} ${style.Arrow_bottomRight___active}` : ''}`}
          onClick={handleClick}
          name="1"
        ></button>
        <button
          className={`${style.Arrow} ${style.Arrow_bottomLeft} ${lightSource === 2 ? `${style.Arrow_active} ${style.Arrow_bottomLeft___active}` : ''}`}
          onClick={handleClick}
          name="2"
        ></button>
        <button
          className={`${style.Arrow} ${style.Arrow_topRight} ${lightSource === 4 ? `${style.Arrow_active} ${style.Arrow_topRight___active}` : ''}`}
          onClick={handleClick}
          name="4"
        ></button>
        <button
          className={`${style.Arrow} ${style.Arrow_topLeft} ${lightSource === 3 ? `${style.Arrow_active} ${style.Arrow_topLeft___active}` : ''}`}
          onClick={handleClick}
          name="3"
        ></button>
      </div>
    </div>
  );
};

export default LightSourceSelector;
