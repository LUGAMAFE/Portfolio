import { Dispatch, ReactNode, SetStateAction, createContext, useCallback, useState } from 'react';
import { contextConfigNeomorphicElementShape } from '../../../types/neomorphism';

export interface NeuElementContextInterface {
  contextConfig: contextConfigNeomorphicElementShape;
  setContextConfig: Dispatch<SetStateAction<contextConfigNeomorphicElementShape>>;
  updateContextConfigProp: (property: string, value: string | number) => void;
}
export const NeuElementContext = createContext<NeuElementContextInterface>(
  {} as NeuElementContextInterface
);

interface NeuElementProviderProps {
  children: ReactNode;
}

export const NeuElementProvider = ({ children }: NeuElementProviderProps) => {
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

  const updateContextConfigProp = useCallback(
    <K extends keyof contextConfigNeomorphicElementShape>(
      property: K,
      value: contextConfigNeomorphicElementShape[K]
    ) => {
      setContextConfig((prevContextConfig) => ({
        ...prevContextConfig,
        [property]: value,
      }));
    },
    []
  );

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
