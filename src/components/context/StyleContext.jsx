import { useEffect, useMemo } from 'react'
import { createContext } from 'react'
import React, { useState } from 'react'
import { colorLuminance } from '../../utils'

export const StyleContext = createContext()

const obtainMainClass = (cssVaribleName) => {
  const rootStyles = getComputedStyle(document.documentElement)
  return rootStyles.getPropertyValue(cssVaribleName)
}

export const StyleProvider = ({ children, colorDifference = 0.15 }) => {
  const [styles, setStyles] = useState({
    darkColor: '',
    mainColor: '',
    lightColor: '',
    darkGradientColor: '',
    lightGradientColor: '',
  })

  const [initialMainColor, setInitialMainColor] = useState('')

  useEffect(() => {
    const mainColor = obtainMainClass('--main-color')
    setInitialMainColor(mainColor)
    const darkColor = colorLuminance(mainColor, colorDifference * -1)
    const lightColor = colorLuminance(mainColor, colorDifference)
    const darkGradientColor = colorLuminance(mainColor, 0.07)
    const lightGradientColor = colorLuminance(mainColor, -0.1)
    setStyles({
      darkColor,
      mainColor: mainColor,
      lightColor,
      darkGradientColor,
      lightGradientColor,
    })
  }, [])

  const handleChangeColor = (isChecked) => {
    let newMainColor = isChecked ? '#d9d6d1' : initialMainColor
    console.log(newMainColor)

    document.documentElement.style.cssText = `
      --main-color: ${newMainColor};
    `

    setStyles({
      mainColor: newMainColor,
    })
  }

  return (
    <StyleContext.Provider
      value={{
        styles,
        colorDifference,
        handleChangeColor,
      }}
    >
      {children}
    </StyleContext.Provider>
  )
}
