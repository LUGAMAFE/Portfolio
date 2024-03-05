import { useContext, useEffect, useState } from "react";
import crossIcon from '../../../assets/images/cross.svg';
import { FormShape } from "../../types/neomorphism";
import { NeumorphicStylesContext } from "../context/NeumorphicStylesContext";
import NeumorphicElement from "../neumorphic/NeomorphicElement/NeumorphicElement";
import style from './sidebarMenu.module.scss';
export const SideBarMenu = () => {
    const { handleChangeColorNeon, initialColorNeonSVG } = useContext(NeumorphicStylesContext);

    const [isOpen, setIsOpen] = useState(false);

    const initialButtonConfigsX: ExtendedRealNeumorphicElementProps[] = [
        {
            id: 'externalButton',
            className: style.SidebarMenu_button,
            neumorphicOptions: {
                form: FormShape.Flat,
                size: 43,
                intensity: 0.45,
                lightSource: 1,
                distance: 4,
                blur: 9
            },
        },

    ];

    const [buttonConfig, setButtonConfig] = useState(initialButtonConfigsX[0] || null);

    const handleButtonClickX = (id: string | number) => {
        setButtonConfig(prevButtonConfig =>
            prevButtonConfig.id === id
                ? {
                    ...prevButtonConfig,
                    neumorphicOptions: {
                        ...prevButtonConfig.neumorphicOptions,
                        form: prevButtonConfig.neumorphicOptions
                            ? prevButtonConfig.neumorphicOptions.form === FormShape.Concave
                                ? FormShape.Pressed
                                : FormShape.Concave
                            : FormShape.Concave
                    },
                }
                : prevButtonConfig
        );
    };

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
                if (config.id === 'Opcion1') {
                    return {
                        ...config,
                        style: {
                            ...config.style,
                            backgroundImage: "linear-gradient(90deg, #ff6161 0%, #f6d 100%)",
                            textShadow: `0px 0px 18px ${initialColorNeonSVG.gradiantColorBoxShadow}`
                        }
                    };
                }
                else {
                    return config;
                }
            })
        );
    }, []);
    const handleButtonClick = (id: string | number) => {
        handleChangeColorNeon(id)
        setButtonConfigs((prev) =>
            prev.map((button) =>
                button.id === id
                    ? {
                        ...button,
                        neumorphicOptions: {
                            ...button.neumorphicOptions,
                            form: FormShape.Pressed
                        },
                        style: {
                            ...button.style,
                            backgroundImage: id === "Opcion1" ? "linear-gradient(90deg, #ff6161 0%, #f6d 100%)" : id === "Opcion2" ? "linear-gradient(90deg, #009EFD 0%, #2AF598 100%)" : "linear-gradient(90deg, #FF1741 0%, #FF6174 100%)",
                            textShadow: `0px 0px 18px ${id === "Opcion1" ? "#ffb9bf" : id === "Opcion2" ? "#509eff" : "#FF355F"}`
                        }
                    }
                    : {
                        ...button,
                        neumorphicOptions: {
                            ...button.neumorphicOptions,
                            form: FormShape.Concave
                        },
                        style: {
                            ...button.style,
                            backgroundImage: "none",
                            textShadow: `0px 0px 18px transparent`
                        }
                    }
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
                    key={buttonConfig.id}
                    element={'button'}
                    onClick={() => handleButtonClickX(buttonConfig.id ? buttonConfig.id : '')}
                    neumorphicOptions={buttonConfig.neumorphicOptions}
                    className={buttonConfig.className}
                    id='externalButtonClose'
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

