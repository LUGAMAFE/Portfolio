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
  initialMainColorNeon: string,
  initialColorNeonSVG: object,
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
  const [initialColorNeonSVG, setinitialColorNeonSVG] = useState({
    firstGradiantColor: "#FF6161",
    secondGradiantColor: "#FF66DD",
  });
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
    let newMainColor = '';


    switch (e.target.value) {
      case "Opcion1":
        newMainColor = 'linear-gradient(90deg, #ff6161 0%, #f6d 100%)';
        setinitialColorNeonSVG({
          firstGradiantColor: "#FF6161",
          secondGradiantColor: "#FF66DD",
        })
        break;
      case "Opcion2":
        newMainColor = 'linear-gradient(90deg, #009EFD 0%, #2AF598 100%)'; // Corregido el color
        setinitialColorNeonSVG({
          firstGradiantColor: "#009EFD",
          secondGradiantColor: "#2AF598",
        })
        break;
      case "Opcion3":
        newMainColor = 'linear-gradient(90deg, #FF1741 0%, #FF6174 100%)';
        setinitialColorNeonSVG({
          firstGradiantColor: "#FF1741",
          secondGradiantColor: "#FF6174",
        })
        break;
      default:
        // Opcional: manejar caso por defecto o dejar vacío si no es necesario
        break;
    }

    if (newMainColor) {
      setInitialMainColorNeon(newMainColor);
    }

    // Si deseas aplicar el color directamente como una variable CSS (comentado en tu código original),
    // puedes descomentar y usar la siguiente línea:
    // document.documentElement.style.setProperty('--main-color', newMainColor);
  };



  return (

    <NeumorphicStylesContext.Provider
      value={{
        styles,
        initialMainColorNeon,
        initialColorNeonSVG,
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
