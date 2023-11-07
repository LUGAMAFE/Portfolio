import style from '../../style/sass/presentation.module.scss';
import NeumorphicElement from '../neumorphic/NeumorphicElement';
import { Abilities } from './Abilities';
import { Ilustration } from './Ilustration';

const PresentationSection = () => {
  return (
    <NeumorphicElement
      neumorphicOptions={{
        form: 'pressed',
        size: 500,
        intensity: 0.65,
        lightSource: 3,
        distance: 45,
        blur: 90,
      }}
      className={style.container}
    >
      <div
        style={{
          width: '100%',
          height: '90px',
        }}
      ></div>
      <div className={style.Container}>
        <Abilities />
        <Ilustration />
      </div>
    </NeumorphicElement>
  );
};

export default PresentationSection;
