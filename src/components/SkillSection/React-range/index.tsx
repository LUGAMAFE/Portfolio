import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';
import NeumorphicElement from '../../neumorphic/NeomorphicElement/NeumorphicElement';
import style from '../Skill/skill.module.scss';
import './ReactRange.scss';
export const ReactRange = () => {
  return (
    <NeumorphicElement
      neumorphicOptions={{
        form: 'pressed',
        size: 102,
        intensity: 0.76,
        lightSource: 1,
        distance: 9,
        blur: 18,
      }}
      className={style.Skill_nullPart}
    >

      <RangeSlider
        className="single-thumb"
        defaultValue={[0, 50]}
        thumbsDisabled={[true, false]}
        rangeSlideDisabled={true}
      />
    </NeumorphicElement>
  );
};
