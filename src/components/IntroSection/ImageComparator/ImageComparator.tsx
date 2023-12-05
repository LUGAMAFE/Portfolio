import luisImage from '../../../../assets/images/luis.png';
import NeumorphicElement from '../../neumorphic/NeumorphicElement';
import style from './ImageComparator.module.scss';
export const ImageComparator = () => {
  return (
    <div className={style.circleAnimation}>
      <NeumorphicElement
        className={style.imageComparer}
        neumorphicOptions={{
          form: 'convex',
          size: 439,
          intensity: 0.9,
          lightSource: 1,
          distance: 44,
          blur: 88,
        }}
      >
        <div className={style.divisorAndCircle}>
          <div className={style.circle}>
            <div className={style.line}></div>
            <img src={luisImage} alt="programer luis image" />
          </div>
        </div>
      </NeumorphicElement>
    </div>
  );
};
