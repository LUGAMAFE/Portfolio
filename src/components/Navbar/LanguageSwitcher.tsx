import { useState } from 'react';
import style from '../../style/sass/navbar.module.scss';
import { FormShape, RealNeumorphicElementProps } from '../../types/neomorphism';
import NeumorphicElement from '../neumorphic/NeumorphicElement';
import { LanguageButton } from './LanguageButton';

export const LanguageSwitcher = () => {
  const initialButtonConfigs: RealNeumorphicElementProps[] = [
    {
      id: 'esBoton',
      text: 'Español',
      className: style.esBoton,
      neumorphicOptions: {
        form: FormShape.Level,
        size: 100,
        intensity: 0.15,
        lightSource: 1,
      },
    },
    {
      id: 'InButton',
      text: 'English',
      className: style.InButton,
      neumorphicOptions: {
        form: FormShape.Pressed,
        size: 100,
        intensity: 0.13,
        lightSource: 1,
      },
    },
  ];

  const [buttonConfigs, setButtonConfigs] = useState(initialButtonConfigs);
  const handleButtonClick = (id: string) => {
    setButtonConfigs((prev) =>
      prev.map((button) =>
        button.id === id
          ? {
              ...button,
              neumorphicOptions: {
                ...button.neumorphicOptions,
                form:
                  button.neumorphicOptions?.form === FormShape.Flat
                    ? FormShape.Pressed
                    : FormShape.Flat,
              },
            }
          : button
      )
    );
  };
  return (
    <NeumorphicElement
      className={style.changeIdiom}
      neumorphicOptions={{
        form: FormShape.Level,
        size: 55,
        intensity: 0.19,
        lightSource: 1,
        distance: 6,
        blur: 11,
      }}
    >
      <div className={style.buttons}>
        {buttonConfigs.map((button, index) => (
          <LanguageButton key={index} config={button} onClick={handleButtonClick} />
        ))}
      </div>
    </NeumorphicElement>
  );
};
