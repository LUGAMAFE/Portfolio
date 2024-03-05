import { useContext, useEffect, useState } from "react";
import crossIcon from '../../../assets/images/cross.svg';
import { FormShape } from "../../types/neomorphism";
import { NeumorphicStylesContext } from "../context/NeumorphicStylesContext";
import NeumorphicElement from "../neumorphic/NeomorphicElement/NeumorphicElement";
import style from './sidebarMenu.module.scss';
export const SideBarMenu = () => {
    const { handleChangeColorNeon, initialMainColorNeon, initialColorNeonSVG } = useContext(NeumorphicStylesContext);

    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const externalButton = document.getElementById('externalButton');
        const externalButtonClose = document.getElementById('externalButtonClose');

        const handleButtonClickOpen = () => {
            setIsOpen(true);
        };
        const handleButtonClickClose = () => {
            setIsOpen(false);
        };

        if (externalButton) {
            externalButton.addEventListener('click', handleButtonClickOpen);
        }
        if (externalButtonClose) {
            externalButtonClose.addEventListener('click', handleButtonClickClose);
        }

        return () => {
            if (externalButton) {
                externalButton.removeEventListener('click', handleButtonClickOpen);
            }
            if (externalButtonClose) {
                externalButtonClose.removeEventListener('click', handleButtonClickClose);
            }
        };
    }, []);

    const initialButtonConfigs: ExtendedRealNeumorphicElementProps[] = [
        {
            id: 'Opcion1',
            text: 'Pink',
            value: "Opcion1",
            className: style.SidebarMenu_radio,
            textClassName: style.SidebarMenu_esButtonText,
            neumorphicOptions: {
                form: FormShape.Pressed,
                size: 128,
                intensity: 0.42,
                lightSource: 1,
                distance: 6,
                blur: 6
            },
        },
        {
            id: 'Opcion2',
            text: 'Blue',
            value: "Opcion2",
            className: style.SidebarMenu_radio,
            textClassName: style.SidebarMenu_esButtonText,
            neumorphicOptions: {
                form: FormShape.Concave,
                size: 77,
                intensity: 0.78,
                lightSource: 1,
                distance: 2,
                blur: 5
            },
        },
        {
            id: 'Opcion3',
            text: 'Red',
            value: "Opcion3",
            className: style.SidebarMenu_radio,
            textClassName: style.SidebarMenu_esButtonText,
            neumorphicOptions: {
                form: FormShape.Concave,
                size: 77,
                intensity: 0.78,
                lightSource: 1,
                distance: 2,
                blur: 5
            },
        },
    ];

    const [buttonConfigs, setButtonConfigs] = useState(initialButtonConfigs);

    useEffect(() => {
        setButtonConfigs((currentConfigs) =>
            currentConfigs.map((config) => {
                // Comprueba si el botón es 'esBoton' antes de aplicar el estilo de degradado
                if (config.id === 'Opcion1') {
                    return {
                        ...config,
                        // Aplica el estilo de degradado solo a 'esBoton'
                        style: {
                            ...config.style,
                            backgroundImage: initialMainColorNeon,
                            textShadow: `0px 0px 18px ${initialColorNeonSVG.gradiantColorBoxShadow}` // Asegúrate de reemplazar <otroColor> con el color final del degradado
                        }
                    };
                } else {
                    // Para otros botones, devuelve el config sin cambios
                    return config;
                }
            })
        );
    }, [initialMainColorNeon]);

    const handleButtonClick = (id: string | number) => {
        handleChangeColorNeon(id)

        setButtonConfigs((prev) =>
            prev.map((button) =>
                button.id === id
                    ? {
                        ...button,
                        neumorphicOptions: {
                            ...button.neumorphicOptions,
                            form: button.neumorphicOptions
                                ? button.neumorphicOptions.form === FormShape.Concave
                                    ? FormShape.Pressed
                                    : FormShape.Concave
                                : FormShape.Concave,
                        },
                    }
                    : button
            )
        );
    };

    return (
        <div>

            <NeumorphicElement
                neumorphicOptions={{
                    form: FormShape.Level,
                    size: 55,
                    intensity: 0.19,
                    lightSource: 1,
                    distance: 6,
                    blur: 11,
                }}
                className={style.SidebarMenu}
                style={{
                    zIndex: 999,
                    width: isOpen ? '250px' : '0',
                    transition: 'width 0.5s ease',

                }}
            >

                <NeumorphicElement
                    className={style.SidebarMenu_button}
                    id='externalButtonClose'
                    element={'button'}
                    neumorphicOptions={{
                        form: FormShape.Level,
                        size: 55,
                        intensity: 0.19,
                        lightSource: 1,
                        distance: 6,
                        blur: 11,
                    }}

                >
                    <img className={style.SidebarMenu_menuSVG} src={crossIcon} alt="circle part of input" />

                </NeumorphicElement>
                <div className={style.SidebarMenu_neuContainer}>
                    {buttonConfigs.map((button, index) => (
                        <div key={index} className="" style={{ display: "flex", gap: "5px" }}>
                            <NeumorphicElement
                                key={button.id}
                                element={'button'}
                                onClick={() => handleButtonClick(button.id ? button.id : '')}
                                neumorphicOptions={button.neumorphicOptions}
                                className={button.className}
                            >
                            </NeumorphicElement>
                            <p className={button.textClassName} style={button.style}>{button.text}</p>
                        </div>
                    ))}
                </div>
            </NeumorphicElement>
        </div>
    );
}
{/* <div className={style.SidebarMenu_button}>
    <NeumorphicElement
        className={style.SidebarMenu_neuContainer}
        nTestId="SidebarMenu_neuContainer"
        neumorphicOptions={{
            form: FormShape.Pressed,
            size: isChecked ? 196 : 196,
            intensity: isChecked ? 0.17 : 0.51,
            lightSource: 3,
            distance: isChecked ? 20 : 23,
            blur: isChecked ? 39 : 46,
        }}
    >   <input className={style.SidebarMenu_radio} type="radio" id="opcion1" name="opciones" value="Opcion1" onChange={handleChangeColorNeon}></input></NeumorphicElement>

    <NeumorphicElement
        className={style.SidebarMenu_neuContainer}
        nTestId="SidebarMenu_neuContainer"
        neumorphicOptions={{
            form: FormShape.Pressed,
            size: isChecked ? 196 : 196,
            intensity: isChecked ? 0.17 : 0.51,
            lightSource: 3,
            distance: isChecked ? 20 : 23,
            blur: isChecked ? 39 : 46,
        }}
    >   <input className={style.SidebarMenu_radio} type="radio" id="opcion1" name="opciones" value="Opcion1" onChange={handleChangeColorNeon}></input></NeumorphicElement>
    <NeumorphicElement
        className={style.SidebarMenu_neuContainer}
        nTestId="SidebarMenu_neuContainer"
        neumorphicOptions={{
            form: FormShape.Pressed,
            size: isChecked ? 196 : 196,
            intensity: isChecked ? 0.17 : 0.51,
            lightSource: 3,
            distance: isChecked ? 20 : 23,
            blur: isChecked ? 39 : 46,
        }}
    >   <input className={style.SidebarMenu_radio} type="radio" id="opcion1" name="opciones" value="Opcion1" onChange={handleChangeColorNeon}></input></NeumorphicElement>
</div> */}
