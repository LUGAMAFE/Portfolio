
import { useContext } from 'react';
import { FormShape } from '../../types/neomorphism';
import { NeumorphicStylesContext } from '../context/NeumorphicStylesContext';
import NeumorphicElement from '../neumorphic/NeomorphicElement/NeumorphicElement';
import { Abilities } from './Abilities';
import { Illustration } from './Ilustration/index';
import style from './presentation.module.scss';

const PresentationSection = () => {
  const { isChecked } = useContext(NeumorphicStylesContext);
  return (
    <NeumorphicElement
      id="seccion1"
      neumorphicOptions={{
        form: FormShape.Pressed,
        size: isChecked ? 44 : 500,
        intensity: isChecked ? 0.47 : 0.65,
        lightSource: 3,
        distance: isChecked ? 4 : 45,
        blur: isChecked ? 39 : 90,
      }}
      className={`${style.Presentation} section`}
    >
      <div
        style={{
          width: '100%',
          height: '90px',
        }}
      ></div>
      <div className={style.Presentation_container}>
        <Abilities />
        <Illustration />
      </div>
    </NeumorphicElement>
  );
};

export default PresentationSection;
