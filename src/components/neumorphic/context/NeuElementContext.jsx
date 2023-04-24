import { createContext, useCallback, useState } from 'react';

export const NeuElementContext = createContext();

export const NeuElementProvider = ({ children }) => {
  const [contextConfig, setContextConfig] = useState({
    form: null,
    color: null,
    size: null,
    intensity: null,
    lightSource: null,
    distance: null,
    blur: null,
  });

  const updateContextConfigProp = useCallback((property, value) => {
    setContextConfig((prevContextConfig) => ({
      ...prevContextConfig,
      [property]: value,
    }));
  }, []);

  return (
    <NeuElementContext.Provider
      value={{
        contextConfig,
        setContextConfig,
        updateContextConfigProp,
      }}
    >
      {children}
    </NeuElementContext.Provider>
  );
};
