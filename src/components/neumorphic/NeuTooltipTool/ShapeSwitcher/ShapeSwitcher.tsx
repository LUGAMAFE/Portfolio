import { FormShape } from '../../../../types/neomorphism';
import Concave from '../../../svg/concave.svg';
import Convex from '../../../svg/convex.svg';
import Flat from '../../../svg/flat.svg';
import Level from '../../../svg/level.svg';
import Pressed from '../../../svg/pressed.svg';
import style from './shapeSwitcher.module.scss';

export interface ShapeSwitcherProps {
  shape?: FormShape;
  setShape: (name: FormShape) => void;
}

export interface ShapeButtonProps {
  shape?: FormShape;
  name: FormShape;
  title: string;
  image: string;
  setShape: (name: FormShape) => void;
}

const ShapeButton = ({ shape, setShape, name, title, image }: ShapeButtonProps) => (
  <button
    className={`${style.ShapeSwitcher_button} ${shape === name ? style.ShapeSwitcher_active : ''}`}
    onClick={() => setShape(name)}
    name={name}
    title={title}
  >
    <img className={`${style.ShapeSwitcher_icon}`} src={image} alt={title} />
  </button>
);

const ShapeSwitcher = ({ shape, setShape }: ShapeSwitcherProps) => {
  const shapes = [
    { name: 'concave', title: 'Concave', Image: Concave },
    { name: 'convex', title: 'Convex', Image: Convex },
    { name: 'level', title: 'Level', Image: Level },
    { name: 'pressed', title: 'Pressed', Image: Pressed },
    { name: 'flat', title: 'Flat', Image: Flat },
  ];

  return (
    <>
      <div className={`${style.NeuTooltipTool_row} ${style.NeuTooltipTool_label}`}>
        <label>Form: </label>
      </div>
      <div className={style.NeuTooltipTool_row}>
        <div className={style.ShapeSwitcher}>
          {shapes.map((btnShape) => (
            <ShapeButton
              key={btnShape.name}
              shape={shape}
              setShape={setShape}
              name={btnShape.name as FormShape}
              title={btnShape.title}
              image={btnShape.Image}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default ShapeSwitcher;
