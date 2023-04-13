import React, { useState } from 'react'
import { StyleContext } from './StyleContext'

const themeStyle = {
  primaryColor: '',
  secondaryColor: '',
  thirdColor: '',
}

export const StyleProvider = ({ children }) => {
  const [style, setStyle] = useState(themeStyle)
  const [size, setSize] = useState(300)
  const [radius, setRadius] = useState(50)
  const [shape, setShape] = useState(0)
  const [distance, setDistance] = useState(20)
  const [colorDifference, setColorDifference] = useState(0.15)
  const [maxSize, setMaxSize] = useState(410)
  const [maxRadius, setMaxRadius] = useState(150)
  const [gradient, setGradient] = useState(false)
  const [codeString, setCodeString] = useState('')

  const handleChangeColor = (isChecked) => {
    let newColor = isChecked ? '#e9e8e4' : '#16171b'
    let newDarkColor = isChecked ? '#d9d6d1' : '#26292e'
    let newDarkColor2 = isChecked ? '#cdc8c2' : '#32373d'

    document.documentElement.style.cssText = `
      --primary-color-1: ${newColor};
      --primary-color-2: ${newDarkColor};
      --primary-color-3: ${newDarkColor2};
    `

    setStyle({
      primaryColor: newColor,
      secondaryColor: style.secondaryColor,
      thirdColor: newDarkColor2,
    })
  }

  const handleDistance = ({ target: { value } }) => {
    setDistance(value)
    setBlur(value * 2)
  }

  const handleSize = ({ target: { value } }) => {
    setSize(value)
    setDistance(Math.round(value * 0.1))
    setBlur(Math.round(value * 0.2))
    setMaxRadius(Math.round(value / 2))
  }

  const handleShape = ({
    target: {
      dataset: { shape },
    },
  }) => {
    const shapeId = parseInt(shape)
    setShape(shapeId)
    if (shapeId === 2 || shapeId === 3) {
      setGradient(true)
    } else {
      setGradient(false)
    }
  }
  const handleRadius = ({ target: { value } }) => {
    setRadius(value)
  }

  const handleColorDifference = ({ target: { value } }) => {
    setColorDifference(value / 100)
  }

  const handleMaxSize = ({ target: { value } }) => {
    setMaxSize(value)
  }

  const handleMaxRadius = ({ target: { value } }) => {
    setMaxRadius(value)
  }

  const handleGradient = (isChecked) => {
    setGradient(isChecked)
  }

  return (
    <StyleContext.Provider
      value={{
        style,
        handleChangeColor,
        size,
        handleSize,
        radius,
        handleRadius,
        shape,
        handleShape,
        distance,
        handleDistance,
        colorDifference,
        handleColorDifference,
        maxSize,
        handleMaxSize,
        maxRadius,
        handleMaxRadius,
        gradient,
        handleGradient,
        codeString,
        setCodeString,
      }}
    >
      {children}
    </StyleContext.Provider>
  )
}
