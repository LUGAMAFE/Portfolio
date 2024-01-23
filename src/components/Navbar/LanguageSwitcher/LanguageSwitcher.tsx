import { useState } from 'react';
import { FormShape, RealNeumorphicElementProps } from '../../../types/neomorphism';
import NeumorphicElement from '../../neumorphic/NeomorphicElement/NeumorphicElement';
import style from './languageSwitcher.module.scss';

interface ExtendedRealNeumorphicElementProps extends RealNeumorphicElementProps {
  textClassName: string;
}
export const LanguageSwitcher = () => {
  const initialButtonConfigs: ExtendedRealNeumorphicElementProps[] = [
    {
      id: 'esBoton',
      text: 'Español',
      className: style.LanguageSwitcher_esButton,
      textClassName: style.LanguageSwitcher_esButtonText,
      neumorphicOptions: {
        form: FormShape.Flat,
        size: 100,
        intensity: 0.15,
        lightSource: 1,
      },
    },
    {
      id: 'InButton',
      text: 'English',
      className: style.LanguageSwitcher_enButton,
      textClassName: style.LanguageSwitcher_enButtonText,
      neumorphicOptions: {
        form: FormShape.Pressed,
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
                  ? button.neumorphicOptions.form === FormShape.Flat
                    ? FormShape.Pressed
                    : FormShape.Flat
                  : FormShape.Flat,
              },
            }
          : button
      )
    );
  };
  return (
    <NeumorphicElement
      className={style.LanguageSwitcher}
      neumorphicOptions={{
        form: FormShape.Level,
        size: 55,
        intensity: 0.19,
        lightSource: 1,
        distance: 6,
        blur: 11,
      }}
    >
      <div className={style.LanguageSwitcher_buttons}>
        {buttonConfigs.map((button) => (
          <NeumorphicElement
            key={button.id}
            element={'button'}
            onClick={() => handleButtonClick(button.id ? button.id : '')}
            neumorphicOptions={button.neumorphicOptions}
            className={button.className}
          >
            <p className={button.textClassName}>{button.text}</p>
          </NeumorphicElement>
        ))}
      </div>
    </NeumorphicElement>
  );
};
