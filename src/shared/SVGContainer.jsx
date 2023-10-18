import PropTypes from 'prop-types';
import style from '../style/sass/style.module.scss';
export const SVGContainer = ({ width, height, svgUrl }) => {
  return (
    <div className={style.svgContainer} style={{ width, height }}>
      <svg>
        <image href={svgUrl} />
      </svg>
    </div>
  );
};
SVGContainer.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  svgUrl: PropTypes.string,
};
