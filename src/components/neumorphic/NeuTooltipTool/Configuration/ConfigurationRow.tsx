import { ChangeEvent } from 'react';
import { camelize } from '../../../../utils';
import style from './configuration.module.scss';
interface ConfigurationRowProps {
  className?: string;
  label: string;
  type: string;
  value: number;
  min?: number;
  max?: number;
  step?: number;
  disabled?: boolean;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const ConfigurationRow = ({
  label,
  type,
  value,
  min,
  max,
  step = 1,
  disabled,
  onChange,
}: ConfigurationRowProps) => {
  return (
    <div className={style.NeuTooltipTool_row}>
      <label className={style.NeuTooltipTool_label}>{label}: </label>
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
