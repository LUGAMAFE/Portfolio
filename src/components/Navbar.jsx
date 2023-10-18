import { useContext, useState } from 'react';
import style from '../style/sass/style.module.scss';
import { NeumorphicStylesContext } from './context/NeumorphicStylesContext';
import NeumorphicElement from './neumorphic/NeumorphicElement';
export const Navbar = () => {
  const { handleChangeColor: styleHandleChangeColor } = useContext(NeumorphicStylesContext);
  const initialButtonConfigs = [
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

  const handleButtonClick = (id) => {
    setButtonConfigs((prev) =>
      prev.map((button) =>
        button.id === id
          ? {
              ...button,
              neumorphicOptions: {
                ...button.neumorphicOptions,
                form: button.neumorphicOptions.form === 'flat' ? 'pressed' : 'flat',
              },
            }
          : button
      )
    );
  };
  const handleChangeColor = (event) => {
    const isChecked = event.target.checked;
    styleHandleChangeColor(isChecked);
  };

  return (
    <NeumorphicElement
      className={style.myTopNavbar}
      nTestId="navbar"
      neumorphicOptions={{
        form: 'pressed',
        size: '196',
        intensity: '0.51',
        lightSource: 3,
        distance: '23',
        blur: 46,
      }}
    >
      <div className={style.logo}>
        <p>{'<LUGAMAFE/>'}</p>
      </div>
      <div className={style.lights}>
        <p>{'Encender Luces'}</p>
        <label className={style.toggle}>
          <input
            onChange={handleChangeColor}
            className={style.toggleCheckbox}
            type="checkbox"
          ></input>
          <div className={style.toggleSwitch}></div>
        </label>
      </div>
      <NeumorphicElement
        className={style.changeIdiom}
        neumorphicOptions={{
          form: 'level',
          size: '55',
          intensity: '0.19',
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
              onClick={() => handleButtonClick(button.id)}
              neumorphicOptions={button.neumorphicOptions}
              className={button.className}
            >
              <p>{button.text}</p>
            </NeumorphicElement>
          ))}
        </div>
      </NeumorphicElement>
      <div className={style.menuToggle}>
        <NeumorphicElement
          element={'button'}
          neumorphicOptions={{
            form: 'level',
            size: '55',
            intensity: '0.19',
            lightSource: 1,
            distance: 6,
            blur: 11,
          }}
        >
          <svg>
            <image href="../../assets/images/bx-menu.svg" />
          </svg>
        </NeumorphicElement>
      </div>
    </NeumorphicElement>
  );
};
