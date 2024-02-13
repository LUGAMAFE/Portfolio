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
  initialMainColorNeon: any,
  colorDifference: number;
  handleChangeColor: (isChecked: boolean) => void;
  handleChangeColorNeon: (e: any) => void;
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
  const [initialMainColorNeon, setInitialMainColorNeon] = useState('');
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
    const mainColorNeon = obtainMainClass('--main-color-neon').trim();
    setInitialMainColorNeon(mainColorNeon);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChangeColor = (isChecked: boolean) => {
    const newMainColor = isChecked ? '#e0e0e0' : initialMainColor;
    document.documentElement.style.setProperty('--main-color', newMainColor);
    setStyles(updateColors(newMainColor, colorDifference));
  };
  const handleChangeColorNeon = (e: any) => {

    if (e.target.value === "Opcion1") {
      const newMainColor = '#000';
      setInitialMainColorNeon(newMainColor)

    }
    else if (e.target.value === "Opcion2") {
      const newMainColor = '#fff';
      setInitialMainColorNeon(newMainColor)
    }
    // const newMainColor = isChecked ? '#000' : initialMainColorNeon;
    // document.documentElement.style.setProperty('--main-color', newMainColor);
  };



  return (

    <NeumorphicStylesContext.Provider
      value={{
        styles,
        initialMainColorNeon,
        colorDifference,
        handleChangeColor,
        handleChangeColorNeon,
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
