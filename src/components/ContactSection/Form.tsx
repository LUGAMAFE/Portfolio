import style from '../../style/sass/contact.module.scss';
import NeumorphicElement from '../neumorphic/NeumorphicElement';
import { FormInputs } from './FormInputs';

export const Form = () => {
  const InputsArray = ['Nombre', 'Correo Electronico', 'Telefono', 'Razon de Contacto'];
  return (
    <form className={style.form}>
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
      />
      <button>
        <p>Enviar</p>
      </button>
    </form>
  );
};
