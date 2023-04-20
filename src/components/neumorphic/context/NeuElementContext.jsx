import React, { createContext, useCallback, useState, useEffect } from 'react'

export const NeuElementContext = createContext()

export const NeuElementProvider = ({ children }) => {
  const [contextConfig, setContextConfig] = useState({
    form: null,
    color: null,
    size: null,
    intensity: null,
    lightSource: null,
    distance: null,
    blur: null,
    angle: null
  })

  const updateContextConfigProp = useCallback((property, value) => {
    if(property === 'size') {
      setContextConfig((prevContextConfig) => {
        return {
          ...prevContextConfig,
          [property]: value,
          blur: "",
          distance: "",
        }
      });
      return;
    }
    setContextConfig((prevContextConfig) => {
      return {
        ...prevContextConfig,
        [property]: value,
      }
    });
  }, []);

  return (
    <NeuElementContext.Provider
      value={{
        contextConfig,
        setContextConfig,
        updateContextConfigProp
      }}
    >
      {children}
    </NeuElementContext.Provider>
  )
}
