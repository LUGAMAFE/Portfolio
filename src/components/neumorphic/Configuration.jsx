import React, { useEffect, useContext, useState, useRef } from 'react'
import ShapeSwitcher from './ShapeSwitcher'
import ConfigurationRow from './ConfigurationRow'
import { isValidColor } from '../../utils'
import style from '../../style/sass/components/neumorphic/configuration.module.scss'
// import '../../style/sass/components/neumorphic/inputs.scss';
import { NeuElementContext } from './context/NeuElementContext'
import { deleteFalsyProperties } from '../../utils'
import { StyleContext } from '../context/StyleContext'

const Configuration = ({}) => {
  const { contextConfig, updateContextConfigProp } =
    useContext(NeuElementContext)
  const [color, setColor] = useState('#ffffff')
  const [maxSize, setMaxSize] = useState(410)
  const {
    styles: { mainColor: mainColorContext },
  } = useContext(StyleContext)

  const copyToClipboard = (e) => {
    let textConfig = JSON.stringify(deleteFalsyProperties(contextConfig))
    // Copy the text inside the text field
    textConfig = `neumorphicOptions={${textConfig}}`
    navigator.clipboard.writeText(textConfig)

    // Alert the copied text
    alert(`Copied neumorphic element config: \n ${textConfig}`)
  }

  const colorOnChange = ({ target: { value } }) => {
    if (isValidColor(value)) {
      updateContextConfigProp('color', e.target.value)
    }
  }

  const handleShape = ({ target: { name } }) => {
    updateContextConfigProp('form', name)
  }

  useEffect(() => {
    if (!contextConfig.color) {
      if (!mainColorContext) {
        setColor('#ffffff')
      }
      setColor(mainColorContext)
    } else {
      setColor(contextConfig.color)
    }
  }, [contextConfig.color, mainColorContext])

  return (
    <div className={style.container}>
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
          value={color}
          onChange={colorOnChange}
        />
      </div>
      <ConfigurationRow
        label={'Size'}
        type={'range'}
        value={contextConfig.size}
        onChange={(e) => updateContextConfigProp('size', e.target.value)}
        min={'10'}
        max={maxSize}
        className={style.row}
        disabled={contextConfig.form === 'flat' ? true : false}
      />
      <ConfigurationRow
        label={'Distance'}
        type={'range'}
        value={contextConfig.distance}
        onChange={(e) => updateContextConfigProp('distance', e.target.value)}
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
        {/* <label htmlFor="noShadow">
          Shadow:
          <input
            type="checkbox"
            name="noShadow"
            checked={contextConfig.noShadows}
            onChange={(e) => {
              //console.log(e.target.checked);
              updateContextConfigProp('noShadows', e.target.checked)
            }}
          />
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
