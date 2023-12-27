import luisImage from '../../../../assets/images/luis.png';
import { FormShape } from '../../../types/neomorphism';
import NeumorphicElement from '../../neumorphic/NeomorphicElement/NeumorphicElement';
import style from './ImageComparator.module.scss';
export const ImageComparator = () => {
  return (
    <div className={style.ImageComparator}>
      <NeumorphicElement
        className={style.ImageComparator_imageComparer}
        neumorphicOptions={{
          form: FormShape.Convex,
          size: 439,
          intensity: 0.9,
          lightSource: 1,
          distance: 44,
          blur: 88,
        }}
      >

        <div className={style.ImageComparator_circle}>
          <div className={style.ImageComparator_line}></div>
          <img className={style.ImageComparator_backImage} src={luisImage} alt="programer luis image" />
        </div>
      </NeumorphicElement>
    </div>
  );
};
