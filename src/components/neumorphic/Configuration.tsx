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
    updateContextConfigProp('lightSource', +direction);
    const angleMap: { [key: number]: number } = {
      4: 45,
      3: 145,
      1: 225,
      2: 315,
    };
    const angle = angleMap[direction];
    if (angle !== undefined) {
      setAngle(angle);
    }
  };

  const handleDirectionAngle = (angulo: number) => {
    const ranges = [
      { min: 0, max: 90, lightSource: 4 },
      { min: 90, max: 180, lightSource: 3 },
      { min: 180, max: 270, lightSource: 1 },
      { min: 270, max: 360, lightSource: 2 },
    ];
    const match = ranges.find((range) => angulo >= range.min && angulo < range.max);
    if (match) {
      updateContextConfigProp('lightSource', match.lightSource);
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
            setAngle(newAngle || 0);
            handleDirectionAngle(newAngle || 0);
          }}
          onAfterChange={setAngle}
          pointerColor="#000"
          pointerWidth={5}
          angle={0}
        />

        <div style={{ minWidth: '34px' }}>{`${angle}°`}</div>
        <LightSourceSelector
          lightSource={contextConfig.lightSource ?? 1}
          onDirectionChanged={handleDirection}
          disabled={contextConfig.form === 'flat' ? true : false}
        />
      </div>

      <ConfigurationRow
        label={'Size'}
        type={'range'}
        value={contextConfig.size ?? 100}
        onChange={handleSizeChange}
        min={10}
        max={maxSize}
        className={style.row}
        disabled={contextConfig.form === 'flat' ? true : false}
      />
      <ConfigurationRow
        label={'Distance'}
        type={'range'}
        value={contextConfig.distance ?? 45}
        onChange={handleDistanceChange}
        min={2}
        max={50}
        className={style.row}
        disabled={contextConfig.form === 'flat' ? true : false}
      />
      <ConfigurationRow
        label={'Intensity'}
        type={'range'}
        value={contextConfig.intensity ?? 0.15}
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
        value={contextConfig.blur ?? 90}
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
