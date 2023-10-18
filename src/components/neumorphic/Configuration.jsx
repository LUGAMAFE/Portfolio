import { useContext, useEffect, useState } from 'react';
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
  const [color, setColor] = useState('#ffffff');
  const [colorInputText, setColorInputText] = useState('#ffffff');
  const [defaultCssVariables, setDefaultCssVariables] = useState({});
  const {
    styles: { mainColor: mainColorContext },
  } = useContext(NeumorphicStylesContext);

  const copyToClipboard = () => {
    const textConfig = `neumorphicOptions={${JSON.stringify(
      deleteFalsyProperties(contextConfig)
    )}}`;
    navigator.clipboard.writeText(textConfig);
    alert(`Copied neumorphic element config: \n ${textConfig}`);
  };

  const handleColorChange = (e) => {
    const { value } = e.target;
    setColorInputText(value);
    if (isValidColor(value)) {
      updateContextConfigProp('color', value);
    }
  };

  const handleSizeChange = (e) => {
    const { value } = e.target;
    setContextConfig((prev) => ({
      ...prev,
      size: value,
      blur: Math.round(value * 0.2),
      distance: Math.round(value * 0.1),
    }));
  };

  const handleDistanceChange = (e) => {
    const { value } = e.target;
    setContextConfig((prev) => ({
      ...prev,
      distance: value,
      blur: value * 2,
    }));
  };

  const handleShape = (e) => {
    updateContextConfigProp('form', e.target.name);
  };

  const handleDirectionAngle = (angulo) => {
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
  const handleDirection = (e) => {
    updateContextConfigProp('lightSource', +e.target.name);
    if (e.target.name == 3) {
      setAngle(45);
    } else if (e.target.name == 4) {
      setAngle(145);
    } else if (e.target.name == 1) {
      setAngle(225);
    } else if (e.target.name == 2) {
      setAngle(315);
    } else {
      return -1;
    }
  };

  const [angle, setAngle] = useState(() => {
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
    const updateColorAndCssVariables = (newColor) => {
      setColor(newColor);
      setColorInputText(newColor);
      setDefaultCssVariables({
        '--textColor': `${getContrast(newColor)}`,
        '--textColorOpposite': `${newColor}`,
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
            setAngle(newAngle);
            handleDirectionAngle(newAngle);
          }}
          onAfterChange={setAngle}
          pointerColor="#000"
          pointerWidth={5}
        />

        <div style={{ minWidth: '34px' }}>{`${angle}°`}</div>
        <LightSourceSelector
          lightSource={contextConfig.lightSource}
          onClick={handleDirection}
          disabled={contextConfig.form === 'flat' ? true : false}
        />
      </div>

      <ConfigurationRow
        label={'Size'}
        type={'range'}
        value={contextConfig.size}
        onChange={handleSizeChange}
        min={'10'}
        max={maxSize}
        className={style.row}
        disabled={contextConfig.form === 'flat' ? true : false}
      />
      <ConfigurationRow
        label={'Distance'}
        type={'range'}
        value={contextConfig.distance}
        onChange={handleDistanceChange}
        min={'2'}
        max={'50'}
        className={style.row}
        disabled={contextConfig.form === 'flat' ? true : false}
      />
      <ConfigurationRow
        label={'Intensity'}
        type={'range'}
        value={contextConfig.intensity}
        onChange={(e) => updateContextConfigProp('intensity', e.target.value)}
        min={'0.01'}
        max={'0.9'}
        step={'0.01'}
        className={style.row}
        disabled={contextConfig.form === 'flat' ? true : false}
      />
      <ConfigurationRow
        label={'Blur'}
        type={'range'}
        value={contextConfig.blur}
        onChange={(e) => updateContextConfigProp('blur', e.target.value)}
        min={'0'}
        max={'100'}
        className={style.row}
        disabled={contextConfig.form === 'flat' ? true : false}
      />
      {/* {contextConfig.form === 'flat' && (
        <ConfigurationRow
          label={'Angle'}
          type={'range'}
          value={contextConfig.angle}
          onChange={(e) => updateContextConfigProp('angle', e.target.value)}
          min={'0'}
          max={'360'}
          className={style.row}
        />
      )} */}
      <div className={style.row}>
        {/* <label
          htmlFor="noShadow"
          // checked={this.state.active}
          // onClick={this.handleClick}
        >
          Shadow:
          <input type="checkbox" name="noShadow" />
        </label> */}
      </div>
      <button className={style.copy} onClick={copyToClipboard}>
        Copy Config
      </button>
      <ShapeSwitcher shape={contextConfig.form} setShape={handleShape} />
    </div>
  );
};

export default Configuration;
