import style from '../../style/sass/proyects.module.scss';
import NeumorphicElement from '../neumorphic/NeumorphicElement';
import { CarrouselProyects } from './CarrouselProyects';
import { DescriptionProyect } from './DescriptionProyect';

const ProyectSection = () => {
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
      className={style.projects}
      id="seccion3"
    >
      <div
        style={{
          width: '100%',
          height: '90px',
        }}
      ></div>
      <div className={style.projectsContainer}>
        <CarrouselProyects />
        <DescriptionProyect />
      </div>
    </NeumorphicElement>
  );
};

export default ProyectSection;
