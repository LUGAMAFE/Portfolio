import React from 'react'
import { NeuElementProvider } from './context/NeuElementContext'
import RealNeumorphicElement from './RealNeumorphicElement'
const NeumorphicElement = ({ ...props }) => {
  return (
    <NeuElementProvider>
      <RealNeumorphicElement {...props} />
    </NeuElementProvider>
  )
}

export default NeumorphicElement
