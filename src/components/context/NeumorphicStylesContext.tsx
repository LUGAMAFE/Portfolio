import { Dispatch, SetStateAction, createContext, useEffect, useState } from 'react';
import { colorLuminance } from '../../utils';

export interface NeumorphicStylesContext {
  styles: {
    darkColor: string;
    mainColor: string;
    lightColor: string;
    darkGradientColor: string;
    lightGradientColor: string;
  };
  colorDifference: number;
  handleChangeColor: (isChecked: boolean) => void;
  editorMode: boolean;
  setEditorMode: Dispatch<SetStateAction<boolean>>;
  ctrlButton: boolean;
  setCtrlButton: Dispatch<SetStateAction<boolean>>;
}

export interface StyleProviderProps {
  children?: React.ReactNode;
  colorDifference?: number;
}
export const NeumorphicStylesContext = createContext<NeumorphicStylesContext>(
  {} as NeumorphicStylesContext
);

const obtainMainClass = (cssVariableName: string) => {
  const rootStyles = getComputedStyle(document.documentElement);
  return rootStyles.getPropertyValue(cssVariableName);
};

const updateColors = (color: string, colorDifference: number) => {
  const darkColor = colorLuminance(color, colorDifference * -1);
  const lightColor = colorLuminance(color, colorDifference);
  const darkGradientColor = colorLuminance(color, 0.07);
  const lightGradientColor = colorLuminance(color, -0.1);

  return {
    darkColor,
    mainColor: color,
    lightColor,
    darkGradientColor,
    lightGradientColor,
  };
};

export const StyleProvider = ({ children, colorDifference = 0.15 }: StyleProviderProps) => {
  const [styles, setStyles] = useState({
    darkColor: '',
    mainColor: '',
    lightColor: '',
    darkGradientColor: '',
    lightGradientColor: '',
  });
  const [initialMainColor, setInitialMainColor] = useState('');
  const [editorMode, setEditorMode] = useState(false);
  const [ctrlButton, setCtrlButton] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setEditorMode(true);
    }, 1200);
  }, []);

  useEffect(() => {
    const mainColor = obtainMainClass('--main-color').trim();
    setInitialMainColor(mainColor);
    setStyles(updateColors(mainColor, colorDifference));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChangeColor = (isChecked: boolean) => {
    const newMainColor = isChecked ? '#e0e0e0' : initialMainColor;
    document.documentElement.style.setProperty('--main-color', newMainColor);
    setStyles(updateColors(newMainColor, colorDifference));
  };


  return (

    <NeumorphicStylesContext.Provider
      value={{
        styles,
        colorDifference,
        handleChangeColor,
        editorMode,
        setEditorMode,
        ctrlButton,
        setCtrlButton,
      }}
    >
      {children}
    </NeumorphicStylesContext.Provider>

  );
};
