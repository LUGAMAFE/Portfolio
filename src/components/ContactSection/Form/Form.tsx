import { useContext } from 'react';
import { FormShape } from '../../../types/neomorphism';
import { NeumorphicStylesContext } from '../../context/NeumorphicStylesContext';
import NeumorphicElement from '../../neumorphic/NeomorphicElement/NeumorphicElement';
import { FormInputs } from '../FormInput';
import style from './form.module.scss';

export const Form = () => {
  const InputsArray = ['Nombre', 'Correo Electronico', 'Telefono', 'Razon de Contacto'];
  const { initialMainColorNeon, isChecked } = useContext(NeumorphicStylesContext);
  return (
    <form className={style.Form}>
      {InputsArray.map((placeHolder, index) => {
        return <FormInputs key={index} placeHolder={placeHolder} />;
      })}

      <NeumorphicElement
        neumorphicOptions={{

          form: FormShape.Pressed,
          size: isChecked ? 49 : 174,
          intensity: isChecked ? 0.23 : 0.55,
          lightSource: 1,
          distance: isChecked ? 5 : 13,
          blur: isChecked ? 10 : 23,
        }}
        element={'textarea'}
        placeholder="Mensaje"
        className={style.Form_textarea}
      />
      <button className={style.Form_button} style={{ background: initialMainColorNeon }}>
        <p className={style.Form_buttonText}>Enviar</p>
      </button>
    </form>
  );
};
