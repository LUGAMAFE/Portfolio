import { ChangeEvent, Dispatch, SetStateAction, createContext, useEffect, useState } from 'react';
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
  isChecked: boolean;
  ctrlButton: boolean;
  setCtrlButton: Dispatch<SetStateAction<boolean>>;
  handleChangeColorNav: (event: ChangeEvent<HTMLInputElement>) => void;
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
    gradiantColorBoxShadow: "#ffb9bf",
  });
  const [editorMode, setEditorMode] = useState(false);
  const [ctrlButton, setCtrlButton] = useState(true);
  const [isChecked, setIsChecked] = useState(false);

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

  const handleChangeColorNav = (event: ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked); // Actualiza el estado isChecked
    handleChangeColor(event.target.checked); // Llama a handleChangeColor con el valor actual
  };
  const handleChangeColorNeon = (e: any) => {
    let newMainColor = '';
    switch (e) {
      case "Opcion1":
        newMainColor = 'linear-gradient(90deg, #ff6161 0%, #f6d 100%)';
        setinitialColorNeonSVG({
          firstGradiantColor: "#FF6161",
          secondGradiantColor: "#FF66DD",
          gradiantColorBoxShadow: "#ffb9bf",
        })
        break;
      case "Opcion2":
        newMainColor = 'linear-gradient(90deg, #009EFD 0%, #2AF598 100%)'; // Corregido el color
        setinitialColorNeonSVG({
          firstGradiantColor: "#009EFD",
          secondGradiantColor: "#2AF598",
          gradiantColorBoxShadow: "#509eff",
        })
        break;
      case "Opcion3":
        newMainColor = 'linear-gradient(90deg, #FF1741 0%, #FF6174 100%)';
        setinitialColorNeonSVG({
          firstGradiantColor: "#FF1741",
          secondGradiantColor: "#FF6174",
          gradiantColorBoxShadow: " #FF355F",
        })
        break;
      default:
        break;
    }

    if (newMainColor) {
      setInitialMainColorNeon(newMainColor);
    }
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
        handleChangeColorNav,
        isChecked,
      }}
    >
      {children}
    </NeumorphicStylesContext.Provider>

  );
};
