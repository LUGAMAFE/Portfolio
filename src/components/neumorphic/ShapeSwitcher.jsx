import PropTypes from 'prop-types';
import style from '../../style/sass/components/neumorphic/configuration.module.scss';

import { ReactComponent as Concave } from '../svg/concave.svg';
import { ReactComponent as Convex } from '../svg/convex.svg';
import { ReactComponent as Flat } from '../svg/flat.svg';
import { ReactComponent as Level } from '../svg/level.svg';
import { ReactComponent as Pressed } from '../svg/pressed.svg';
const ShapeSwitcher = ({ shape, setShape }) => {
  return (
    <>
      <div className={`${style.row} ${style.label}`}>
        <label>Form: </label>
      </div>
      <div className={style.row}>
        <div className={style.shapeSwitch}>
          <button className={shape === 'concave' ? style.active : ''} onClick={setShape} name="concave" title="Concave">
            <Concave />
          </button>
          <button className={shape === 'convex' ? style.active : ''} onClick={setShape} name="convex" title="Convex">
            <Convex />
          </button>
          <button className={shape === 'level' ? style.active : ''} onClick={setShape} name="level" title="Level">
            <Level />
          </button>
          <button className={shape === 'pressed' ? style.active : ''} onClick={setShape} name="pressed" title="Pressed">
            <Pressed />
          </button>
          <button className={shape === 'flat' ? style.active : ''} onClick={setShape} name="flat" title="Flat">
            <Flat />
          </button>
        </div>
      </div>
    </>
  );
};

ShapeSwitcher.propTypes = {
  shape: PropTypes.oneOf(['concave', 'convex', 'level', 'pressed', 'flat']).isRequired,
  setShape: PropTypes.func.isRequired,
};

export default ShapeSwitcher;
