import React, { createContext, useEffect, useState } from 'react'
import { colorLuminance } from '../../utils'

export const NeumorphicStylesContext = createContext()

const obtainMainClass = (cssVariableName) => {
  const rootStyles = getComputedStyle(document.documentElement)
  return rootStyles.getPropertyValue(cssVariableName)
}

const updateColors = (color, colorDifference) => {
  const darkColor = colorLuminance(color, colorDifference * -1)
  const lightColor = colorLuminance(color, colorDifference)
  const darkGradientColor = colorLuminance(color, 0.07)
  const lightGradientColor = colorLuminance(color, -0.1)

  return {
    darkColor,
    mainColor: color,
    lightColor,
    darkGradientColor,
    lightGradientColor,
  }
}

export const StyleProvider = ({ children, colorDifference = 0.15 }) => {
  const [styles, setStyles] = useState({
    darkColor: '',
    mainColor: '',
    lightColor: '',
    darkGradientColor: '',
    lightGradientColor: '',
  });
  const [initialMainColor, setInitialMainColor] = useState('');
  const [editorMode, setEditorMode] = useState(false);
  const [ctrlButton, setCtrlButton] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setEditorMode(true)
    }, 1200)
  }, [])


  useEffect(() => {
    const mainColor = obtainMainClass('--main-color').trim()
    setInitialMainColor(mainColor)
    setStyles(updateColors(mainColor, colorDifference))
  }, [])

  const handleChangeColor = (isChecked) => {
    const newMainColor = isChecked ? '#e0e0e0' : initialMainColor
    document.documentElement.style.setProperty('--main-color', newMainColor)
    setStyles(updateColors(newMainColor, colorDifference))
  }

  return (
    <NeumorphicStylesContext.Provider
      value={{
        styles,
        colorDifference,
        handleChangeColor,
        editorMode,
        setEditorMode,
        ctrlButton,
        setCtrlButton
      }}
    >
      {children}
    </NeumorphicStylesContext.Provider>
  )
}
