import PropTypes from 'prop-types';
import { camelize } from '../../utils';
const ConfigurationRow = ({
  className,
  label,
  type,
  value,
  min,
  max,
  step = '1',
  disabled,
  onChange,
}) => {
  return (
    <div className={className}>
      <label>{label}: </label>
      <input
        type={type}
        name={camelize(label)}
        value={value}
        onChange={onChange}
        min={min}
        max={max}
        step={step}
        id={camelize(label)}
        disabled={disabled || !value}
      />
    </div>
  );
};

ConfigurationRow.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  min: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  max: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  step: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  disabled: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
};

ConfigurationRow.defaultProps = {
  step: '1',
};

export default ConfigurationRow;
