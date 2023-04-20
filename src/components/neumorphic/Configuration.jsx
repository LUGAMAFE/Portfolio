import React, { useEffect, useContext, useState } from 'react'
import ShapeSwitcher from './ShapeSwitcher'
import ConfigurationRow from './ConfigurationRow'
import { isValidColor, deleteFalsyProperties, getContrast } from '../../utils'
import style from '../../style/sass/components/neumorphic/configuration.module.scss'
import { NeuElementContext } from './context/NeuElementContext'
import { StyleContext } from '../context/StyleContext'
import LightSourceSelector from './LightSourceSelector'

const maxSize = 500

const Configuration = () => {
  const { contextConfig, updateContextConfigProp, setContextConfig } =
    useContext(NeuElementContext)
  const [color, setColor] = useState("#ffffff");
  const [colorInputText, setColorInputText] = useState("#ffffff");
  const [defaultCssVariables, setDefaultCssVariables] = useState({})
  const {
    styles: { mainColor: mainColorContext },
  } = useContext(StyleContext)

  const copyToClipboard = () => {
    const textConfig = `neumorphicOptions={${JSON.stringify(
      deleteFalsyProperties(contextConfig)
    )}}`
    navigator.clipboard.writeText(textConfig)
    alert(`Copied neumorphic element config: \n ${textConfig}`)
  }

  const handleColorChange = (e) => {
    const { value } = e.target
    setColorInputText(value);
    if (isValidColor(value)) {
      updateContextConfigProp('color', value);
    }
  }

  const handleSizeChange = (e) => {
    const { value } = e.target;
    setContextConfig((prev) => ({
      ...prev,
      size: value,
      blur: Math.round(value * 0.2),
      distance: Math.round(value * 0.1),
    }))
  }

  const handleDistanceChange = (e) => {
    const { value } = e.target;
    setContextConfig((prev) => ({
      ...prev,
      distance: value,
      blur: value * 2
    }))
  }

  const handleShape = (e) => {
    updateContextConfigProp('form', e.target.name)
  }

  const handleDirection = (e) => {
    updateContextConfigProp('lightSource', +e.target.name)
  }

  useEffect(() => {
    const updateColorAndCssVariables = (newColor) => {
      setColor(newColor);
      setColorInputText(newColor);
      setDefaultCssVariables({
        '--textColor': `${getContrast(newColor)}`,
        '--textColorOpposite': `${newColor}`,
      })
    }

    if (!contextConfig.color) {
      updateColorAndCssVariables(mainColorContext || '#ffffff')
    } else {
      updateColorAndCssVariables(contextConfig.color)
    }
  }, [contextConfig.color, mainColorContext])

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
      <LightSourceSelector
        lightSource={contextConfig.lightSource}
        onClick={handleDirection}
        disabled={contextConfig.form === 'flat' ? true : false}
      />
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
  )
}

export default Configuration
