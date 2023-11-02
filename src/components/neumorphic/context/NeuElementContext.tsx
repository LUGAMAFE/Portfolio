import { createContext, useCallback, useState } from 'react';

export const NeuElementContext = createContext({});

export interface contextConfigNeomorphicElement {
  form?: string | null;
  color?: string | null;
  size?: number | string | null;
  intensity?: number | null;
  lightSource?: number | null;
  angleLightSource?: number | null;
  distance?: string | null;
  blur?: string | null;
}
interface ContextConfigPropInterface {
  property: keyof contextConfigNeomorphicElement;
  value: string | number | null;
}

interface Props {
  children: JSX.Element | JSX.Element[];
}

export const NeuElementProvider = ({ children }: Props) => {
  const [contextConfig, setContextConfig] = useState<contextConfigNeomorphicElement>({
    form: null,
    color: null,
    size: null,
    intensity: null,
    angleLightSource: null,
    lightSource: null,
    distance: null,
    blur: null,
  });

  const updateContextConfigProp = useCallback(({ property, value }: ContextConfigPropInterface) => {
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
