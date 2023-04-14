import React, { useContext, useEffect, useState, forwardRef } from 'react'
import {
  angleGradient,
  colorLuminance,
  getContrast,
  getIntFormValue,
  getIfGradient,
} from '../utils'
import { StyleContext } from './context/StyleContext'
import styles from '../style/sass/style.module.scss'

const NeumorphicElement = forwardRef(
  (
    {
      element: Element = 'div',
      className = '',
      form,
      color = null,
      size = 60,
      blur = 60,
      gradient = false,
      shape = 1,
      colorDifference = 0.15,
      activeLightSource = 1,
      distance = 20,
      // borderRadius = 20,
      ...rest
    },
    ref
  ) => {
    const {
      colorDifference: contextColorDifference,
      styles: {
        darkColor: darkColorContext,
        mainColor: mainColorContext,
        lightColor: lightColorContext,
        darkGradientColor: darkGradientColorContext,
        lightGradientColor: lightGradientColorContext,
      },
    } = useContext(StyleContext)

    const [classesToApply, setClassesToApply] = useState(styles.sofShadow)

    useEffect(() => {
      const shapeId = getIntFormValue(form)
      const gradient = getIfGradient(shapeId)

      const { positionX, positionY, angle } = angleGradient(shapeId, distance)

      let colorToUse, usingContextColor
      if (color != null) {
        usingContextColor = false
        colorToUse = color
      } else {
        usingContextColor = true
        colorToUse = mainColorContext
      }

      let darkColor
      let lightColor
      let darkGradientColor
      let lightGradientColor

      if (usingContextColor && colorDifference == contextColorDifference) {
        darkColor = darkColorContext
        lightColor = lightColorContext
        darkGradientColor = darkGradientColorContext
        lightGradientColor = lightGradientColorContext
      } else {
        darkColor = colorLuminance(colorToUse, colorDifference * -1)
        lightColor = colorLuminance(colorToUse, colorDifference)
        darkGradientColor =
          gradient && shape !== 1
            ? colorLuminance(colorToUse, shape === 3 ? 0.07 : -0.1)
            : colorToUse
        lightGradientColor =
          gradient && shape !== 1
            ? colorLuminance(colorToUse, shape === 2 ? 0.07 : -0.1)
            : colorToUse
      }

      //Aplicar solo al elemento del componente no de manera global, Como hacemos esto?
      //Hay que obtener una referencia al elemento del javascript
      document.documentElement.style.cssText = `
      --positionX: ${positionX}px;
      --positionXOpposite: ${positionX * -1}px;
      --positionY: ${positionY}px;
      --positionYOpposite: ${positionY * -1}px;
      --angle: ${angle}deg;
      --blur: ${blur}px;
      --textColor: ${getContrast(colorToUse)};
      --textColorOpposite: ${colorToUse};
      --baseColor: ${colorToUse};
      --darkColor: ${darkColor};
      --lightColor: ${lightColor};
      --firstGradientColor: ${darkGradientColor};
      --secondGradientColor: ${lightGradientColor};
    `

      if (shape === 1) {
        setClassesToApply(`${styles.softShadow} ${styles.pressed}`)
      } else {
        setClassesToApply(`${styles.softShadow}`)
      }

      const background =
        gradient && shape !== 1
          ? `linear-gradient(${angle}deg, ${firstGradientColor}, ${secondGradientColor})`
          : `${colorToUse}`
      const boxShadowPosition = shape === 1 ? 'inset' : ''
      const firstBoxShadow = `${boxShadowPosition} ${positionX}px ${positionY}px ${blur}px ${darkColor}`
      const secondBoxShadow = `${boxShadowPosition} ${positionX * -1}px ${
        positionY * -1
      }px ${blur}px ${lightColor}`
    }, [
      form,
      size,
      blur,
      color,
      mainColorContext,
      darkColorContext,
      lightColorContext,
      contextColorDifference,
    ])

    return (
      <Element
        ref={ref}
        className={`${classesToApply} ${className}`}
        {...rest}
      />
    )
  }
)

export default NeumorphicElement
