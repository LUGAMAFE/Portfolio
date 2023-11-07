import { ChangeEvent, useContext, useEffect, useState } from 'react';
import style from '../../style/sass/components/neumorphic/configuration.module.scss';
import { deleteFalsyProperties, getContrast, isValidColor } from '../../utils';
import AnglePicker from '../ReactAnglePicker/AnglePicker';
import { NeumorphicStylesContext } from '../context/NeumorphicStylesContext';
import ConfigurationRow from './ConfigurationRow';
import LightSourceSelector from './LightSourceSelector';
import ShapeSwitcher from './ShapeSwitcher';
import { NeuElementContext } from './context/NeuElementContext';

const maxSize = 500;

const Configuration = () => {
  const { contextConfig, updateContextConfigProp, setContextConfig } =
    useContext(NeuElementContext);
  const [color, setColor] = useState<string>('#ffffff');
  const [colorInputText, setColorInputText] = useState<string>('#ffffff');
  const [defaultCssVariables, setDefaultCssVariables] = useState<Record<string, string>>({});
  const {
    styles: { mainColor: mainColorContext },
  } = useContext(NeumorphicStylesContext);

  const copyToClipboard = () => {
    const textConfig = `neumorphicOptions=${JSON.stringify(deleteFalsyProperties(contextConfig))}`;
    navigator.clipboard.writeText(textConfig);
    alert(`Copied neumorphic element config: \n ${textConfig}`);
  };

  const handleColorChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setColorInputText(value);
    if (isValidColor(value)) {
      updateContextConfigProp('color', value);
    }
  };

  const handleSizeChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setContextConfig((prev) => ({
      ...prev,
      size: Number(value),
      blur: Math.round(Number(value) * 0.2),
      distance: Math.round(Number(value) * 0.1),
    }));
  };

  const handleDistanceChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setContextConfig((prev) => ({
      ...prev,
      distance: Number(value),
      blur: Number(value) * 2,
    }));
  };

  const handleShape = (name: string) => {
    updateContextConfigProp('form', name);
  };

  const handleDirection = (direction: number): void => {
    updateContextConfigProp('lightSource', +name);
    if (direction === 3) {
      setAngle(45);
    } else if (direction === 4) {
      setAngle(145);
    } else if (direction === 1) {
      setAngle(225);
    } else if (direction === 2) {
      setAngle(315);
    }
  };

  const handleDirectionAngle = (angulo: number) => {
    if (angulo >= 0 && angulo < 90) {
      updateContextConfigProp('lightSource', 3);
    } else if (angulo >= 90 && angulo < 180) {
      updateContextConfigProp('lightSource', 4);
    } else if (angulo >= 180 && angulo < 270) {
      updateContextConfigProp('lightSource', 1);
    } else if (angulo >= 270 && angulo < 360) {
      updateContextConfigProp('lightSource', 2);
    } else {
      return -1;
    }
  };

  const [angle, setAngle] = useState<number>(() => {
    switch (contextConfig.lightSource) {
      case 1:
        return 225;
      case 2:
        return 315;
      case 3:
        return 45;
      case 4:
        return 135;
      default:
        return 0;
    }
  });

  useEffect(() => {
    const updateColorAndCssVariables = (newColor: string) => {
      setColor(newColor);
      setColorInputText(newColor);
      setDefaultCssVariables({
        '--textColor': `${getContrast(newColor)}`,
        '--textColorOpposite': newColor,
      });
    };

    if (!contextConfig.color) {
      updateColorAndCssVariables(mainColorContext || '#ffffff');
    } else {
      updateColorAndCssVariables(contextConfig.color);
    }
  }, [contextConfig.color, mainColorContext]);

  return (
    <div className={style.container} style={defaultCssVariables}>
      <div className={style.row}>
        <label htmlFor="color">Pick a color:</label>
        <input
          type="color"
          name="color"
          onChange={(e) => updateContextConfigProp('color', e.target.value)}
          placeholder="#ffffff"
          value={color}
          id="color"
        />
        <label htmlFor="colorInput" style={{ paddingLeft: '10px' }}>
          or
        </label>
        <input
          type="text"
          placeholder="#ffffff"
          name="color"
          id="colorInput"
          value={colorInputText}
          onChange={handleColorChange}
        />
      </div>
      <div className={`${style.row} ${style.label}`}>
        <label htmlFor="anglePicker">Pick an angle:</label>

        <AnglePicker
          id="anglePicker"
          value={angle}
          onChange={(newAngle) => {
            setAngle(newAngle ? newAngle : 0);
            handleDirectionAngle(newAngle ? newAngle : 0);
          }}
          onAfterChange={setAngle}
          pointerColor="#000"
          pointerWidth={5}
          angle={0}
        />

        <div style={{ minWidth: '34px' }}>{`${angle}°`}</div>
        <LightSourceSelector
          lightSource={contextConfig.lightSource ? contextConfig.lightSource : 1}
          onDirectionChanged={handleDirection}
          disabled={contextConfig.form === 'flat' ? true : false}
        />
      </div>

      <ConfigurationRow
        label={'Size'}
        type={'range'}
        value={contextConfig.size ? contextConfig.size : 100}
        onChange={handleSizeChange}
        min={10}
        max={maxSize}
        className={style.row}
        disabled={contextConfig.form === 'flat' ? true : false}
      />
      <ConfigurationRow
        label={'Distance'}
        type={'range'}
        value={contextConfig.distance ? contextConfig.distance : 45}
        onChange={handleDistanceChange}
        min={2}
        max={50}
        className={style.row}
        disabled={contextConfig.form === 'flat' ? true : false}
      />
      <ConfigurationRow
        label={'Intensity'}
        type={'range'}
        value={contextConfig.intensity ? contextConfig.intensity : 0.15}
        onChange={(e) => updateContextConfigProp('intensity', e.target.value)}
        min={0.01}
        max={0.9}
        step={0.01}
        className={style.row}
        disabled={contextConfig.form === 'flat' ? true : false}
      />
      <ConfigurationRow
        label={'Blur'}
        type={'range'}
        value={contextConfig.blur ? contextConfig.blur : 90}
        onChange={(e) => updateContextConfigProp('blur', e.target.value)}
        min={0}
        max={100}
        className={style.row}
        disabled={contextConfig.form === 'flat' ? true : false}
      />

      <div className={style.row}></div>
      <button className={style.copy} onClick={copyToClipboard}>
        Copy Config
      </button>
      <ShapeSwitcher shape={contextConfig.form} setShape={handleShape} />
    </div>
  );
};

export default Configuration;
