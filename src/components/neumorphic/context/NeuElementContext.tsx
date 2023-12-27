import { Dispatch, ReactNode, SetStateAction, createContext, useCallback, useState } from 'react';
import { NeomorphicElementShape } from '../../../types/neomorphism';

export interface NeuElementContextInterface {
  contextConfig: NeomorphicElementShape;
  setContextConfig: Dispatch<SetStateAction<NeomorphicElementShape>>;
  updateContextConfigProp: <K extends keyof NeomorphicElementShape>(
    property: K,
    value: NeomorphicElementShape[K]
  ) => void;
}
export const NeuElementContext = createContext<NeuElementContextInterface>(
  {} as NeuElementContextInterface
);

interface NeuElementProviderProps {
  children: ReactNode;
}

export const NeuElementProvider = ({ children }: NeuElementProviderProps) => {
  const [contextConfig, setContextConfig] = useState<NeomorphicElementShape>({});

  const updateContextConfigProp = useCallback(
    <K extends keyof NeomorphicElementShape>(property: K, value: NeomorphicElementShape[K]) => {
      setContextConfig((prevContextConfig: NeomorphicElementShape) => ({
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