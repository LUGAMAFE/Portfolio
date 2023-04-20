import React from 'react';
import { camelize } from '../../utils';
const ConfigurationRow = ({ className, label, type, value, min, max, step = '1', disabled, onChange }) => {
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
  )
}

export default ConfigurationRow
