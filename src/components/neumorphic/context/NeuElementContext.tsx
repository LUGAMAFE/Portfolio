import { Dispatch, SetStateAction, createContext, useCallback, useState } from 'react';
export interface NeuElementContextInterface {
  contextConfig: contextConfigNeomorphicElementShape;
  setContextConfig: Dispatch<SetStateAction<contextConfigNeomorphicElementShape>>;
  updateContextConfigProp: (property: string, value: string | number) => void;
}
export const NeuElementContext = createContext<NeuElementContextInterface>(
  {} as NeuElementContextInterface
);

export interface contextConfigNeomorphicElementShape {
  [key: string]: number | string | null;
  form: 'concave' | 'convex' | 'level' | 'pressed' | 'flat' | null;
  color: string | null;
  size: number | string | null;
  intensity: number | null;
  lightSource: number | null;
  distance: number | null;
  blur: number | null;
}

interface Props {
  children: JSX.Element | JSX.Element[];
}

export const NeuElementProvider = ({ children }: Props) => {
  const [contextConfig, setContextConfig] = useState<contextConfigNeomorphicElementShape>({
    form: null,
    color: null,
    size: null,
    intensity: null,
    angleLightSource: null,
    lightSource: null,
    distance: null,
    blur: null,
  });

  const updateContextConfigProp = useCallback((property: string, value: number | string) => {
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
