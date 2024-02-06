import { useEffect, useState } from "react";
import crossIcon from '../../../assets/images/cross.svg';
import { FormShape } from "../../types/neomorphism";
import NeumorphicElement from "../neumorphic/NeomorphicElement/NeumorphicElement";
import style from './sidebarMenu.module.scss';
export const SideBarMenu = () => {

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

    const handleChange = (e) => {
        console.log(`Opción seleccionada: ${e.target.value}`);
    }

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
                <div className={style.SidebarMenu_button}>
                    <input type="radio" id="opcion1" name="opciones" value="Opcion1" onChange={handleChange}></input>
                    <input type="radio" id="opcion2" name="opciones" value="Opcion1" onChange={handleChange}></input>
                    <input type="radio" id="opcion3" name="opciones" value="Opcion1" onChange={handleChange}></input>
                </div>
            </NeumorphicElement>
        </div>
    );
}
