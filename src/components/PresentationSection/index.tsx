import NeumorphicElement from '../neumorphic/NeomorphicElement/NeumorphicElement';
import { Abilities } from './Abilities';
import { Illustration } from './Ilustration/index';
import style from './presentation.module.scss';

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
      className={style.Presentation}
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
