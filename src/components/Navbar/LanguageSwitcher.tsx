import { useState } from 'react';
import { RealNeumorphicElementProps } from '../../interfaces/neomorphism';
import style from '../../style/sass/navbar.module.scss';
import NeumorphicElement from '../neumorphic/NeumorphicElement';

export const LanguageSwitcher = () => {
  const initialButtonConfigs: Array<RealNeumorphicElementProps> = [
    {
      id: 'esBoton',
      text: 'Español',
      className: style.esBoton,
      neumorphicOptions: {
        form: 'flat',
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
        form: 'pressed',
        size: 100,
        intensity: 0.13,
        lightSource: 1,
      },
    },
  ];

  const [buttonConfigs, setButtonConfigs] = useState(initialButtonConfigs);
  const handleButtonClick = (id: string | number) => {
    setButtonConfigs((prev) =>
      prev.map((button) =>
        button.id === id
          ? {
              ...button,
              neumorphicOptions: {
                ...button.neumorphicOptions,
                form: button.neumorphicOptions
                  ? button.neumorphicOptions.form === 'flat'
                    ? 'pressed'
                    : 'flat'
                  : 'flat',
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
        form: 'level',
        size: 55,
        intensity: 0.19,
        lightSource: 1,
        distance: 6,
        blur: 11,
      }}
    >
      <div className={style.buttons}>
        {buttonConfigs.map((button) => (
          <NeumorphicElement
            key={button.id}
            element={'button'}
            onClick={() => handleButtonClick(button.id ? button.id : '')}
            neumorphicOptions={button.neumorphicOptions}
            className={button.className}
          >
            <p>{button.text}</p>
          </NeumorphicElement>
        ))}
      </div>
    </NeumorphicElement>
  );
};
