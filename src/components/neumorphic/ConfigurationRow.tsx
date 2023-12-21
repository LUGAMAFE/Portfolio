import { ChangeEvent } from 'react';
import { camelize } from '../../utils';

interface ConfigurationRowProps {
  className?: string;
  label: string;
  type: string;
  value: string;
  min?: string;
  max?: string;
  step?: string;
  disabled?: boolean;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

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
}: ConfigurationRowProps) => {
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

ConfigurationRow.defaultProps = {
  step: '1',
};

export default ConfigurationRow;
