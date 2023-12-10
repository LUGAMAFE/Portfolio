import NeumorphicElement from '../../neumorphic/NeomorphicElement/NeumorphicElement';
import { FormInputs } from '../FormInput';
import style from './form.module.scss';

export const Form = () => {
  const InputsArray = ['Nombre', 'Correo Electronico', 'Telefono', 'Razon de Contacto'];
  return (
    <form className={style.Form}>
      {InputsArray.map((placeHolder, index) => {
        return <FormInputs key={index} placeHolder={placeHolder} />;
      })}

      <NeumorphicElement
        neumorphicOptions={{
          form: 'pressed',
          size: 174,
          intensity: 0.55,
          lightSource: 1,
          distance: 13,
          blur: 23,
        }}
        element={'textarea'}
        placeholder="mensaje"
        className={style.Form_textarea}
      />
      <button className={style.Form_button}>
        <p className={style.Form_buttonText}>Enviar</p>
      </button>
    </form>
  );
};
