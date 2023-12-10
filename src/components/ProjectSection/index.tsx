import NeumorphicElement from '../neumorphic/NeomorphicElement/NeumorphicElement';
import { CarrouselProjects } from './CarrouselProjects';
import { DescriptionProject } from './DescriptionProject';
import style from './projects.module.scss';

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
      className={style.Projects}
      id="seccion3"
    >
      <div
        style={{
          width: '100%',
          height: '90px',
        }}
      ></div>
      <div className={style.Projects_projectsContainer}>
        <CarrouselProjects />
        <DescriptionProject />
      </div>
    </NeumorphicElement>
  );
};

export default ProyectSection;
