import PropTypes from 'prop-types';
import style from '../../style/sass/brands.module.scss';
export const BrandLogo = ({ imageSource }) => {
  return (
    <div className={style.brand}>
      <img src={imageSource} alt="brand logo" />
    </div>
  );
};
BrandLogo.propTypes = {
  imageSource: PropTypes.string,
};
