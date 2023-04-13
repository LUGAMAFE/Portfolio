import React, { useMemo } from 'react'

const NeumorphicElement = React.forwardRef(
  (
    {
      element: Element = 'div',
      className,
      style,
      form,
      size,
      positionX,
      positionY,
      angle,
      blur,
      color,
      darkColor,
      lightColor,
      firstGradientColor,
      secondGradientColor,
      radius,
      maxRadius,
      gradient,
      shape,
      ...rest
    },
    ref
  ) => {
    const customStyles = useMemo(() => {
      const borderRadius =
        parseInt(radius) === maxRadius ? '50%' : radius + 'px'
      const background =
        gradient && shape !== 1
          ? `linear-gradient(${angle}deg, ${firstGradientColor}, ${secondGradientColor})`
          : `${color}`
      const boxShadowPosition = shape === 1 ? 'inset' : ''
      const firstBoxShadow = `${boxShadowPosition} ${positionX}px ${positionY}px ${blur}px ${darkColor}`
      const secondBoxShadow = `${boxShadowPosition} ${positionX * -1}px ${
        positionY * -1
      }px ${blur}px ${lightColor}`

      return {
        borderRadius,
        firstBoxShadow,
        secondBoxShadow,
        boxShadowPosition,
        background,
        ...style,
      }
    }, [
      form,
      size,
      style,
      positionX,
      positionY,
      angle,
      blur,
      color,
      darkColor,
      lightColor,
      firstGradientColor,
      secondGradientColor,
      radius,
    ])

    return (
      <Element ref={ref} className={className} style={customStyles} {...rest} />
    )
  }
)

export default NeumorphicElement
